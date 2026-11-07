import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Diamond 'K' AV Emblem */}
      <div className="relative w-10 h-10 shrink-0">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer faceted geometric diamond silhouette */}
          <path
            d="M22 2L42 12V32L22 42L2 32V12L22 2Z"
            className={isLight ? 'fill-slate-900 stroke-blue-500' : 'fill-slate-950 stroke-blue-600'}
            strokeWidth="1.75"
          />
          {/* Inner facet gradients */}
          <path
            d="M22 2L42 12L22 22L2 12L22 2Z"
            fill="url(#blueGradTop)"
            opacity="0.85"
          />
          <path
            d="M2 12L22 22V42L2 32V12Z"
            fill="url(#blueGradLeft)"
            opacity="0.95"
          />
          <path
            d="M42 12L22 22V42L42 32V12Z"
            fill="url(#blueGradRight)"
          />
          {/* Stylized sharp 'K' / Acoustic Wave Core in pure white */}
          <path
            d="M14 13V31M14 22L27 13M18.5 18L28 31"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Optical aperture center dot */}
          <circle cx="22" cy="22" r="2" fill="#60A5FA" />

          <defs>
            <linearGradient id="blueGradTop" x1="2" y1="2" x2="42" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="blueGradLeft" x1="2" y1="12" x2="22" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E40AF" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="blueGradRight" x1="42" y1="12" x2="22" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Clean, Single-Line Brand Name - NO CLUTTERED SUBTITLES */}
      <div className="flex flex-col">
        <span
          className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          KOHINOOR <span className="text-blue-600">AV</span>
        </span>
        <span
          className={`text-[9px] font-bold tracking-[0.25em] uppercase mt-0.5 ${
            isLight ? 'text-blue-400' : 'text-blue-700'
          }`}
        >
          AUDIO VISUAL SYSTEMS
        </span>
      </div>
    </div>
  );
};
