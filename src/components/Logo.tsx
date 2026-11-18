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
      img: 'w-12 h-12',
      title: 'text-base sm:text-xl',
      sub: 'text-[9px] tracking-[0.14em]'
    },
    md: {
      img: 'w-14 h-14 sm:w-20 sm:h-20',
      title: 'text-[18px] sm:text-[26px] lg:text-[31px]',
      sub: 'text-[10px] sm:text-xs tracking-[0.16em]'
    },
    lg: {
      img: 'w-20 h-20 sm:w-24 sm:h-24',
      title: 'text-xl sm:text-3xl',
      sub: 'text-[10px] sm:text-xs tracking-[0.18em]'
    },
    xl: {
      img: 'w-24 h-24 sm:w-32 sm:h-32',
      title: 'text-2xl sm:text-3xl',
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
