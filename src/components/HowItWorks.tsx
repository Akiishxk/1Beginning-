import React from 'react';
import { PhoneCall, Calculator, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildSmsHref } from '../utils/sms';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Call or Request a Quote',
      desc: 'Tell us what needs to be removed or cleared. You can call directly, text us photos of your junk, or fill out our quick online quote form.',
      icon: <PhoneCall className="w-5 h-5 text-orange-400" />,
      tag: 'Step 1: Contact',
    },
    {
      num: '02',
      title: 'Get Your Free Estimate',
      desc: "We'll assess the job and provide clear, upfront pricing with no hidden dump fees or surprise surcharges. You know exactly what to expect.",
      icon: <Calculator className="w-5 h-5 text-orange-400" />,
      tag: 'Step 2: Pricing',
    },
    {
      num: '03',
      title: 'We Remove & Sweep',
      desc: 'Our hardworking crew handles all the heavy lifting, loading into our box trucks or dumpsters, hauling away, and sweeping the area clean.',
      icon: <Truck className="w-5 h-5 text-orange-400" />,
      tag: 'Step 3: Cleanup',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#060913] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase mb-2">
            SIMPLE & HASSLE-FREE
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            HOW IT <span className="text-orange-500">WORKS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            Getting rid of heavy clutter, renovation debris, or yard waste takes just 3 easy steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-[#090e1c] border border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Step Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-heading font-black uppercase tracking-widest text-orange-400 bg-orange-950/80 border border-orange-500/30 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                  <span className="font-mono font-black text-3xl text-slate-700">
                    {step.num}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#111c35] border border-orange-500/30 flex items-center justify-center mb-5">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-2">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>Clean swept finish</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={buildSmsHref()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <span>Start Step 1: Text Us for Your Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

