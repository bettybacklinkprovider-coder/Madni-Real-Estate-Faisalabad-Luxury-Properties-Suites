import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Wifi,
  Coffee,
  Car,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  AGENCY_INFO,
  EXCLUSIVE_PACKAGES,
  PACKAGE_FAQS,
  OfferPackage,
} from '../data/madniData';

interface ExclusivePackagesSectionProps {
  onSelectPackageForBooking: (pkg: OfferPackage, checkIn: string, checkOut: string, guests: number) => void;
}

export const ExclusivePackagesSection: React.FC<ExclusivePackagesSectionProps> = ({
  onSelectPackageForBooking,
}) => {
  const [checkInDate, setCheckInDate] = useState('2026-11-06');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-08');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [editableMode, setEditableMode] = useState(false);
  const [customPrices, setCustomPrices] = useState<Record<string, string>>({});

  const filteredPackages =
    selectedFilter === 'all'
      ? EXCLUSIVE_PACKAGES
      : EXCLUSIVE_PACKAGES.filter((p) => p.id === selectedFilter);

  const calculateNights = () => {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();

  const buildWhatsAppPackageLink = (pkg: OfferPackage) => {
    const price = customPrices[pkg.id] || pkg.discountedPricePkr;
    const text = encodeURIComponent(
      `Assalam-o-Alaikum ${AGENCY_INFO.name}! I would like to inquire about the "${pkg.title}" (${pkg.typeLabel}) listed at ${price}. Check-In: ${checkInDate}, Check-Out: ${checkOutDate} (${nights} night${nights > 1 ? 's' : ''}), Guests: ${guestCount}.`
    );
    return `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section
      id="exclusive-offers"
      className="py-20 bg-[#0A1124] border-t border-slate-800/80 text-slate-100"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-red-400 mb-2">
              HOSPITALITY & RESIDENCY PRIVILEGES · FAISALABAD
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Exclusive Offers &amp; Packages
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Discover exceptional stays and exclusive offers designed to make your experience unforgettable.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setEditableMode((prev) => !prev)}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-700 bg-slate-900/90 text-slate-200 hover:border-red-500/60 transition-colors whitespace-nowrap shrink-0"
            >
              {editableMode ? 'Finish Editing Rates' : 'Customize Placeholder Rates'}
            </button>
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Madni Real Estate & Suites, I want to inquire about your current Exclusive Offers & Packages.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Package Desk
            </a>
          </div>
        </div>

        {/* Featured Offer Banner at Top of Section */}
        <div className="relative rounded-2xl overflow-hidden border border-red-900/50 bg-gradient-to-r from-[#0F172A] via-[#131C33] to-[#2A0B18] p-6 sm:p-8 lg:p-10 mb-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-red-300 font-medium">
                <span>Featured Flagship Privilege</span>
                <span aria-hidden="true">·</span>
                <span>Satyana Road Executive Enclave</span>
                <span aria-hidden="true">·</span>
                <span>Verified Bundle Savings</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-balance">
                Overseas Pakistani &amp; Executive Investor Complimentary Stay Credit
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Book any 3-night Executive Suite package at Madni Real Estate &amp; Suites and receive a private chauffeur-driven property tour across Satyana Road &amp; Muhallah Fatehabad plus 100% stay credit toward any residential or commercial closing.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <Wifi className="w-4 h-4 text-red-400" /> Dedicated Fiber Wi-Fi
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-red-400" /> Artisan Breakfast Included
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-red-400" /> Secure Valet &amp; Chauffeur
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-slate-400">Featured Package Tariff</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-2xl font-bold text-white font-mono-num">
                    PKR 39,500
                  </span>
                  <span className="text-xs text-slate-400 line-through font-mono-num">
                    PKR 48,000
                  </span>
                </div>
                <p className="text-xs text-emerald-400 mt-1">
                  Save 18% · Includes 2 Nights + Breakfast + Chauffeur
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onSelectPackageForBooking(
                      EXCLUSIVE_PACKAGES[0],
                      checkInDate,
                      checkOutDate,
                      guestCount
                    )
                  }
                  className="w-full py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  Reserve Featured Offer
                </button>
                <a
                  href={buildWhatsAppPackageLink(EXCLUSIVE_PACKAGES[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-medium text-center transition-colors whitespace-nowrap"
                >
                  Direct WhatsApp Inquiry (0301-6044097)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stay Date & Guest Planner + Package Type Filter */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Check-In Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Check-Out Date ({nights} {nights === 1 ? 'Night' : 'Nights'})
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  value={checkOutDate}
                  min={checkInDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Guests &amp; Occupancy
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value={1}>1 Adult Guest (Corporate / Solo)</option>
                  <option value={2}>2 Adults (Couple / Executive)</option>
                  <option value={3}>3 Guests (Suite + Rollaway)</option>
                  <option value={4}>4 Guests (Penthouse / Family)</option>
                  <option value={6}>6 Guests (Interconnected Family Suites)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Filter Package Category
              </label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-red-500"
              >
                <option value="all">All 6 Exclusive Packages (A – F)</option>
                {EXCLUSIVE_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 6 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPackages.map((pkg) => {
            const currentPrice = customPrices[pkg.id] ?? pkg.discountedPricePkr;
            const isSeasonalWarning =
              pkg.id === 'pkg-business' && guestCount > 2;

            return (
              <article
                key={pkg.id}
                className="group bg-[#0F172A] border border-slate-800/90 hover:border-red-600/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Package Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-950">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                      <span className="font-semibold text-red-300">{pkg.code}</span>
                      <span>{pkg.discountBadge}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Price Display & Editable Placeholder Option */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block">
                          Verified Package Tariff
                        </span>
                        {editableMode ? (
                          <input
                            type="text"
                            value={currentPrice}
                            onChange={(e) =>
                              setCustomPrices((prev) => ({
                                ...prev,
                                [pkg.id]: e.target.value,
                              }))
                            }
                            aria-label={`Edit price for ${pkg.title}`}
                            className="mt-1 px-2 py-1 text-sm font-bold bg-slate-950 border border-red-500 rounded text-white font-mono-num w-36"
                          />
                        ) : (
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-xl font-bold text-white font-mono-num">
                              {currentPrice}
                            </span>
                            <span className="text-xs text-slate-400 line-through font-mono-num">
                              {pkg.originalPricePkr}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 font-mono-num">
                        {pkg.minStay}
                      </span>
                    </div>

                    {/* Occupancy, Validity & Conditions */}
                    <div className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>{pkg.occupancyLimit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>{pkg.validity}</span>
                      </div>
                    </div>

                    {/* Guest Count Match Feedback */}
                    {isSeasonalWarning && (
                      <p className="text-xs text-amber-300 bg-amber-950/40 border border-amber-800/50 rounded-lg px-3 py-2">
                        Note: Business Stay is tailored for 1–2 corporate travellers. For {guestCount} guests, we recommend our Family or Extended Stay package.
                      </p>
                    )}

                    {/* Included Amenities */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <p className="text-xs font-medium text-slate-400 mb-2">
                        Included Services &amp; Amenities:
                      </p>
                      <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-200">
                        {pkg.includedAmenities.map((item) => (
                          <li key={item} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {pkg.conditions}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPackageForBooking(
                        pkg,
                        checkInDate,
                        checkOutDate,
                        guestCount
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    {pkg.ctaLabel}
                  </button>
                  <a
                    href={buildWhatsAppPackageLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* "Find Your Perfect Stay" CTA Banner + FAQ Area */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Find Your Perfect Stay Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1E1024] border border-slate-800 rounded-2xl p-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs text-red-400 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Bespoke Concierge Desk</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Find Your Perfect Stay in Faisalabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Need a custom multi-suite wedding block, corporate relocation residency, or private property inspection itinerary on Satyana Road? Speak directly with our senior hospitality &amp; estate desk.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Direct Helpline: {AGENCY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Address: {AGENCY_INFO.shortAddress}</span>
              </div>
            </div>
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum Madni Real Estate! Please help me find the perfect stay package for ${guestCount} guests from ${checkInDate} to ${checkOutDate}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                Find Your Perfect Stay via WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-7">
            <h3 className="text-lg font-bold text-white mb-4">
              Offer Validity, Booking Conditions &amp; Inclusions FAQ
            </h3>
            <div className="divide-y divide-slate-800">
              {PACKAGE_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left text-xs sm:text-sm font-semibold text-slate-100 hover:text-red-300 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-red-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
