import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const [lastInteractionId, setLastInteractionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chats]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setChats(prev => [...prev, { role: 'user', parts: [{ text: userMessage }] }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          lastInteractionId
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response from AI');
      }

      const data = await response.json();
      if (data.text) {
        setChats(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }]);
        if (data.interactionId) {
          setLastInteractionId(data.interactionId);
        }
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      setChats(prev => [...prev, { 
        role: 'model', 
        parts: [{ text: `⚠️ **Assistant Error:** ${error.message || 'I am having trouble connecting right now. Please try again later or contact us directly via WhatsApp.'}` }] 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] bg-blue-600 text-white p-3.5 md:p-5 rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-[10px] md:text-base">
          AI Assistant
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-[60] w-[calc(100vw-2rem)] md:w-[400px] h-[min(600px,calc(100vh-8rem))] bg-[#111827] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 md:p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold">PandaTech AI</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-80">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 md:p-2 rounded-lg transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Body */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4 bg-[#0D1224]">
              {chats.length === 0 && (
                <div className="text-center py-6 md:py-10 px-4 md:px-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 text-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3 md:mb-4 border border-blue-500/20">
                    <Bot className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h5 className="text-sm md:text-base font-bold text-white mb-1.5 md:mb-2">How can I help you?</h5>
                  <p className="text-xs md:text-sm text-[#B8C1D9]">
                    Ask me about our packages, services, or how we can help grow your business.
                  </p>
                </div>
              )}
              {chats.map((chat, i) => (
                <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 md:p-4 rounded-xl md:rounded-2xl text-[13px] md:text-sm ${
                      chat.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/10'
                        : 'bg-[#111827] text-[#B8C1D9] rounded-tl-none border border-white/5 shadow-sm'
                    }`}
                  >
                    <div className="markdown-body prose prose-invert prose-sm">
                      <Markdown>{chat.parts[0].text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#111827] p-3 md:p-4 rounded-xl md:rounded-2xl rounded-tl-none border border-white/5 shadow-sm">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin text-blue-500" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 md:p-6 bg-[#111827] border-t border-white/5">
              <form
                className="relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type message..."
                  className="w-full bg-[#0D1224] border border-white/5 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 pr-12 md:pr-14 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm text-white placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || isLoading}
                  className="absolute right-1.5 md:right-2 top-1.5 md:top-2 bottom-1.5 md:bottom-2 bg-blue-600 text-white px-3 md:px-4 rounded-lg md:rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
