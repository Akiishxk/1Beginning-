import React from 'react';

interface MarqueeItem {
  text: string;
  highlightWord?: string;
  dotColor?: string;
}

interface MarqueeStripProps {
  items: MarqueeItem[];
  reverse?: boolean;
  variant?: 'dark' | 'orange' | 'bordered';
  className?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items,
  reverse = false,
  variant = 'dark',
  className = '',
}) => {
  const animClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  const getContainerBg = () => {
    switch (variant) {
      case 'orange':
        return 'bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-slate-950 border-y border-orange-400/50 shadow-lg';
      case 'bordered':
        return 'bg-[#080d1a] text-slate-200 border-y border-slate-800/90 shadow-inner';
      case 'dark':
      default:
        return 'bg-[#03050c] text-slate-300 border-y border-slate-800/80';
    }
  };

  const getStarColor = (idx: number) => {
    if (variant === 'orange') {
      return 'text-slate-950 font-black';
    }
    return idx % 2 === 0 ? 'text-orange-500' : 'text-amber-400';
  };

  const getHighlightColor = () => {
    if (variant === 'orange') {
      return 'text-slate-950 underline decoration-slate-900/60 underline-offset-4';
    }
    return 'text-orange-400 font-black';
  };

  return (
    <div className={`py-3.5 overflow-hidden relative z-10 w-full select-none ${getContainerBg()} ${className}`}>
      {/* Unified Seamless Animated Row */}
      <div className={`flex w-max shrink-0 items-center gap-8 ${animClass} whitespace-nowrap text-xs sm:text-sm font-heading font-black uppercase tracking-widest`}>
        {/* Set 1 */}
        {items.map((item, idx) => (
          <React.Fragment key={`strip-s1-${idx}`}>
            <span className={`font-bold ${getStarColor(idx)}`}>
              {idx % 2 === 0 ? '✦' : '●'}
            </span>
            <span>
              {item.text}
              {item.highlightWord && (
                <>
                  {' '}
                  <span className={getHighlightColor()}>{item.highlightWord}</span>
                </>
              )}
            </span>
          </React.Fragment>
        ))}

        {/* Set 2 (Identical Clone for seamless 50% loop) */}
        {items.map((item, idx) => (
          <React.Fragment key={`strip-s2-${idx}`}>
            <span className={`font-bold ${getStarColor(idx)}`}>
              {idx % 2 === 0 ? '✦' : '●'}
            </span>
            <span>
              {item.text}
              {item.highlightWord && (
                <>
                  {' '}
                  <span className={getHighlightColor()}>{item.highlightWord}</span>
                </>
              )}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
