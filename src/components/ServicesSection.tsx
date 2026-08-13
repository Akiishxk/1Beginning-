import React from 'react';
import {
  Trash2,
  Hammer,
  Sofa,
  Refrigerator,
  Home,
  Trees,
  Building,
  KeyRound,
  Container,
  Package,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { buildSmsHref } from '../utils/sms';
import junkRemovalImg from '../assets/images/hero_truck_clean_1786662169574.jpg';
import demolitionImg from '../assets/images/clean_renovation_debris_1786662554555.jpg';
import dumpsterImg from '../assets/images/clean_dumpster_rental_1786662543564.jpg';
import cleanoutImg from '../assets/images/garage_cleanout_real_1786662128624.jpg';

interface ServiceDef {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  popular?: boolean;
}

export const ServicesSection: React.FC = () => {
  const highlightCards = [
    {
      num: '01',
      title: 'JUNK REMOVAL',
      desc: 'Single-item pickups to full property cleanouts. We load it, haul it, and dispose of it properly.',
      image: junkRemovalImg,
      category: 'truck',
    },
    {
      num: '02',
      title: 'DEMOLITION & DEBRIS',
      desc: 'Structures, sheds, decks, drywall — we tear it down safe and clean the site when we’re done.',
      image: demolitionImg,
      category: 'debris',
    },
    {
      num: '03',
      title: 'HEAVY HAULING & REMOVAL',
      desc: 'Need heavy materials moved or large items hauled away? We’ve got the trucks and know how to load them.',
      image: dumpsterImg,
      category: 'truck',
    },
    {
      num: '04',
      title: 'HOUSE & GARAGE CLEANOUTS',
      desc: 'Basements, attics, estates, and packed garages cleared completely and swept clean.',
      image: cleanoutImg,
      category: 'garage',
    },
  ];

  const services: ServiceDef[] = [
    {
      id: 'junk-removal',
      title: 'Junk Removal',
      desc: 'Fast, full-service removal of unwanted household clutter, basement accumulation, attic piles, and general junk.',
      icon: <Trash2 className="w-5 h-5 text-orange-400" />,
      popular: true,
    },
    {
      id: 'construction-debris',
      title: 'Construction Debris Removal',
      desc: 'Prompt site cleanups for remodelers and contractors: drywall, framing lumber, tile, roofing scrap, and jobsite waste.',
      icon: <Hammer className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'furniture-removal',
      title: 'Furniture Removal',
      desc: 'Heavy couches, sectionals, mattresses, dressers, dining tables, and recliners carried out safely without wall damage.',
      icon: <Sofa className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'appliance-removal',
      title: 'Appliance Removal & Disposal',
      desc: 'Eco-responsible pickup and disposal of old refrigerators, freezers, washers, dryers, dishwashers, and water heaters.',
      icon: <Refrigerator className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'house-garage-cleanouts',
      title: 'House & Garage Cleanouts',
      desc: 'Complete clearouts for cluttered garages, packed basements, attics, and whole homes. Left swept and ready.',
      icon: <Home className="w-5 h-5 text-orange-400" />,
      popular: true,
    },
    {
      id: 'yard-debris',
      title: 'Yard Debris Removal',
      desc: 'Fallen tree limbs, storm branches, shrub clippings, mulch bags, rot piles, and old patio or fencing debris hauled away.',
      icon: <Trees className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'property-cleanouts',
      title: 'Property Cleanouts',
      desc: 'Estate clearouts, landlord turnover prep, foreclosure cleanouts, and commercial building clearances on fast turnaround.',
      icon: <Building className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'eviction-cleanouts',
      title: 'Eviction Cleanouts',
      desc: 'Rapid-response tenant turnover cleanouts for landlords and property managers to get rental units cleared and back on market.',
      icon: <KeyRound className="w-5 h-5 text-orange-400" />,
    },
    {
      id: 'carpet-removal',
      title: 'Carpet & Flooring Removal',
      desc: 'Tear-out and hauling of old carpeting, tack strips, padding, and damaged laminate or vinyl flooring.',
      icon: <Sparkles className="w-5 h-5 text-orange-400" />,
      popular: true,
    },
    {
      id: 'large-bulk-item',
      title: 'Large / Bulk Item Removal',
      desc: 'Hot tubs, pool tables, heavy exercise gyms, swing sets, pianos, metal sheds, and oversized items dismantled and hauled.',
      icon: <Package className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#060913] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase mb-3">
              WHAT WE DO
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              HAUL IT. TEAR IT. <br />
              <span className="text-orange-500">DOWN. CLEAR IT.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md font-normal leading-relaxed">
            One crew for the whole job — cleanouts, debris, demolition, and bulk hauling services across Greater Cleveland and Northeast Ohio.
          </p>
        </div>

        {/* 4 Feature Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {highlightCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#0a1020] border border-slate-800 hover:border-orange-500/50 transition-all duration-300 h-80 sm:h-96 flex flex-col justify-end p-6"
            >
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 z-0">
                <SafeImage
                  src={card.image}
                  alt={card.title}
                  category={card.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold text-orange-400 mb-1 block">
                  {card.num}
                </span>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended 10 Services Detailed Grid */}
        <div className="border-t border-slate-800/80 pt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-wider text-slate-200">
              ALL REMOVAL & HAULING CAPABILITIES
            </h3>
            <span className="text-xs text-orange-400 font-mono">10 SPECIALIZED SERVICES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#090e1c] rounded-xl p-6 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 hover:bg-[#0c1427] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#111c35] border border-orange-500/30 flex items-center justify-center">
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="text-[10px] font-heading font-black uppercase tracking-widest text-orange-400 bg-orange-950/80 px-2 py-0.5 rounded border border-orange-500/30">
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading text-xl font-black uppercase text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/70">
                  <a
                    href={buildSmsHref('', service.title)}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-bold uppercase tracking-wider text-slate-300 group-hover:text-orange-400 transition-colors"
                  >
                    <span>Text for Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
