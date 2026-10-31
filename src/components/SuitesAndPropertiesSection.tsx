import React, { useState } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  Maximize2,
  X,
  MapPin,
  BedDouble,
} from 'lucide-react';
import {
  AGENCY_INFO,
  SUITES_AND_PROPERTIES,
  GALLERY_ITEMS,
  SuiteOrProperty,
} from '../data/madniData';

interface SuitesAndPropertiesSectionProps {
  onSelectPropertyForBooking: (item: SuiteOrProperty) => void;
  showGalleryInline?: boolean;
}

export const SuitesAndPropertiesSection: React.FC<SuitesAndPropertiesSectionProps> = ({
  onSelectPropertyForBooking,
  showGalleryInline = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{
    title: string;
    caption: string;
    image: string;
  } | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? SUITES_AND_PROPERTIES
      : SUITES_AND_PROPERTIES.filter((item) => item.category === activeCategory);

  const buildWhatsAppLink = (item: SuiteOrProperty) => {
    const message = encodeURIComponent(
      `Assalam-o-Alaikum ${AGENCY_INFO.name}! I am interested in "${item.title}" (${item.categoryLabel}) listed at ${item.priceLabel} (${item.billingUnit}). Please share availability and booking details.`
    );
    return `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${message}`;
  };

  return (
    <section
      id="suites-and-properties"
      className="py-20 bg-[#070C18] border-t border-slate-800/80 text-slate-100"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-red-400 mb-2">
              LUXURY HOTEL SUITES &amp; PRIME REAL ESTATE · SATYANA ROAD
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Executive Hotel Rooms, Serviced Suites &amp; Signature Estates
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Experience five-star hospitality in our Satyana Road serviced suites or invest in verified residential and commercial landmarks across Muhallah Fatehabad, Faisalabad.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            {[
              { id: 'all', label: 'All Suites & Estates' },
              { id: 'luxury-suite', label: 'Luxury Hotel Suites' },
              { id: 'residential-estate', label: 'Residential Villas' },
              { id: 'commercial-plaza', label: 'Commercial Plazas' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suites & Properties Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-[#0F172A] border border-slate-800/90 hover:border-red-600/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Image with Lightbox Trigger */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/25 to-transparent" />
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        title: item.title,
                        caption: item.description,
                        image: item.image,
                      })
                    }
                    aria-label={`View full photo of ${item.title}`}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/75 text-slate-200 hover:text-white hover:bg-red-600 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-medium text-red-300">
                      {item.categoryLabel}
                    </span>
                    <span className="font-mono-num">{item.sizeLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Capacity Row */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-baseline justify-between">
                    <div>
                      <span className="text-xl font-bold text-white font-mono-num">
                        {item.priceLabel}
                      </span>
                      <span className="text-xs text-slate-400 ml-1.5">
                        / {item.billingUnit}
                      </span>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">
                      {item.availability}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <BedDouble className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{item.capacityLabel}</span>
                  </div>

                  {/* Facilities Grid */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-xs font-medium text-slate-400 mb-2">
                      Key Facilities &amp; Features:
                    </p>
                    <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-200">
                      {item.facilities.map((fac) => (
                        <li key={fac} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          <span className="truncate">{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectPropertyForBooking(item)}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  {item.category === 'luxury-suite'
                    ? 'Book Suite Stay'
                    : 'Schedule Viewing'}
                </button>
                <a
                  href={buildWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg border border-slate-700 hover:border-emerald-500/70 bg-slate-900/90 text-slate-200 hover:text-white text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Booking
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Architectural & Suite Photo Gallery */}
        {showGalleryInline && (
          <div className="mt-20 pt-16 border-t border-slate-800/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-medium tracking-wider text-red-400 mb-1.5">
                  CURATED VISUAL TOUR · FAISALABAD
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Luxury Suites &amp; Satyana Road Estate Gallery
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Click any photograph to inspect full high-resolution architectural detail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {GALLERY_ITEMS.map((gal, idx) => (
                <button
                  key={gal.id}
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      title: gal.title,
                      caption: gal.caption,
                      image: gal.image,
                    })
                  }
                  className={`group relative rounded-xl overflow-hidden border border-slate-800 hover:border-red-500 text-left transition-all ${
                    idx === 0 ? 'sm:col-span-2 lg:col-span-2 h-64' : 'h-64'
                  }`}
                >
                  <img
                    src={gal.image}
                    alt={gal.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <p className="text-[11px] text-red-300 font-medium">
                      {gal.category}
                    </p>
                    <p className="text-xs font-bold text-white mt-0.5 truncate">
                      {gal.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0F172A] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {AGENCY_INFO.fullTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black max-h-[70vh] overflow-hidden flex items-center justify-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-300">{lightboxImage.caption}</p>
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum Madni Real Estate! I am viewing "${lightboxImage.title}" in your gallery and would like more details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold whitespace-nowrap shrink-0 text-center"
              >
                Inquire via WhatsApp (0301-6044097)
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
