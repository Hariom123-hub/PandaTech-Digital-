import { GoogleGenAI } from "@google/genai";

// Cache for GenAI instance
let genAI: any = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is not configured in Vercel environment variables.");
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

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    let ai;
    try {
      ai = getGenAI();
    } catch (configError: any) {
      console.error("Config Error:", configError.message);
      return res.status(503).json({ error: configError.message });
    }

    const model = ai.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: {
        role: "system",
        parts: [{ text: `
          You are the official AI Assistant of PandaTech Digital.
          Your job is to answer every customer question accurately, professionally, and politely.
          
          Core Rules:
          - Never guess information.
          - PandaTech Digital provides FREE Demo Websites.
          - Support: WhatsApp (+919678377275), Email, or Contact Form.
          - Mission: Help businesses build a powerful online presence with modern, affordable, and high-quality digital solutions.
          - Technology: Responsive, Fast, SEO Friendly, Secure, Modern UI.
        `}]
      }
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      text: text,
      interactionId: Date.now().toString()
    });
  } catch (error: any) {
    console.error("Vercel API Error:", error);
    return res.status(500).json({ 
      error: "AI Assistant is currently unavailable.",
      details: error.message 
    });
  }
}
