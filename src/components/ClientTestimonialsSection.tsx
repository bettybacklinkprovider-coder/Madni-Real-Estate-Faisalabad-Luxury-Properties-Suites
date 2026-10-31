import React, { useState } from 'react';
import { CheckCircle2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/madniData';

export const ClientTestimonialsSection: React.FC = () => {
  const [surfaceStyle, setSurfaceStyle] = useState<'luxury-dark' | 'editorial-light'>('editorial-light');
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 3 : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 3 >= CLIENT_TESTIMONIALS.length ? 0 : prev + 1));
  };

  const isLight = surfaceStyle === 'editorial-light';

  return (
    <section
      id="client-testimonials"
      className={`py-20 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-gradient-to-b from-white via-purple-50/40 to-slate-50 border-slate-200 text-slate-900'
          : 'bg-[#0A1124] border-slate-800/80 text-slate-100'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Surface Switch + Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className={`text-xs font-semibold tracking-wider mb-2 ${
                isLight ? 'text-purple-700' : 'text-red-400'
              }`}
            >
              CLIENT TESTIMONIALS &amp; PORTFOLIO FEEDBACK · DEMO SHOWCASE
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                isLight ? 'text-[#0F172A]' : 'text-white'
              }`}
            >
              What Our Clients Say
            </h2>
            <p
              className={`mt-2.5 text-sm sm:text-base max-w-2xl ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Real feedback on our commitment to quality, creativity, and digital excellence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Theme toggle between White/Purple Reference and Dark Blue/Red Luxury */}
            <div
              className={`flex items-center gap-1 p-1 rounded-lg border ${
                isLight
                  ? 'bg-slate-100 border-slate-200'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              <button
                type="button"
                onClick={() => setSurfaceStyle('editorial-light')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  isLight
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Light &amp; Purple Card View
              </button>
              <button
                type="button"
                onClick={() => setSurfaceStyle('luxury-dark')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  !isLight
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dark Navy &amp; Red View
              </button>
            </div>

            {/* Carousel / Slider Highlight Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Highlight previous testimonials"
                className={`p-2 rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-200 bg-white text-slate-700 hover:border-purple-500'
                    : 'border-slate-800 bg-slate-900 text-slate-200 hover:border-red-500'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Highlight next testimonials"
                className={`p-2 rounded-lg border transition-colors ${
                  isLight
                    ? 'border-slate-200 bg-white text-slate-700 hover:border-purple-500'
                    : 'border-slate-800 bg-slate-900 text-slate-200 hover:border-red-500'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Cards Per Row Responsive Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CLIENT_TESTIMONIALS.map((item, idx) => {
            const isHighlighted =
              idx >= activeIndex && idx < activeIndex + 3;

            return (
              <article
                key={item.id}
                className={`group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                  isLight
                    ? `bg-white border ${
                        isHighlighted ? 'border-purple-300/90' : 'border-slate-200'
                      } hover:border-purple-500 shadow-sm hover:shadow-md`
                    : `bg-[#0F172A] border ${
                        isHighlighted ? 'border-red-500/50' : 'border-slate-800'
                      } hover:border-red-500 shadow-lg`
                }`}
              >
                {/* Decorative Quotation Mark Icon in Light Purple / Subtle Red */}
                <Quote
                  className={`w-9 h-9 absolute top-6 right-6 pointer-events-none transition-colors ${
                    isLight
                      ? 'text-purple-200 group-hover:text-purple-300'
                      : 'text-slate-800 group-hover:text-red-900/60'
                  }`}
                />

                <div>
                  {/* Top Row: Five Golden Stars + Verified Client Text Indicator */}
                  <div className="flex items-center justify-between gap-2 pr-10">
                    <div
                      className="flex items-center gap-0.5 text-amber-400 text-base"
                      aria-label="5 out of 5 golden stars"
                    >
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  {/* Service Category Line */}
                  <p
                    className={`mt-3 text-xs font-medium ${
                      isLight ? 'text-purple-700' : 'text-red-400'
                    }`}
                  >
                    {item.serviceCategory} · Sample Portfolio Review
                  </p>

                  {/* Customer Review Text */}
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    “{item.reviewText}”
                  </p>
                </div>

                {/* Customer Profile Footer */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-3.5 ${
                    isLight ? 'border-slate-100' : 'border-slate-800/80'
                  }`}
                >
                  {/* Circular Customer Profile Avatar */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${item.avatarBg}`}
                  >
                    {item.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`text-sm font-bold truncate ${
                        isLight ? 'text-[#0F172A]' : 'text-white'
                      }`}
                    >
                      {item.clientName}
                    </h3>
                    <p
                      className={`text-xs truncate ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {item.clientRole} · {item.companyName}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
