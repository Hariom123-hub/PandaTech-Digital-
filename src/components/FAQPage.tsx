import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, ArrowLeft, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Support' | 'Development' | 'Hosting' | 'Maintenance';
}

const faqs: FAQItem[] = [
  { category: 'General', question: 'What is PandaTech Digital?', answer: 'PandaTech Digital is a premium software agency specializing in high-performance websites, e-commerce platforms, and custom digital solutions.' },
  { category: 'Development', question: 'What technologies do you use?', answer: 'We use modern stacks including Next.js, React, Tailwind CSS, and robust backends like Node.js and Firebase to ensure speed and scalability.' },
  { category: 'Pricing', question: 'Are there any hidden charges?', answer: 'No, we believe in 100% transparency. All costs are discussed and agreed upon before we start your project.' },
  { category: 'Support', question: 'How can I contact support?', answer: 'You can reach us via WhatsApp at +91 9678377275, email us, or use our dedicated support portal for quick assistance.' },
  { category: 'Hosting', question: 'Do you provide domain and hosting?', answer: 'Yes, we offer premium high-speed hosting and domain registration support with all our website packages.' },
  { category: 'Maintenance', question: 'Do you offer website maintenance?', answer: 'Absolutely! We provide monthly and yearly maintenance plans to keep your site secure, updated, and performing at its best.' },
  { category: 'Development', question: 'How long does it take to build a website?', answer: 'Depending on the package, it can take anywhere from 3 days for a demo to 120+ days for a full-scale enterprise application.' },
  { category: 'General', question: 'Can you redesign my existing website?', answer: 'Yes, we can transform your outdated website into a modern, high-converting premium digital experience.' },
  { category: 'Pricing', question: 'Do you offer refunds?', answer: 'Please refer to our Refund Policy for detailed information on our satisfaction guarantee and cancellation terms.' },
  { category: 'Support', question: 'Do you provide training?', answer: 'Yes, we provide recorded video tutorials and live walkthroughs to help you manage your new website with ease.' },
  { category: 'Hosting', question: 'Is SSL security included?', answer: 'Yes, every website we host comes with a free SSL certificate to ensure secure transactions and user trust.' },
  { category: 'Maintenance', question: 'Can I add new features later?', answer: 'Our modular architecture allows you to scale and add new functionalities as your business grows.' },
];

const categories = ['All', 'General', 'Pricing', 'Support', 'Development', 'Hosting', 'Maintenance'];

interface FAQPageProps {
  onBack: () => void;
}

export default function FAQPage({ onBack }: FAQPageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#050816] pt-20 md:pt-24 pb-12 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#B8C1D9] hover:text-blue-500 transition-colors font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-6 md:mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight uppercase mb-4 md:mb-6 leading-none">
            Frequently <span className="text-blue-500">Asked</span> <br /> Questions
          </h1>
          <p className="text-[#B8C1D9] font-medium text-sm md:text-lg max-w-2xl">
            Find quick answers to common questions about our services, pricing, and development process.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <div className="relative">
            <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#B8C1D9]/50" />
            <input 
              type="text" 
              placeholder="Search your question here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-4 md:py-5 bg-[#111827] rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl shadow-blue-900/10 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-bold text-white text-[13px] md:text-base placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] transition-all border",
                  activeCategory === cat 
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" 
                    : "bg-white/5 text-[#B8C1D9] border-white/5 hover:border-blue-500/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#111827] rounded-2xl md:rounded-[2rem] border border-white/5 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full p-5 md:p-8 flex items-center justify-between text-left group"
                  >
                    <div className="space-y-1.5 md:space-y-2">
                      <span className="text-[8px] md:text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]">{faq.category}</span>
                      <h3 className="text-sm md:text-xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-blue-500 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={cn(
                      "w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all flex-shrink-0 ml-3 md:ml-4 border",
                      activeIndex === index ? "bg-blue-600 text-white border-blue-600" : "bg-white/5 text-[#B8C1D9] border-white/5"
                    )}>
                      {activeIndex === index ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 md:px-8 pb-5 md:pb-8 text-[#B8C1D9] font-medium text-xs md:text-base leading-relaxed max-w-3xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-white/20 mx-auto mb-6">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-2">No Results Found</h3>
                <p className="text-[#B8C1D9] font-medium">Try searching for something else or browse categories.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
