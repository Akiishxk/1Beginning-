import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle, Navigation, ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_ADDRESS, CALL_NOW_HREF, buildSmsHref } from '../utils/sms';

export const ServiceAreaSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'west' | 'east' | 'south'>('all');

  const regions = {
    all: {
      name: 'All Cuyahoga County & Greater Cleveland',
      zoom: 11,
      query: '11215+Hazeldell+Dr,+Cleveland,+OH+44108',
      cities: [
        'Cleveland (Downtown & All Neighborhoods)',
        'Lakewood',
        'Parma / Parma Heights',
        'Euclid',
        'Cleveland Heights',
        'Westlake',
        'Strongsville',
        'Beachwood',
        'Shaker Heights',
        'Garfield Heights',
        'Solon',
        'Brook Park',
        'North Olmsted',
        'Rocky River',
        'Mentor & Lake County',
        'Medina & Summit Counties',
      ],
    },
    west: {
      name: 'West Suburbs',
      zoom: 12,
      query: 'Lakewood+Westlake+Rocky+River+OH',
      cities: [
        'Lakewood',
        'Rocky River',
        'Westlake',
        'North Olmsted',
        'Fairview Park',
        'Bay Village',
        'Avon / Avon Lake',
        'North Ridgeville',
      ],
    },
    east: {
      name: 'East Suburbs',
      zoom: 12,
      query: 'Cleveland+Heights+Beachwood+Euclid+OH',
      cities: [
        'Cleveland Heights',
        'Euclid',
        'Beachwood',
        'Shaker Heights',
        'South Euclid',
        'University Heights',
        'Lyndhurst',
        'Mayfield Heights',
      ],
    },
    south: {
      name: 'South Suburbs & Valley',
      zoom: 12,
      query: 'Parma+Strongsville+Solon+OH',
      cities: [
        'Parma / Parma Heights',
        'Strongsville',
        'North Royalton',
        'Broadview Heights',
        'Brecksville',
        'Solon',
        'Independence',
        'Garfield Heights',
      ],
    },
  };

  const currentRegion = regions[selectedRegion];
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${currentRegion.query}&t=&z=${currentRegion.zoom}&ie=UTF8&iwloc=&output=embed`;
  const googleMapsExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;

  return (
    <section id="service-area" className="py-20 sm:py-28 bg-[#060913] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Servicing Greater Cleveland */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1629] border border-orange-500/30 text-orange-400 text-xs font-heading font-black tracking-widest uppercase mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>NORTHEAST OHIO COVERAGE</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                GREATER CLEVELAND <br />
                <span className="text-orange-500">SERVICE AREA</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Based at <strong>{BUSINESS_ADDRESS}</strong>, 1Beginning dispatches commercial box trucks and cleanout crews throughout Cleveland and all surrounding cities daily.
              </p>

              {/* Region Selector Filter Tabs */}
              <div className="mt-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Select Coverage Sector:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRegion('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                      selectedRegion === 'all'
                        ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/30'
                        : 'bg-[#0d1629] text-slate-300 hover:bg-[#152342] border border-slate-800'
                    }`}
                  >
                    All Cuyahoga
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRegion('west')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                      selectedRegion === 'west'
                        ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/30'
                        : 'bg-[#0d1629] text-slate-300 hover:bg-[#152342] border border-slate-800'
                    }`}
                  >
                    West Suburbs
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRegion('east')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                      selectedRegion === 'east'
                        ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/30'
                        : 'bg-[#0d1629] text-slate-300 hover:bg-[#152342] border border-slate-800'
                    }`}
                  >
                    East Suburbs
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRegion('south')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                      selectedRegion === 'south'
                        ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/30'
                        : 'bg-[#0d1629] text-slate-300 hover:bg-[#152342] border border-slate-800'
                    }`}
                  >
                    South Suburbs
                  </button>
                </div>
              </div>

              {/* Cities Grid for Selected Region */}
              <div className="mt-5 p-5 rounded-xl bg-[#090e1c] border border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <span className="text-xs font-heading font-black text-orange-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    {currentRegion.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Daily Truck Routes
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRegion.cities.map((city, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={CALL_NOW_HREF}
                className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20 active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call {BUSINESS_PHONE} to Confirm</span>
              </a>

              <a
                href={buildSmsHref('', 'Service area check')}
                className="px-6 py-3.5 rounded-xl bg-[#0d1629] hover:bg-[#152342] text-slate-200 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-slate-800 whitespace-nowrap"
              >
                <span>Text Your Address</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Maps Section */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-[#090e1c] border border-slate-800 shadow-2xl flex flex-col">
              
              {/* Map Header Bar */}
              <div className="p-4 bg-[#0d1629] border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-black uppercase text-white tracking-wide leading-none">
                      Cleveland Service Radius
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 block mt-1">
                      {BUSINESS_ADDRESS}
                    </span>
                  </div>
                </div>

                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 border border-slate-700 transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3 text-orange-400" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-80 sm:h-96 lg:h-[420px] bg-slate-900">
                <iframe
                  title="1Beginning Junk Removal Cleveland Service Area Google Map"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Radius Overlay Badge */}
                <div className="absolute bottom-3 right-3 bg-[#050811]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 shadow-xl pointer-events-none flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-200">
                    35-Mile Radius · No Travel Surcharges
                  </span>
                </div>
              </div>

              {/* Map Footer Information */}
              <div className="p-4 bg-[#090e1c] border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-[11px] text-slate-300">
                  Open 7 Days a Week: 7:00 AM – 8:00 PM
                </span>
                <span className="text-orange-400 font-heading font-bold uppercase tracking-wider text-[11px]">
                  Same-Day Truck Dispatch
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

