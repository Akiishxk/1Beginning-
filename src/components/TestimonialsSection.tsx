import React from 'react';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BUSINESS_RATING, BUSINESS_REVIEW_COUNT, buildSmsHref } from '../utils/sms';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Marcus D.',
      location: 'Cleveland, OH',
      focus: 'FAST SERVICE',
      text: 'Called them in the morning for an urgent garage cleanout and they had a box truck and two hard-working guys at my driveway by early afternoon. Fast, polite, and swept up afterward.',
    },
    {
      author: 'Rachel T.',
      location: 'Lakewood, OH',
      focus: 'HEAVY LIFTING',
      text: 'Had an old heavy sleeper sofa in the basement and broken appliances. The 1Beginning crew navigated tight stairs without touching a single wall. Outstanding professionalism and care.',
    },
    {
      author: 'David P.',
      location: 'Parma, OH',
      focus: 'STRAIGHT PRICE',
      text: 'Got three different quotes around Cuyahoga County. 1Beginning gave me a clear, straightforward estimate over text with zero hidden dump fees. Great value and honest communication.',
    },
    {
      author: 'Elena S.',
      location: 'Cleveland Heights, OH',
      focus: 'ESTATE CLEANOUT',
      text: 'We were clearing out a family home with decades of furniture, boxes, and yard debris. They worked tirelessly and cleared the entire property in two trips. Highly recommended!',
    },
    {
      author: 'Kevin B.',
      location: 'Westlake, OH',
      focus: 'CONTRACTOR DEBRIS',
      text: 'As a remodeler, reliable debris hauling is crucial. 1Beginning showed up on time, hauled all drywall and framing scrap, and kept my client’s driveway spotless.',
    },
    {
      author: 'Samantha W.',
      location: 'Euclid, OH',
      focus: 'QUICK ESTIMATE',
      text: 'Texted photos of old patio furniture and yard waste, got an instant estimate, and they confirmed arrival 30 minutes before showing up. Honest, friendly, and reliable.',
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#060913] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase mb-3">
              REVIEWS
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              WHAT NEIGHBORS <br />
              <span className="text-orange-500">ARE SAYING</span>
            </h2>
          </div>

          {/* Google Reputation Badge */}
          <div className="flex items-center gap-3 bg-[#0d1629] border border-orange-500/30 px-5 py-3 rounded-xl shadow-lg shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="border-l border-slate-700 pl-3">
              <div className="font-heading font-black text-sm uppercase text-white tracking-wide">
                {BUSINESS_RATING} / 5.0 RATING
              </div>
              <div className="text-[11px] text-orange-400 font-mono font-bold">
                {BUSINESS_REVIEW_COUNT}+ GOOGLE REVIEWS
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#090e1c] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/40 hover:bg-[#0c1427] transition-all duration-200"
            >
              <div>
                {/* 5 Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-heading font-black uppercase tracking-wider text-orange-400 bg-orange-950/80 px-2 py-0.5 rounded border border-orange-500/30">
                    {rev.focus}
                  </span>
                </div>

                {/* Review body */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-heading font-black text-white text-sm uppercase tracking-wide">
                    {rev.author}
                  </div>
                  <div className="text-slate-400 text-[11px]">{rev.location}</div>
                </div>
                <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-[#111c35] px-2 py-0.5 rounded border border-orange-500/20">
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={buildSmsHref()}
            id="reviews-cta-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Our Satisfied Customers – Text for Free Estimate</span>
          </a>
        </div>

      </div>
    </section>
  );
};
