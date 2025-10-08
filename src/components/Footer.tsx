import { Link } from 'react-router-dom';
import { HardHat, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-lg font-black text-white">ProofPilot</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping plumbers, HVAC, electricians, and home service pros get more customers through effective digital marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/scorecard" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Marketing Scorecard
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link to="/seo-guide" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  SEO Guide
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/lead-magnet" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Free SEO Blueprint
                </Link>
              </li>
              <li>
                <Link to="/scorecard" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Free Marketing Audit
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  Revenue Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a href="mailto:info@getproofpilot.com" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  info@getproofpilot.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <a href="tel:+16029628619" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                  (602) 962-8619
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 font-semibold">
              © {new Date().getFullYear()} ProofPilot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-orange-500 font-semibold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
