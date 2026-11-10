import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';

  // Size variations for the official crest
  const sizeMap = {
    sm: {
      img: 'w-10 h-10',
      title: 'text-base sm:text-lg',
      sub: 'text-[8px] tracking-[0.18em]'
    },
    md: {
      img: 'w-13 h-13 sm:w-16 sm:h-16',
      title: 'text-lg sm:text-2xl',
      sub: 'text-[9px] sm:text-[10px] tracking-[0.22em]'
    },
    lg: {
      img: 'w-18 h-18 sm:w-20 sm:h-20',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-[10px] sm:text-[11px] tracking-[0.24em]'
    },
    xl: {
      img: 'w-20 h-20 sm:w-28 sm:h-28',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-xs sm:text-sm tracking-[0.26em]'
    }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 sm:gap-4 select-none ${className}`}>
      {/* Official Kohinoor AV Cogwheel & Pen Crest Logo - Enlarged & High Definition */}
      <div className={`relative ${currentSize.img} shrink-0 flex items-center justify-center`}>
        <img
          src="/images/client-uploads/logo.png"
          alt="Kohinoor Audio Visual Logo"
          className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Clean, authoritative corporate title */}
      <div className="flex flex-col">
        <span
          className={`${currentSize.title} font-black tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          KOHINOOR <span className="text-emerald-700">AV</span>
        </span>
        {showSubtitle && (
          <span
            className={`${currentSize.sub} font-extrabold uppercase mt-1 ${
              isLight ? 'text-emerald-400' : 'text-emerald-800'
            }`}
          >
            AUDIO VISUAL SYSTEMS
          </span>
        )}
      </div>
    </div>
  );
};
