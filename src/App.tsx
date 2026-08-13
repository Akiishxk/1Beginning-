import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { MarqueeStrip } from './components/MarqueeStrip';

export function App() {
  const howItWorksTickerItems = [
    { text: 'SIMPLE 3-STEP', highlightWord: 'PROCESS' },
    { text: 'STEP 1: CALL OR TEXT A PHOTO', highlightWord: '(216) 825-3184' },
    { text: 'STEP 2: FAST UPFRONT ESTIMATE', highlightWord: 'NO OBLIGATION' },
    { text: 'STEP 3: WE LOAD, HAUL & SWEEP', highlightWord: 'DONE RIGHT' },
    { text: 'ZERO HEAVY LIFTING FOR YOU' },
    { text: 'SAME-DAY DISPATCH AVAILABLE' },
    { text: '100% LOCALLY OPERATED CREW' },
    { text: 'BROOM-CLEAN FINISH GUARANTEED' },
  ];

  const serviceAreaTickerItems = [
    { text: 'PROUDLY SERVING CUYAHOGA COUNTY' },
    { text: 'DOWNTOWN CLEVELAND &', highlightWord: 'SUBURBS' },
    { text: 'LAKEWOOD' },
    { text: 'PARMA & PARMA HEIGHTS' },
    { text: 'STRONGSVILLE' },
    { text: 'WESTLAKE & BAY VILLAGE' },
    { text: 'EUCLID & CLEVELAND HEIGHTS' },
    { text: 'BEACHWOOD & SHAKER HEIGHTS' },
    { text: 'ROCKY RIVER & NORTH OLMSTED' },
    { text: 'SOLON & INDEPENDENCE' },
    { text: 'CALL OR TEXT DIRECT', highlightWord: '(216) 825-3184' },
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-slate-950">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Includes top marquee ticker) */}
        <Hero />

        {/* 2. Services Grid (10 Services with Request a Quote buttons) */}
        <ServicesSection />

        {/* 3. Why Choose 1Beginning (5 Selling Points) */}
        <WhyChooseUs />

        {/* Process Marquee Ribbon (Above How It Works) */}
        <MarqueeStrip items={howItWorksTickerItems} variant="dark" />

        {/* 4. How It Works (3 Simple Steps) */}
        <HowItWorks />

        {/* 5. Recent Projects & Cleanout Showcase */}
        <GallerySection />

        {/* 6. Testimonials (4.9/5 ⭐ — 132+ Google Reviews) */}
        <TestimonialsSection />

        {/* Additional Marquee Ribbon 2: Service Area & Coverage Transition */}
        <MarqueeStrip items={serviceAreaTickerItems} reverse={false} variant="dark" />

        {/* 7. Cleveland & Northeast Ohio Service Area */}
        <ServiceAreaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <FloatingActionBar />
    </div>
  );
}

export default App;
