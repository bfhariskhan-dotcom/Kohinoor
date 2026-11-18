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

  // Size variations for the official crest and large all-green company title
  const sizeMap = {
    sm: {
      img: 'w-11 h-11',
      title: 'text-base sm:text-lg',
      sub: 'text-[9px] tracking-[0.14em]'
    },
    md: {
      img: 'w-12 h-12 sm:w-16 sm:h-16',
      title: 'text-[17px] sm:text-2xl lg:text-[26px]',
      sub: 'text-[9px] sm:text-[11px] tracking-[0.15em]'
    },
    lg: {
      img: 'w-18 h-18 sm:w-20 sm:h-20',
      title: 'text-xl sm:text-3xl',
      sub: 'text-[10px] sm:text-xs tracking-[0.18em]'
    },
    xl: {
      img: 'w-22 h-22 sm:w-28 sm:h-28',
      title: 'text-2xl sm:text-4xl',
      sub: 'text-xs sm:text-sm tracking-[0.2em]'
    }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center justify-center lg:justify-start gap-2.5 sm:gap-4 select-none ${className}`}>
      {/* Official Kohinoor AV Cogwheel & Pen Crest Logo */}
      <div className={`relative ${currentSize.img} shrink-0 flex items-center justify-center`}>
        <img
          src="/images/client-uploads/logo.png"
          alt="Kohinoor Audio Visual Logo"
          className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Full Company Name - All Green & Large Size */}
      <div className="flex flex-col text-left">
        <span
          className={`${currentSize.title} font-black tracking-tight leading-tight whitespace-nowrap ${
            isLight ? 'text-emerald-200' : 'text-emerald-700'
          }`}
        >
          KOHINOOR AUDIO VISUAL
        </span>
        {showSubtitle && (
          <span
            className={`${currentSize.sub} font-extrabold uppercase mt-0.5 ${
              isLight ? 'text-emerald-300' : 'text-emerald-600'
            }`}
          >
            EDUCATION BUSINESS SYSTEM
          </span>
        )}
      </div>
    </div>
  );
};
