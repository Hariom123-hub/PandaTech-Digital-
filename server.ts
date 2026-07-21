import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { db } from "./src/db/index.ts";
import { siteData, demoRequests, contactEnquiries } from "./src/db/schema.ts";
import { eq } from "drizzle-orm";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

// Lazy-load Gemini
let genAI: any = null;
function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is not configured. Please add it to your environment variables.");
    }
    genAI = new GoogleGenAI({ 
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return genAI;
}

// AI Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, lastInteractionId } = req.body;
    
    let ai;
    try {
      ai = getGenAI();
    } catch (configError: any) {
      console.error("AI Configuration Error:", configError.message);
      return res.status(503).json({ 
        error: "AI service is currently unavailable. Please ensure GEMINI_API_KEY is set in environment variables.",
        details: configError.message
      });
    }

    // Fetch system instruction from DB
    let systemInstruction = "";
    try {
      const result = await db.select().from(siteData).where(eq(siteData.key, "ai_system_instruction"));
      if (result.length > 0) {
        systemInstruction = result[0].content as string;
      }
    } catch (err) {
      console.error("Failed to fetch system instruction from DB:", err);
    }

    if (!systemInstruction) {
      systemInstruction = `
        You are the official AI Assistant of PandaTech Digital.
        Your job is to answer every customer question accurately, professionally, and politely.
        Refer users to WhatsApp, Email, or our Contact Form for direct help.
        
        PandaTech Digital provides FREE Demo Websites.
        Payment: Projects begin after advance payment.
        Support: WhatsApp (+919678377275), Email, or Contact Form.
      `;
    }

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: message }] }],
      systemInstruction: systemInstruction,
    });
    
    const response = result.response;
    const text = response.text();

    res.json({ text, interactionId: Date.now().toString() });
  } catch (error: any) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Database persistence endpoints
app.post("/api/demo-requests", async (req, res) => {
  try {
    const data = req.body;
    const result = await db.insert(demoRequests).values(data).returning();
    res.json(result[0]);
  } catch (error: any) {
    console.error("Demo Request Save Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, phoneNumber, email, projectInterest, message } = req.body;
    
    // 1. Save to DB (Required by user)
    const result = await db.insert(contactEnquiries).values({
      fullName,
      phoneNumber,
      email,
      projectInterest,
      message
    }).returning();

    // 2. Prepare WhatsApp Notification
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-IN');
    const formattedTime = now.toLocaleTimeString('en-IN');
    
    const whatsappMsg = `
New Website Inquiry

👤 Name: ${fullName}
📞 Phone: ${phoneNumber}
📧 Email: ${email}
💼 Project: ${projectInterest}
📝 Message: ${message}

📅 Date: ${formattedDate}
🕒 Time: ${formattedTime}
    `.trim();

    // 3. Send Real WhatsApp Notification
    const whatsappPhone = (process.env.WHATSAPP_PHONE || "+919678377275").trim();
    const whatsappApiKey = (process.env.WHATSAPP_API_KEY || "").trim();

    if (!whatsappApiKey || whatsappApiKey === "YOUR_CALLMEBOT_API_KEY") {
      console.warn("WhatsApp notification skipped: WHATSAPP_API_KEY not configured.");
      throw new Error("Notification Error: WhatsApp API Key is missing. Please configure it in your secrets.");
    }

    const encodedMsg = encodeURIComponent(whatsappMsg);
    // CallMeBot needs phone without '+'
    const cleanPhone = whatsappPhone.replace(/\+/g, '');
    const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${encodedMsg}&apikey=${whatsappApiKey}`;

    console.log(`--- Sending WhatsApp Notification to ${cleanPhone} via CallMeBot ---`);
    
    const waResponse = await fetch(whatsappUrl);
    
    if (!waResponse.ok) {
      const errorText = await waResponse.text();
      console.error("WhatsApp API Error:", errorText);
      throw new Error(`WhatsApp delivery failed: ${errorText || waResponse.statusText}`);
    }

    const responseText = await waResponse.text();
    if (responseText.toLowerCase().includes("error") || responseText.toLowerCase().includes("invalid")) {
      console.error("WhatsApp API Error in Response:", responseText);
      throw new Error(`WhatsApp API Error: ${responseText}`);
    }

    console.log("WhatsApp Notification Sent Successfully");

    res.json({ success: true, enquiry: result[0] });
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    // Even if WhatsApp fails, the enquiry is already saved in DB (Step 1)
    res.status(500).json({ 
      error: error.message,
      saved: true 
    });
  }
});

app.get("/api/site-data/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const result = await db.select().from(siteData).where(eq(siteData.key, key));
    if (result.length === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json(result[0].content);
  } catch (error: any) {
    console.error("Fetch Site Data Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/site-data", async (req, res) => {
  try {
    const { key, content } = req.body;
    if (!key || content === undefined) {
      return res.status(400).json({ error: "Key and content are required" });
    }

    const result = await db.insert(siteData)
      .values({ key, content })
      .onConflictDoUpdate({
        target: siteData.key,
        set: { content, updatedAt: new Date() }
      })
      .returning();

    res.json(result[0]);
  } catch (error: any) {
    console.error("Update Site Data Error:", error);
    res.status(500).json({ error: error.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    // Ensure public assets are served even in production if not copied to dist
    app.use(express.static(path.join(process.cwd(), "public")));
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
