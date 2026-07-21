import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    businessCategory: '',
    businessAddress: '',
    mobileNumber: '',
    whatsAppNumber: '',
    email: '',
    website: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.ownerName) newErrors.ownerName = 'Owner name is required';
    if (!formData.businessCategory) newErrors.businessCategory = 'Category is required';
    if (!formData.businessAddress) newErrors.businessAddress = 'Address is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.whatsAppNumber) newErrors.whatsAppNumber = 'WhatsApp number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Formatted WhatsApp Message
    const message = `🚀 NEW FREE DEMO REQUEST

🏢 Business Name:
${formData.businessName}

👤 Owner Name:
${formData.ownerName}

🏷 Business Category:
${formData.businessCategory}

📍 Business Address:
${formData.businessAddress}

📞 Mobile Number:
${formData.mobileNumber}

💬 WhatsApp Number:
${formData.whatsAppNumber}

📧 Email:
${formData.email || 'N/A'}

🌐 Existing Website:
${formData.website || 'N/A'}

📝 Business Description:
${formData.description || 'N/A'}

Thank you.`;

    const whatsappUrl = `https://wa.me/919678377275?text=${encodeURIComponent(message)}`;

    // Save to database
    fetch('/api/demo-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(err => console.error('Failed to save demo request:', err));

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111827] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight">
                  Request <span className="text-blue-500">Free Demo</span>
                </h2>
                <p className="text-[#B8C1D9] text-xs font-medium uppercase tracking-widest mt-1">Get your personalized preview today</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white/70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Required Fields */}
                <div className="space-y-4">
                  <FormField 
                    label="Business Name *" 
                    name="businessName" 
                    value={formData.businessName} 
                    onChange={handleChange} 
                    error={errors.businessName} 
                  />
                  <FormField 
                    label="Owner Name *" 
                    name="ownerName" 
                    value={formData.ownerName} 
                    onChange={handleChange} 
                    error={errors.ownerName} 
                  />
                  <FormField 
                    label="Business Category *" 
                    name="businessCategory" 
                    value={formData.businessCategory} 
                    onChange={handleChange} 
                    error={errors.businessCategory} 
                  />
                </div>

                <div className="space-y-4">
                  <FormField 
                    label="Mobile Number *" 
                    name="mobileNumber" 
                    value={formData.mobileNumber} 
                    onChange={handleChange} 
                    error={errors.mobileNumber} 
                    type="tel"
                  />
                  <FormField 
                    label="WhatsApp Number *" 
                    name="whatsAppNumber" 
                    value={formData.whatsAppNumber} 
                    onChange={handleChange} 
                    error={errors.whatsAppNumber} 
                    type="tel"
                  />
                  <FormField 
                    label="Business Address *" 
                    name="businessAddress" 
                    value={formData.businessAddress} 
                    onChange={handleChange} 
                    error={errors.businessAddress} 
                  />
                </div>
              </div>

              {/* Optional Fields */}
              <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField 
                    label="Email Address (Optional)" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    type="email"
                  />
                  <FormField 
                    label="Existing Website (Optional)" 
                    name="website" 
                    value={formData.website} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">
                    Business Description (Optional)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us a bit about what you do..."
                    className="w-full bg-white/5 border border-white/5 focus:border-blue-500/50 rounded-2xl px-6 py-4 text-white text-sm outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20",
                    isLoading 
                      ? "bg-blue-600/50 cursor-not-allowed" 
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  )}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Preparing Demo...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] font-medium text-[#B8C1D9]/40 mt-4 uppercase tracking-widest">
                  Secure & Encrypted • 100% Free Consultation
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function FormField({ label, name, value, onChange, error, type = 'text' }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-4">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full bg-white/5 border rounded-2xl px-6 py-4 text-white text-sm outline-none transition-all",
          error ? "border-red-500/50" : "border-white/5 focus:border-blue-500/50"
        )}
      />
      {error && <p className="text-[10px] font-bold text-red-500 ml-4 uppercase">{error}</p>}
    </div>
  );
}
