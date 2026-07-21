import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Youtube, Facebook, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectInterest: 'Website Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          projectInterest: 'Website Development',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Contact Submission Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="pt-4 pb-24 md:pt-6 md:pb-32 bg-[#0D1224]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
                Connect With Us
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.95]">
                Let's Build <br className="hidden md:block" /> Something <span className="text-blue-500">Great</span>.
              </h2>
              <p className="text-[#B8C1D9] text-base md:text-xl font-medium leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear from you. Get in touch and let's start your journey.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/5 shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-base md:text-lg font-bold text-white break-words">Karandighi, West Bengal, 733215</p>
                </div>
              </div>
 
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/5 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Call or WhatsApp</p>
                  <p className="text-base md:text-lg font-bold text-white">+91 9678377275</p>
                </div>
              </div>
 
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/5 shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-base md:text-lg font-bold text-white break-all">pandatechdigital253@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://wa.me/919678377275" target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1DM5Fg5qYa/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-blue-800 text-white rounded-2xl flex items-center justify-center hover:bg-blue-900 transition-all shadow-xl shadow-blue-800/20">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/pandatech-digital-a300ba344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#0077B5] text-white rounded-2xl flex items-center justify-center hover:bg-[#005a87] transition-all shadow-xl shadow-blue-800/20">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@PandaTechDigital-01" target="_blank" rel="noreferrer" className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl shadow-blue-900/10"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-[#B8C1D9] font-medium max-w-sm">
                  ✅ Thank you! Your message has been sent successfully. We'll contact you soon.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-blue-500 font-bold uppercase tracking-widest text-xs hover:text-blue-400 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      required
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-white/20"
                      placeholder="+91 0000000000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Project Interest</label>
                  <select 
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all appearance-none"
                  >
                    <option className="bg-[#111827]" value="Website Development">Website Development</option>
                    <option className="bg-[#111827]" value="E-Commerce Solution">E-Commerce Solution</option>
                    <option className="bg-[#111827]" value="AI Integration">AI Integration</option>
                    <option className="bg-[#111827]" value="Business Automation">Business Automation</option>
                    <option className="bg-[#111827]" value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-white/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-bold text-center">{errorMessage}</p>
                )}

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
