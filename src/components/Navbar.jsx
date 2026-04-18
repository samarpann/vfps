import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoImg from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'R&D', path: '/rnd' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white overflow-hidden shadow-md group-hover:scale-110 transition-transform">
              <img src={logoImg} alt="VFPS Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter leading-none ${scrolled ? 'text-[#1e3a8a]' : 'text-white'}`}>
                VFPS
              </span>
              <span className={`text-[8px] font-bold uppercase tracking-[0.2em] ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                Verma Food Processing System
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#1e3a8a] ${
                  location.pathname === link.path
                    ? 'text-[#1e3a8a]'
                    : scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/VFPS_Catalogue.pdf" 
              download 
              className="flex items-center gap-2 bg-[#1e3a8a] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              <Download size={16} />
              Catalogue
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <a 
                  href="/VFPS_Catalogue.pdf" 
                  download 
                  className="w-full flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-5 py-4 rounded-xl font-bold"
                >
                  <Download size={20} />
                  Download Catalogue
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
