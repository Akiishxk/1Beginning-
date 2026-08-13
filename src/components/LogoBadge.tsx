import React from 'react';
import { BUSINESS_NAME } from '../utils/sms';
import brandLogoImg from '../assets/images/brand_logo_emblem_1786662022504.jpg';

interface LogoBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  theme?: 'light' | 'dark';
}

export const LogoBadge: React.FC<LogoBadgeProps> = ({ size = 'md' }) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  const isHero = size === 'hero';

  if (isHero) {
    return (
      <div className="relative inline-flex flex-col items-center justify-center p-6 text-center select-none group">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>
        
        {/* Emblem Graphics Box with Generated Logo */}
        <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-b from-[#1a110a] to-[#0d0905] border-2 border-orange-500/50 shadow-2xl shadow-orange-500/30 flex flex-col items-center justify-center p-2.5 transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src={brandLogoImg}
            alt="1Beginning Junk & Debris Removal Logo"
            className="w-full h-full object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Large Brand Wordmark */}
        <div className="relative z-10 mt-5 flex flex-col items-center">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            1BEGINNING
          </h1>
          <div className="mt-1 px-4 py-1 rounded-full bg-[#1c1209] border border-orange-500/40 text-orange-400 font-heading font-black text-xs sm:text-sm tracking-widest uppercase shadow-md shadow-black/40">
            JUNK & DEBRIS REMOVAL
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase mt-2">
            HAULING · CLEANOUTS · DUMPSTER RENTAL · CLEVELAND, OH
          </span>
        </div>
      </div>
    );
  }

  return (
    <a href="#" className="flex items-center gap-3 group select-none">
      <div
        className={`rounded-xl overflow-hidden border border-orange-500/40 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform bg-[#100a06] shrink-0 ${
          isSmall ? 'w-9 h-9' : isLarge ? 'w-12 h-12' : 'w-10 h-10'
        }`}
      >
        <img
          src={brandLogoImg}
          alt="1Beginning Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-black tracking-tight text-white group-hover:text-orange-400 transition-colors ${
            isSmall ? 'text-lg' : isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {BUSINESS_NAME}
        </span>
        <span className="font-heading font-bold uppercase tracking-widest text-[9px] text-orange-400 mt-0.5">
          JUNK & DEBRIS REMOVAL
        </span>
      </div>
    </a>
  );
};


