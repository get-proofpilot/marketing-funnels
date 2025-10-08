import { useState } from 'react';
import { Mail, Phone, User, Briefcase, Loader2 } from 'lucide-react';

interface LeadCaptureFormProps {
  onSubmit: (leadData: {
    business_name: string;
    contact_name: string;
    email: string;
    phone: string;
    business_type: string;
  }) => void;
  businessType?: string;
  isSubmitting?: boolean;
}

export default function LeadCaptureForm({ onSubmit, businessType, isSubmitting }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    business_type: businessType || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Get Your Personalized Results
        </h3>
        <p className="text-slate-600">
          Enter your details to see your custom marketing roadmap
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="business_name" className="block text-sm font-semibold text-slate-700 mb-2">
            Business Name *
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              id="business_name"
              name="business_name"
              required
              value={formData.business_name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="ABC Plumbing"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact_name" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              required
              value={formData.contact_name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="John Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="john@abcplumbing.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {!businessType && (
          <div>
            <label htmlFor="business_type" className="block text-sm font-semibold text-slate-700 mb-2">
              Business Type *
            </label>
            <select
              id="business_type"
              name="business_type"
              required
              value={formData.business_type}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">Select your business type</option>
              <option value="plumbing">Plumbing</option>
              <option value="hvac">HVAC</option>
              <option value="electrical">Electrical</option>
              <option value="roofing">Roofing</option>
              <option value="landscaping">Landscaping</option>
              <option value="cleaning">Cleaning Services</option>
              <option value="pest_control">Pest Control</option>
              <option value="other">Other Home Service</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Show Me My Results'
          )}
        </button>

        <p className="text-xs text-slate-600 text-center">
          We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </div>
  );
}
