import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Star } from 'lucide-react';
import {
  BUSINESS_PHONE,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
  CALL_NOW_HREF,
  buildSmsHref,
} from '../utils/sms';
import { LogoBadge } from './LogoBadge';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WHAT WE DO', href: '#services' },
    { name: 'WHO WE ARE', href: '#about' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'ON THE JOB', href: '#gallery' },
    { name: 'SERVICE AREA', href: '#service-area' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050811]/95 backdrop-blur-md transition-all border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <LogoBadge size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-black tracking-widest text-slate-300 font-heading">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-orange-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070c18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-black font-heading tracking-wider text-slate-200 hover:bg-slate-800/60 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={CALL_NOW_HREF}
              className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_PHONE}</span>
            </a>
            <a
              href={buildSmsHref()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700"
            >
              <MessageSquare className="w-4 h-4 text-orange-400" />
              <span>Text for Free Estimate</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
