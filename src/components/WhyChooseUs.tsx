import React from 'react';
import {
  Zap,
  Truck,
  SlidersHorizontal,
  Users,
  BadgeDollarSign,
  CheckCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_PHONE, CALL_NOW_HREF } from '../utils/sms';
import { SafeImage } from './SafeImage';
import heavyTruckImg from '../assets/images/contractor_truck_crew_1786662532493.jpg';

export const WhyChooseUs: React.FC = () => {
  const serviceAreas = [
    'CLEVELAND',
    'CUYAHOGA COUNTY',
    'LAKEWOOD',
    'PARMA',
    'EUCLID',
    'CLEVELAND HEIGHTS',
    'SURROUNDING AREAS',
  ];

  const points = [
    {
      title: 'Direct Owner Communication',
      desc: 'No call centers or runarounds. You talk directly with the crew leads who dispatch the trucks.',
      icon: <Phone className="w-5 h-5 text-orange-400" />,
    },
    {
      title: 'Maneuverable Box Trucks & Heavy Muscle',
      desc: 'Our fleet fits tight driveways and alleys without cracking concrete, backed by industrial equipment.',
      icon: <Truck className="w-5 h-5 text-orange-400" />,
    },
    {
      title: 'Full-Service Heavy Lifting & Cleanup',
      desc: 'We do all the heavy loading, hauling, and sweeping so you never have to lift a finger.',
      icon: <SlidersHorizontal className="w-5 h-5 text-orange-400" />,
    },
    {
      title: 'Straightforward Transparent Rates',
      desc: 'Fair, flat upfront quotes with no surprise fuel surcharges or hidden disposal fees at the scale.',
      icon: <BadgeDollarSign className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#050811] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Who We Are Story */}
          <div className="lg:col-span-7">
            <div className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase mb-3">
              WHO WE ARE
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              LOCAL CREW. <br />
              <span className="text-orange-500">HEAVY EQUIPMENT.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              1Beginning is a locally owned outfit based in Cleveland, OH. We handle everything from single-item pickups to full estate cleanouts and commercial debris with the box trucks, trailers, and muscle to back it up.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              You call the owner directly. You get a straight price, a real arrival time, and a site left clean when we pull out.
            </p>

            {/* Service Location Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-[#0d1629] border border-slate-800 text-slate-300 font-heading font-bold text-xs uppercase tracking-wider"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* 4 Selling Points List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090e1c] border border-slate-800/90 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#111c35]">
                      {pt.icon}
                    </div>
                    <h3 className="font-heading text-base font-black uppercase text-white tracking-tight">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={CALL_NOW_HREF}
                className="px-6 py-3.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_PHONE}</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-heading font-black text-sm uppercase tracking-wider border border-slate-700 transition-all"
              >
                Get Free Estimate
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual with Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a1020] border border-slate-800 shadow-2xl">
              <SafeImage
                src={heavyTruckImg}
                alt="1Beginning heavy equipment and junk removal crew in Cleveland"
                category="truck"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover brightness-90"
              />

              {/* Top Corner Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-slate-950 px-4 py-2 rounded-lg font-heading font-black text-sm uppercase tracking-wider shadow-xl flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>ANY SIZE JOB — WE TAKE IT</span>
              </div>

              {/* Bottom Inset Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#050811]/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-orange-400 block uppercase">
                      Based at 11215 Hazeldell Dr
                    </span>
                    <span className="font-heading font-bold text-sm text-white uppercase">
                      Serving All Cuyahoga County Daily
                    </span>
                  </div>
                  <span className="text-xs font-heading font-bold text-amber-400">
                    4.9★ RATED
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
