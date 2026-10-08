import React, { useState } from 'react';
import { Compass, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { KaabaGraphic, IslamicStarIcon } from './IslamicMotifs';

interface HeroProps {
  onExplorePackages: () => void;
  onTalkToTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onTalkToTeam }) => {
  const [videoError, setVideoError] = useState(false);
  return (
    <section id="home" className="relative overflow-hidden bg-[#073E32] text-white pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle architectural Islamic geometry pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C9A24D 1.5px, transparent 1.5px), radial-gradient(#F8F5EE 1.5px, #073E32 1.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* Decorative ambient radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A24D]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 right-0 w-[400px] h-[300px] bg-[#0B5D4B]/40 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A24D]/40 text-xs sm:text-sm font-medium text-[#F8F5EE]">
              <IslamicStarIcon className="w-3.5 h-3.5 text-[#C9A24D]" />
              <span>{BRAND_INFO.trustBadge}</span>
              <span className="text-[#C9A24D] hidden sm:inline">·</span>
              <span className="text-[#EAF3EF]/80 hidden sm:inline">Cantonment Office</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.15] text-balance">
              Your Journey to the <span className="text-[#C9A24D]">House of Allah</span> Begins Here
            </h1>

            {/* Supporting Text */}
            <p className="text-[#EAF3EF]/90 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
              Experience a comfortable, guided and spiritually enriching Umrah journey with As-Safar.
            </p>

            {/* Key Trust Signals Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-[#F8F5EE]/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A24D]" />
                <span>100% Verified Hotels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C9A24D]" />
                <span>Trichy & Chennai Departures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                <span>Tamil-Speaking Aalims</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExplorePackages}
                className="bg-[#C9A24D] hover:bg-[#B38D3B] text-[#073E32] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-[#062c24]/50 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px] cursor-pointer"
              >
                <Compass className="w-5 h-5 text-[#073E32]" />
                <span>Explore Umrah Packages</span>
              </button>

              <button
                onClick={onTalkToTeam}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px] cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#C9A24D]" />
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl sm:rounded-3xl p-2 bg-gradient-to-b from-[#C9A24D]/30 via-white/10 to-transparent border border-white/15 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#063228]">
                {/* Fallback Artwork Always Present Underneath */}
                <KaabaGraphic className="w-full h-full object-cover absolute inset-0" />

                {/* Kaaba & Tawaf Video */}
                {!videoError && (
                  <video
                    src="https://res.cloudinary.com/ddeivqykl/video/upload/v1791466114/vidssave.com_Tawaf_around_the_Kaaba_1080P_bnqve4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover relative z-10"
                    onError={() => setVideoError(true)}
                  />
                )}

                {/* Subtle Inner Scrim */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#063228]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Overlay Caption Banner */}
                <div className="absolute bottom-3 left-3 right-3 z-30 p-3 rounded-xl bg-[#063228]/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-[#C9A24D] uppercase tracking-wider">
                      The Holy Sanctuary
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Masjid al-Haram, Makkah Al-Mukarramah
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-200/80 block">Ground Support</span>
                    <span className="text-xs font-bold text-white">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
