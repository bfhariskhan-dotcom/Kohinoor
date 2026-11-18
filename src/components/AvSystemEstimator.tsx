import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/products';
import {
  Monitor,
  Mic2,
  Video,
  MessageSquare,
  Building,
  GraduationCap,
  Landmark,
  Tv
} from 'lucide-react';
import { motion } from 'motion/react';

interface PresetSpace {
  id: string;
  name: string;
  type: string;
  capacity: string;
  icon: React.ElementType;
  recommendedDisplay: string;
  recommendedPodium: string;
  recommendedAudio: string;
  recommendedCamera: string;
  summary: string;
}

const SPACES: PresetSpace[] = [
  {
    id: 'university-lecture',
    name: 'University Lecture Hall',
    type: 'Higher Education',
    capacity: '80 – 250 Students',
    icon: GraduationCap,
    recommendedDisplay: '86" 4K Interactive Flat Panel LED (or Casio XJ-S400UN 4,000 Lumens Projector + Wall Screen)',
    recommendedPodium: 'Black or White Digital Podium (580×420×1100 mm, 60W Output, Dual Gooseneck + 2 Wireless Mics)',
    recommendedAudio: 'CMX EA-120A Mixer Amplifier + Dual Gooseneck & 2 UHF Wireless Handheld Microphones',
    recommendedCamera: 'Tenveo TEVO-VA3000E 10X Optical Zoom PTZ + Speakerphone + 2 Expansion Mics',
    summary: 'Optimized for interactive lecturing, dual-OS annotation, built-in MP3/USB/SD/AUX podium playback, and live hybrid streaming.'
  },
  {
    id: 'corporate-boardroom',
    name: 'Corporate Boardroom & Council',
    type: 'Corporate & Government',
    capacity: '16 – 35 Attendees',
    icon: Building,
    recommendedDisplay: '75" or 86" Ultra-HD Interactive Touch LED on Mobile Trolley (or Wall-Mounted Screen)',
    recommendedPodium: 'White or Black Digital Presentation Podium (29 kg, Dual Gooseneck & MP3/USB/SD/AUX)',
    recommendedAudio: 'BETERVA BE-2300 Chairman Priority System + Tenveo VA3000E Full-Duplex Speakerphone',
    recommendedCamera: 'Tenveo TEVO-VA3000 / TEVO-VA3000E 10X Lossless Zoom PTZ Kit (Zoom/Teams/WebEx Ready)',
    summary: 'Executive boardroom setup with Chairman priority override, plug-and-play USB video conferencing up to 25 people, and interactive collaboration.'
  },
  {
    id: 'smart-classroom',
    name: 'Smart School / College Classroom',
    type: 'K-12 & Colleges',
    capacity: '35 – 55 Students',
    icon: Monitor,
    recommendedDisplay: '65" or 75" 4K Interactive LED Flat Panel + Casio XJ-V100W / Portable Tripod Screen',
    recommendedPodium: 'Digital Audio Podium Console (60W Integrated Amp, 2 Gooseneck + 2 Wireless Handheld Mics)',
    recommendedAudio: 'Classroom Speakers + Dual Wireless Handheld & Lapel Microphone Kit',
    recommendedCamera: 'Tenveo TEVO-VA3000 USB/Bluetooth PTZ Camera & Speakerphone',
    summary: 'Standard smart classroom bundle ensuring high student engagement, lamp-free reliability, and clear lecture amplification.'
  },
  {
    id: 'grand-auditorium',
    name: 'Institutional Grand Auditorium',
    type: 'Auditoriums & Convocation',
    capacity: '300 – 1,200 Seats',
    icon: Landmark,
    recommendedDisplay: 'Mitsubishi 8000 Series (UD8900U, 7,300–8,500 Lumens) + Large Wall / Motorized Screen',
    recommendedPodium: 'Stage Monitor / Floor Captioner Teleprompter (TP55–TP100 Full HD) + Black Digital Podium',
    recommendedAudio: 'CMX Commercial PA Amplification + Dual-Channel UHF Wireless Microphones',
    recommendedCamera: 'Tenveo TEVO-VA3000E PTZ Conferencing & Stage Recording Feed',
    summary: 'High-brightness auditorium deployment with dual-lamp Mitsubishi projection and foot-pedal/remote controlled Stage Teleprompters.'
  }
];

export const AvSystemEstimator: React.FC = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>('university-lecture');
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);

  const currentSpace = SPACES.find((s) => s.id === selectedSpaceId) || SPACES[0];

  const handleSendToWhatsApp = () => {
    const text =
      `*Kohinoor AV Solution Configuration Request*\n` +
      `-----------------------------------------\n` +
      `• Space Type: *${currentSpace.name}* (${currentSpace.capacity})\n` +
      `• Display: ${currentSpace.recommendedDisplay}\n` +
      `• Digital Podium: ${currentSpace.recommendedPodium}\n` +
      `• Audio Setup: ${currentSpace.recommendedAudio}\n` +
      `• Video/Camera: ${currentSpace.recommendedCamera}\n` +
      `• Turnkey Installation: ${includeInstallation ? 'Yes (Requested)' : 'Supply Only'}\n` +
      `-----------------------------------------\n` +
      `Please provide formal quotation, lead time, and technical proposal for Islamabad/Pakistan.`;

    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
      {/* Decorative Ambient Radial Spotlights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
              System Configurator
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Configure Your AV Setup
            </h2>
          </div>

          <span className="text-xs text-emerald-200 font-medium bg-emerald-900/50 px-3 py-1 rounded-lg border border-emerald-700/50 self-start md:self-auto">
            Blue Area, Islamabad
          </span>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SPACES.map((space) => {
            const Icon = space.icon;
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`cursor-pointer p-4 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-emerald-900/70 border-white shadow-[0_10px_25px_rgba(6,78,59,0.3)] scale-102'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/35'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-emerald-500/10 text-emerald-300'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/20 text-emerald-100">
                    {space.capacity}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {space.name}
                  </h3>
                  <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                    {space.type}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommended Setup Card */}
        <motion.div
          key={currentSpace.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-slate-950/70 border border-emerald-700/40 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                Recommended Hardware Setup
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                {currentSpace.name} Package
              </h4>
            </div>
            <span className="text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
              Capacity: {currentSpace.capacity}
            </span>
          </div>

          {/* 4 Key Hardware Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-600/30 text-emerald-300 shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wide">
                  Display System
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {currentSpace.recommendedDisplay}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-600/30 text-emerald-300 shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wide">
                  Digital Podium / Rostrum
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {currentSpace.recommendedPodium}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-600/30 text-emerald-300 shrink-0">
                <Mic2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wide">
                  Acoustic &amp; Microphones
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {currentSpace.recommendedAudio}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-600/30 text-emerald-300 shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wide">
                  Robotic Video Tracking
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {currentSpace.recommendedCamera}
                </div>
              </div>
            </div>
          </div>

          {/* Solution Description & Toggle */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-emerald-100/80 max-w-xl">
              {currentSpace.summary}
            </p>

            <label className="flex items-center gap-2 cursor-pointer text-xs text-white shrink-0 select-none">
              <input
                type="checkbox"
                checked={includeInstallation}
                onChange={(e) => setIncludeInstallation(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600 accent-emerald-600 focus:ring-0 cursor-pointer"
              />
              <span>Include Nationwide Installation &amp; Cabling</span>
            </label>
          </div>

          {/* Action Row - Clean WhatsApp (No Phone in Label) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full sm:w-auto cursor-pointer px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_8px_25px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp</span>
            </button>

            <span className="text-xs text-slate-400">
              Response within 15–30 minutes during business hours (Islamabad Time)
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
