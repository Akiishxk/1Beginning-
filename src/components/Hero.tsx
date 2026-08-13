import React from 'react';
import { Phone, MessageSquare, Star } from 'lucide-react';
import {
  BUSINESS_PHONE,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
  CALL_NOW_HREF,
  buildSmsHref,
} from '../utils/sms';
import { LogoBadge } from './LogoBadge';
import { MarqueeStrip } from './MarqueeStrip';
import heroTruckBg from '../assets/images/hero_truck_clean_1786662169574.jpg';

export const Hero: React.FC = () => {
  const tickerItems = [
    { text: 'JUNK PICKUP', highlight: false },
    { text: 'FULL PROPERTY', highlightWord: 'CLEAROUTS' },
    { text: 'FAST SAME-DAY SERVICE', highlight: false },
    { text: 'FAIR UPFRONT PRICING', highlight: false },
    { text: 'GARAGE & BASEMENT', highlightWord: 'CLEANOUTS' },
    { text: 'DEMOLITION &', highlightWord: 'TEARDOWNS' },
    { text: 'APPLIANCE & FURNITURE HAULING', highlight: false },
    { text: 'CARPET & FLOORING REMOVAL', highlight: false },
    { text: 'ESTATE & EVICTION', highlightWord: 'CLEANOUTS' },
    { text: 'YARD DEBRIS & STORM CLEANUP', highlight: false },
    { text: 'ATTIC & SHED', highlightWord: 'CLEAROUTS' },
    { text: 'COMMERCIAL & OFFICE CLEANOUTS', highlight: false },
    { text: 'HEAVY MUSCLE & LOADING CREW', highlight: false },
    { text: 'CLEAN SWEPT FINISH', highlight: false },
    { text: '100% LOCALLY OWNED & OPERATED', highlight: false },
    { text: 'CLEVELAND & CUYAHOGA COUNTY', highlight: false },
  ];

  return (
    <section className="relative bg-[#050811] text-white pt-12 pb-16 sm:pt-20 sm:pb-20 overflow-hidden border-b border-slate-800/80">
      {/* Photo Background Layer (Clean unbranded contractor truck) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroTruckBg}
          alt="1Beginning Junk removal truck background"
          className="w-full h-full object-cover object-center filter blur-[2.5px] scale-105 opacity-65 brightness-95 contrast-110"
        />
        {/* Dark linear gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/45 via-[#050811]/65 to-[#050811]/95" />
        {/* Radial vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_#050811_80%)] opacity-70" />
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-[1]"></div>
      <div className="absolute top-12 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-[1]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-orange-500/25 text-orange-400 text-xs font-heading font-black tracking-widest uppercase mb-6 shadow-md shadow-black/40">
          <span>— GREATER CLEVELAND · CUYAHOGA COUNTY —</span>
        </div>

        {/* Hero Logo Emblem */}
        <div className="mb-4">
          <LogoBadge size="hero" />
        </div>

        {/* Rating Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1629]/95 backdrop-blur-sm border border-orange-500/30 text-xs font-bold text-slate-200 mb-6 shadow-lg">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="font-heading font-black tracking-wide text-white">
            {BUSINESS_RATING}★ ({BUSINESS_REVIEW_COUNT} Google Reviews)
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-orange-400 font-heading uppercase tracking-wider font-bold">100% Local Crew</span>
        </div>

        {/* Headline Tagline */}
        <p className="max-w-2xl font-heading font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest text-slate-300 leading-relaxed mb-8">
          JUNK REMOVAL, DEMOLITION, HAULING AND PROPERTY CLEANOUTS DONE RIGHT.
        </p>

        {/* CTA Buttons - No text wrapping */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-xl">
          <a
            href={CALL_NOW_HREF}
            id="hero-call-btn"
            className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-orange-500/25 active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 fill-slate-950 shrink-0" />
            <span className="whitespace-nowrap">CALL {BUSINESS_PHONE}</span>
          </a>

          <a
            href={buildSmsHref()}
            id="hero-estimate-btn"
            className="px-6 sm:px-8 py-4 rounded-xl bg-[#0b1324]/90 hover:bg-[#121f3b] text-white font-heading font-black text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-2.5 border border-slate-700/80 transition-all active:scale-95 shadow-lg shadow-black/40 whitespace-nowrap"
          >
            <MessageSquare className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="whitespace-nowrap">TEXT FOR ESTIMATE</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400 font-medium">
          Owner answers the phone · Same-day service available · Open until 8 PM Daily
        </div>

      </div>

      {/* Bottom Running Ticker (Continuous Seamless Infinite Loop) */}
      <div className="mt-14">
        <MarqueeStrip items={tickerItems} variant="dark" />
      </div>
    </section>
  );
};
