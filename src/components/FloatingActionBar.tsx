import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CALL_NOW_HREF, buildSmsHref } from '../utils/sms';

export const FloatingActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#050811]/95 backdrop-blur-lg border-t border-slate-800/80 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={CALL_NOW_HREF}
          id="floating-call-now-btn"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#0d1629] border border-orange-500/30 text-white font-heading font-black text-xs uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Get Estimate Button */}
        <a
          href={buildSmsHref()}
          id="floating-get-estimate-btn"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 active:scale-95 transition-transform text-center"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Text Estimate</span>
        </a>
      </div>
    </div>
  );
};

