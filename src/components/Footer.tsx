import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
  CALL_NOW_HREF,
  buildSmsHref,
} from '../utils/sms';
import { LogoBadge } from './LogoBadge';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050c] text-white border-t border-slate-900 pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Reputation */}
          <div className="space-y-4">
            <LogoBadge size="lg" theme="dark" />
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
              Fast, reliable junk and debris removal, house cleanouts, and property hauling across Cleveland and Northeast Ohio.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-mono">{BUSINESS_RATING}★ ({BUSINESS_REVIEW_COUNT} Google Reviews)</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Locally Owned Cleveland Crew</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-orange-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Junk Removal & Hauling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Construction Debris Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  House & Garage Cleanouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Carpet Removal & Disposal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Furniture & Appliance Disposal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Yard Debris & Storm Cleanup
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-orange-400 mb-4">
              Cleveland Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-medium">
              <li>Cleveland (All Neighborhoods)</li>
              <li>Lakewood & Westlake</li>
              <li>Parma & Parma Heights</li>
              <li>Cleveland Heights & Euclid</li>
              <li>Mentor & Beachwood</li>
              <li>Strongsville & North Olmsted</li>
              <li>Cuyahoga & Neighboring Counties</li>
              <li className="pt-2 text-orange-400 font-bold">
                Unsure if covered? Call (216) 825-3184!
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-orange-400 mb-4">
              Contact & Dispatch
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <a href={CALL_NOW_HREF} className="hover:text-orange-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-heading font-black text-white text-base">{BUSINESS_PHONE}</span>
                </a>
              </li>
              <li>
                <a href={buildSmsHref()} className="hover:text-orange-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Text Photos for Fast Estimate</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{BUSINESS_HOURS}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Local SEO keywords bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed font-mono">
          <p>
            <strong>Cleveland Debris & Junk Removal:</strong> junk removal Cleveland OH · debris removal Cleveland · junk hauling Cleveland Ohio · carpet removal Cleveland · construction debris removal Cleveland · house cleanout Cleveland · garage cleanout Cleveland · dumpster rental Cleveland · furniture removal Cleveland · appliance disposal Cleveland.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="font-mono">
            {BUSINESS_ADDRESS} · Open until 8 PM Daily
          </p>
        </div>

      </div>
    </footer>
  );
};
