import React, { useState } from 'react';
import { Truck, Trash2, Home, Hammer, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: 'truck' | 'cleanout' | 'dumpster' | 'construction' | 'yard' | 'furniture' | 'general';
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  category = 'general',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white flex flex-col items-center justify-center p-6 ${className}`}>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-xs">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-3 shadow-lg shadow-orange-500/10">
            {category === 'truck' && <Truck className="w-7 h-7" />}
            {category === 'dumpster' && <Trash2 className="w-7 h-7" />}
            {category === 'cleanout' && <Home className="w-7 h-7" />}
            {category === 'construction' && <Hammer className="w-7 h-7" />}
            {category === 'yard' && <Sparkles className="w-7 h-7" />}
            {category === 'furniture' && <Building2 className="w-7 h-7" />}
            {category === 'general' && <ShieldCheck className="w-7 h-7" />}
          </div>
          <span className="text-xs font-heading font-black tracking-widest text-orange-400 uppercase">
            1Beginning Cleveland
          </span>
          <p className="text-sm font-bold text-white mt-1 leading-snug">
            {alt}
          </p>
          <span className="text-[11px] text-neutral-400 mt-2 bg-black/50 px-2.5 py-1 rounded-full border border-neutral-700">
            Professional Equipment & Crew
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-100">
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
          <Truck className="w-8 h-8 text-neutral-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
