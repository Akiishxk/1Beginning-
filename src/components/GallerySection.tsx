import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, MessageSquare, Check } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { buildSmsHref } from '../utils/sms';

// Local generated reliable assets (clean unbranded contractor photography)
import garageCleanoutImg from '../assets/images/garage_cleanout_real_1786662128624.jpg';
import furnitureRemovalImg from '../assets/images/furniture_removal_real_1786662139497.jpg';
import basementCleanoutImg from '../assets/images/basement_cleanout_real_1786662149434.jpg';
import yardDebrisImg from '../assets/images/yard_debris_real_1786662159483.jpg';
import constructionDebrisImg from '../assets/images/clean_renovation_debris_1786662554555.jpg';
import dumpsterImg from '../assets/images/clean_dumpster_rental_1786662543564.jpg';

interface Project {
  id: string;
  category: string;
  title: string;
  location: string;
  image: string;
  categoryType: 'cleanout' | 'construction' | 'dumpster' | 'truck' | 'yard' | 'furniture';
  description: string;
  scope: string;
}

export const GallerySection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'garage-cleanout',
      category: 'Garage Cleanouts',
      title: 'Full 2-Car Garage Cleanout & Floor Sweep',
      location: 'Cleveland Heights, OH',
      image: garageCleanoutImg,
      categoryType: 'cleanout',
      description: 'Cleared 15+ years of stored boxes, broken lawnmowers, scrap lumber, and old paint cans. Entire concrete floor swept clean.',
      scope: 'Loaded in Box Truck · Completed in 3 Hours',
    },
    {
      id: 'furniture-removal',
      category: 'Furniture Removal',
      title: 'Oversized Sectional & Bedroom Furniture Pickup',
      location: 'Beachwood, OH',
      image: furnitureRemovalImg,
      categoryType: 'furniture',
      description: 'Navigated narrow second-floor stairs to haul out a king mattress set, heavy wooden armoire, and 3-piece reclining sofa safely.',
      scope: 'Zero Wall Scuffs · Donated Reusables',
    },
    {
      id: 'basement-cleanout',
      category: 'Basement Cleanouts',
      title: 'Water-Damaged Basement Clutter Removal',
      location: 'Parma, OH',
      image: basementCleanoutImg,
      categoryType: 'cleanout',
      description: 'Removed soaked carpets, broken furniture, cardboard storage boxes, and metal shelving following seasonal rains.',
      scope: 'Full Crew Heavy Lifting',
    },
    {
      id: 'construction-debris',
      category: 'Construction Debris',
      title: 'Residential Kitchen & Bath Renovation Haul',
      location: 'Downtown Cleveland, OH',
      image: constructionDebrisImg,
      categoryType: 'construction',
      description: 'Hauled out 3 tons of drywall, framing 2x4s, ceramic floor tiles, and cabinetry for a local general contractor.',
      scope: 'Same-Day Contractor Haul',
    },
    {
      id: 'yard-debris',
      category: 'Yard Debris',
      title: 'Storm Fallen Tree Branches & Brush Clearout',
      location: 'Westlake, OH',
      image: yardDebrisImg,
      categoryType: 'yard',
      description: 'Chipped and hauled away downed oak tree limbs, rotting firewood, and overgrown fence line brush from a half-acre lot.',
      scope: 'Complete Lot Cleanup',
    },
    {
      id: 'dumpster-project',
      category: 'Whole-House Cleanouts',
      title: 'Estate Cleanout & Dumpster Placement',
      location: 'Lakewood, OH',
      image: dumpsterImg,
      categoryType: 'dumpster',
      description: 'Delivered a roll-off dumpster and assisted executors with clearing household contents, old appliances, and basement items.',
      scope: 'Driveway-Safe Placement · Multi-Day Project',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ['All', 'Garage Cleanouts', 'Basement Cleanouts', 'Construction Debris', 'Yard Debris', 'Furniture Removal', 'Whole-House Cleanouts'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const currentProject = filteredProjects[currentIndex % filteredProjects.length] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#050811] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase mb-3">
              OUR WORK
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              ON THE <span className="text-orange-500">JOB</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl font-normal">
              Cleanouts, debris removal, hauls, and property work from around Greater Cleveland and Cuyahoga County.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold text-orange-400 bg-[#0d1629] border border-slate-800 px-3 py-2 rounded-lg">
              {((currentIndex % filteredProjects.length) + 1)} / {filteredProjects.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              id="gallery-prev-btn"
              className="p-2.5 rounded-lg bg-[#0d1629] hover:bg-[#152342] border border-slate-800 text-slate-200 transition-colors active:scale-95 cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              id="gallery-next-btn"
              className="p-2.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 transition-colors active:scale-95 shadow-md shadow-orange-500/20 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveFilter(cat);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-orange-500 text-slate-950 font-black'
                  : 'bg-[#0d1629] border border-slate-800 text-slate-300 hover:bg-[#152342]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Showcase Item */}
        <div className="bg-[#090e1c] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Image side */}
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[480px] relative bg-[#0a1020]">
            <SafeImage
              src={currentProject.image}
              alt={currentProject.title}
              category={currentProject.categoryType}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute top-4 left-4 bg-[#050811]/90 backdrop-blur-md text-orange-400 text-xs font-heading font-black px-3 py-1.5 rounded-lg uppercase tracking-wider border border-slate-700">
              {currentProject.category}
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#090e1c]">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentProject.location}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight">
                {currentProject.title}
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentProject.description}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#111c35] border border-orange-500/30">
                <div className="text-xs font-heading font-black uppercase tracking-wider text-orange-400">
                  Project Scope:
                </div>
                <div className="text-sm font-bold text-white mt-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{currentProject.scope}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={buildSmsHref('', currentProject.category, `Like ${currentProject.title} in ${currentProject.location}`)}
                className="py-3 px-5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Text for Estimate on a Job Like This</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
