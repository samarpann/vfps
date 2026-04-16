import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg group-hover:rotate-6 transition-transform">
                <img src="/images/logo.png" alt="VFPS Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white leading-none">VFPS</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">
                  Verma Food Processing System
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Leading manufacturer of high-quality stainless steel food processing machinery since 2008. Innovative solutions for global industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1e3a8a] transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1e3a8a] transition-all">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1e3a8a] transition-all">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Industries', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-4 text-slate-400">
              <li>Fryums Plant</li>
              <li>Kurkure Plant</li>
              <li>Namkeen Plant</li>
              <li>Potato Chips Plant</li>
              <li>Noodles Plant</li>
              <li>Snack Extruders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="text-[#1e3a8a]" size={24} />
              </div>
              <p className="text-slate-400 text-sm">
                Plot No. 123, Industrial Area Phase II, <br />
                New Delhi, India - 1100XX
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <Phone className="text-[#1e3a8a]" size={24} />
              </div>
              <p className="text-slate-400 text-sm">
                +91 98XXX XXXXX <br />
                +91 99XXX XXXXX
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <Mail className="text-[#1e3a8a]" size={24} />
              </div>
              <p className="text-slate-400 text-sm">
                info@vfp-system.com <br />
                sales@vfp-system.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Verma Food Processing System. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
