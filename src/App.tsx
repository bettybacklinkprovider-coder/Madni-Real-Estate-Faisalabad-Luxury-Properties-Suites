import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Building2,
  ShieldCheck,
  Award,
  KeyRound,
  X,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import {
  AGENCY_INFO,
  IMAGES,
  OfferPackage,
  SuiteOrProperty,
  MASTER_PROMPT_BLUEPRINT,
} from './data/madniData';
import { SuitesAndPropertiesSection } from './components/SuitesAndPropertiesSection';
import { ExclusivePackagesSection } from './components/ExclusivePackagesSection';
import { CustomerReviewsRatingsSection } from './components/CustomerReviewsRatingsSection';
import { ClientTestimonialsSection } from './components/ClientTestimonialsSection';
import { LocationAndContactSection } from './components/LocationAndContactSection';

type PageId = 'home' | 'suites-estates' | 'offers-packages' | 'reviews-contact';

interface BookingModalState {
  isOpen: boolean;
  title: string;
  subtitle: string;
  priceLabel: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false,
    title: '',
    subtitle: '',
    priceLabel: '',
    checkIn: '2026-11-06',
    checkOut: '2026-11-08',
    guests: 2,
  });
  const [modalGuestName, setModalGuestName] = useState('');
  const [modalGuestPhone, setModalGuestPhone] = useState('');
  const [modalConfirmed, setModalConfirmed] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [copiedMasterPrompt, setCopiedMasterPrompt] = useState(false);

  // Scroll to top when switching between the 4 separate pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleOpenPackageBooking = (
    pkg: OfferPackage,
    checkIn: string,
    checkOut: string,
    guests: number
  ) => {
    setModalConfirmed(false);
    setBookingModal({
      isOpen: true,
      title: pkg.title,
      subtitle: `${pkg.code} · ${pkg.minStay}`,
      priceLabel: pkg.discountedPricePkr,
      checkIn,
      checkOut,
      guests,
    });
  };

  const handleOpenPropertyBooking = (item: SuiteOrProperty) => {
    setModalConfirmed(false);
    setBookingModal({
      isOpen: true,
      title: item.title,
      subtitle: `${item.categoryLabel} · ${item.location}`,
      priceLabel: `${item.priceLabel} (${item.billingUnit})`,
      checkIn: '2026-11-06',
      checkOut: '2026-11-08',
      guests: 2,
    });
  };

  const handleCopyBlueprint = () => {
    navigator.clipboard.writeText(MASTER_PROMPT_BLUEPRINT);
    setCopiedMasterPrompt(true);
    setTimeout(() => setCopiedMasterPrompt(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070C18] text-slate-100 selection:bg-red-600 selection:text-white">
      {/* Top Navigation Bar — Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#070C18]/95 backdrop-blur-md border-b border-slate-800/90">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-4">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => setActivePage('home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-red-400 transition-colors whitespace-nowrap shrink-0 font-display text-left"
          >
            Madni Real Estate
          </button>

          {/* Zone 2: 4 concise single-line navigation links for the 4 Separate Pages */}
          <nav
            aria-label="Primary Page Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'suites-estates', label: 'Suites & Estates' },
              { id: 'offers-packages', label: 'Special Offers' },
              { id: 'reviews-contact', label: 'Reviews & Contact' },
            ].map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setActivePage(page.id as PageId)}
                className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                  activePage === page.id
                    ? 'border-red-500 text-white font-semibold'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Assalam-o-Alaikum Madni Real Estate! I would like to book a luxury suite or schedule a property consultation on Satyana Road, Faisalabad.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap shrink-0"
            >
              WhatsApp 0301-6044097
            </a>
          </div>
        </div>

        {/* Mobile 4-Page Switcher Bar */}
        <div className="md:hidden flex items-center justify-between gap-2 px-4 py-2 bg-[#0A1124] border-t border-slate-800/80 overflow-x-auto">
          {[
            { id: 'home', label: '1. Home (6 Sections)' },
            { id: 'suites-estates', label: '2. Suites & Estates' },
            { id: 'offers-packages', label: '3. Special Offers' },
            { id: 'reviews-contact', label: '4. Reviews & Contact' },
          ].map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => setActivePage(page.id as PageId)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                activePage === page.id
                  ? 'bg-red-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area — Renders the Active Page out of the 4 Separate Pages */}
      <main className="flex-1">
        {/* =========================================================
            PAGE 1: HOME (Landing Page with 6 Full Sections)
           ========================================================= */}
        {activePage === 'home' && (
          <>
            {/* SECTION 1 OF 6: Luxury Dark Blue & Crimson Hero + 4-Page Navigator & Authority KPI Strip */}
            <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#070C18] via-[#0B1328] to-[#070C18] overflow-hidden">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2-Column Hero Split with items-stretch */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  {/* Left Column: Value Proposition & Primary Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-red-400 font-medium">
                        <span>Best Real Estate Agency In Faisalabad</span>
                        <span aria-hidden="true">·</span>
                        <span>Luxury Executive Hotel Suites</span>
                        <span aria-hidden="true">·</span>
                        <span>Satyana Road Enclave</span>
                      </div>

                      <h1
                        className="font-bold text-white tracking-tight text-balance leading-[1.12]"
                        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
                      >
                        Madni Real Estate &amp; Royal Executive Suites in Faisalabad
                      </h1>

                      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                        Headquartered at <strong className="text-white font-semibold">Street No. 6, Satyana Road, Muhallah Fatehabad, Faisalabad (38000)</strong>. We pair high-yield residential &amp; commercial real estate advisory with five-star serviced hospitality suites for overseas families and corporate leaders.
                      </p>

                      {/* Clean unboxed contact metadata */}
                      <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
                        <span className="inline-flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-red-400" />
                          <strong className="font-mono-num text-white">0301-6044097</strong>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span>Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad</span>
                        </span>
                      </div>
                    </div>

                    {/* Primary CTA & Secondary Navigation */}
                    <div className="pt-4 space-y-4">
                      <div className="flex flex-wrap items-center gap-3.5">
                        <a
                          href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                            'Assalam-o-Alaikum Madni Real Estate! I want to inquire about your Faisalabad properties and luxury hotel suites.'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-lg transition-colors whitespace-nowrap shrink-0"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Book via WhatsApp (0301-6044097)
                        </a>

                        <button
                          type="button"
                          onClick={() => setActivePage('offers-packages')}
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-red-500/70 bg-slate-900/90 text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>Explore 6 Exclusive Packages</span>
                          <ArrowRight className="w-4 h-4 text-red-400" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setPromptModalOpen(true)}
                          className="px-4 py-3.5 rounded-xl border border-slate-800 hover:border-slate-600 bg-slate-950 text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                        >
                          Copy 4-Page AI Prompt
                        </button>
                      </div>

                      {/* 4-Page Architecture Quick Switcher Bar */}
                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">
                          4-Page Multi-Page Directory:
                        </span>
                        <button
                          type="button"
                          onClick={() => setActivePage('home')}
                          className="text-red-400 font-semibold underline underline-offset-4"
                        >
                          Page 1: Home (6 Sections)
                        </button>
                        <span aria-hidden="true">·</span>
                        <button
                          type="button"
                          onClick={() => setActivePage('suites-estates')}
                          className="hover:text-white transition-colors"
                        >
                          Page 2: Suites &amp; Properties
                        </button>
                        <span aria-hidden="true">·</span>
                        <button
                          type="button"
                          onClick={() => setActivePage('offers-packages')}
                          className="hover:text-white transition-colors"
                        >
                          Page 3: Exclusive Offers
                        </button>
                        <span aria-hidden="true">·</span>
                        <button
                          type="button"
                          onClick={() => setActivePage('reviews-contact')}
                          className="hover:text-white transition-colors"
                        >
                          Page 4: Reviews &amp; Contact
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Flagship Architectural Visual Carrier */}
                  <div className="lg:col-span-5 flex">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 flex flex-col justify-end min-h-[360px]">
                      <img
                        src={IMAGES.heroEstate}
                        alt="Madni Real Estate & The Royal Serenity Executive Suites in Faisalabad"
                        referrerPolicy="no-referrer"
                        className="w-full h-full lg:h-full object-cover absolute inset-0"
                      />
                      <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 pt-20">
                        <p className="text-xs font-medium text-red-400">
                          FLAGSHIP ENCLAVE · FAISALABAD 38000
                        </p>
                        <h2 className="text-lg font-bold text-white mt-1">
                          Satyana Road Luxury Suites &amp; Property Advisory
                        </h2>
                        <p className="text-xs text-slate-300 mt-1">
                          Street No. 6, Muhallah Fatehabad · Direct Helpline: 0301-6044097
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full-Width 4-Column KPI / Authority Strip Below Hero Split */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
                  <div className="bg-[#0F172A] border border-slate-800/90 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Verified Portfolio</span>
                      <Building2 className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-2xl font-bold text-white mt-2 font-mono-num">
                      450+ Estates
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Residential &amp; Commercial Closings in Faisalabad
                    </p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800/90 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Luxury Hospitality</span>
                      <KeyRound className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-2xl font-bold text-white mt-2 font-mono-num">
                      PKR 19.5k – 38k
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Nightly Serviced Suites with Breakfast &amp; Valet
                    </p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800/90 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Guest &amp; Client Rating</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-2xl font-bold text-white mt-2 font-mono-num">
                      5.0 ★ Rating
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Across Google Reviews &amp; Trustpilot Profiles
                    </p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800/90 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Title Verification</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-bold text-white mt-2 font-mono-num">
                      100% Clear
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      FDA &amp; Registry Audited Satyana Road Listings
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2 OF 6: Luxury Hotel Rooms, Prices, Facilities, Estates & Photo Gallery */}
            <SuitesAndPropertiesSection
              onSelectPropertyForBooking={handleOpenPropertyBooking}
              showGalleryInline={true}
            />

            {/* SECTION 3 OF 6: Special Offers & Packages ("Exclusive Offers & Packages") */}
            <ExclusivePackagesSection
              onSelectPackageForBooking={handleOpenPackageBooking}
            />

            {/* SECTION 4 OF 6: Customer Reviews & Ratings Section (with 5-to-1 Star Bars, Google, Trustpilot & QR Code) */}
            <CustomerReviewsRatingsSection />

            {/* SECTION 5 OF 6: Professional Client Testimonials ("What Our Clients Say") */}
            <ClientTestimonialsSection />

            {/* SECTION 6 OF 6: Satyana Road Google Maps Location, Direct WhatsApp Booking & Prompt Studio */}
            <LocationAndContactSection />
          </>
        )}

        {/* =========================================================
            PAGE 2: SUITES, PROPERTIES & PHOTO GALLERY (Separate Page 2)
           ========================================================= */}
        {activePage === 'suites-estates' && (
          <div>
            <div className="bg-[#0A1124] border-b border-slate-800 py-10">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-red-400 font-medium">
                    PAGE 2 OF 4 · DEDICATED PORTFOLIO &amp; SUITES DIRECTORY
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Luxury Hotel Suites, Serviced Rooms &amp; Satyana Road Real Estate
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {AGENCY_INFO.address} · Direct Booking: {AGENCY_INFO.phoneDisplay}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-medium text-slate-200 hover:border-red-500 transition-colors self-start sm:self-auto whitespace-nowrap"
                >
                  ← Back to Home Page
                </button>
              </div>
            </div>
            <SuitesAndPropertiesSection
              onSelectPropertyForBooking={handleOpenPropertyBooking}
              showGalleryInline={true}
            />
          </div>
        )}

        {/* =========================================================
            PAGE 3: EXCLUSIVE OFFERS & PACKAGES (Separate Page 3)
           ========================================================= */}
        {activePage === 'offers-packages' && (
          <div>
            <div className="bg-[#0A1124] border-b border-slate-800 py-10">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-red-400 font-medium">
                    PAGE 3 OF 4 · HOSPITALITY PACKAGES &amp; SEASONAL DEALS
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Exclusive Offers &amp; Packages — Madni Executive Suites
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Weekend Getaway, Extended Stay, Romantic, Family, Business &amp; Seasonal Packages in Faisalabad.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-medium text-slate-200 hover:border-red-500 transition-colors self-start sm:self-auto whitespace-nowrap"
                >
                  ← Back to Home Page
                </button>
              </div>
            </div>
            <ExclusivePackagesSection
              onSelectPackageForBooking={handleOpenPackageBooking}
            />
          </div>
        )}

        {/* =========================================================
            PAGE 4: REVIEWS, TESTIMONIALS & CONTACT (Separate Page 4)
           ========================================================= */}
        {activePage === 'reviews-contact' && (
          <div>
            <div className="bg-[#0A1124] border-b border-slate-800 py-10">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-red-400 font-medium">
                    PAGE 4 OF 4 · VERIFIED REVIEWS, QR RATING &amp; SATYANA ROAD HEADQUARTERS
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Customer Reviews, Client Testimonials &amp; Faisalabad Contact Desk
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {AGENCY_INFO.address} · Phone / WhatsApp: {AGENCY_INFO.phoneDisplay}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePage('home')}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-medium text-slate-200 hover:border-red-500 transition-colors self-start sm:self-auto whitespace-nowrap"
                >
                  ← Back to Home Page
                </button>
              </div>
            </div>
            <CustomerReviewsRatingsSection />
            <ClientTestimonialsSection />
            <LocationAndContactSection />
          </div>
        )}
      </main>

      {/* Quiet Luxury Footer */}
      <footer className="bg-[#050811] border-t border-slate-800/90 text-slate-400 py-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
            <div className="md:col-span-5 space-y-2.5">
              <p className="text-lg font-bold text-white font-display">
                {AGENCY_INFO.fullTitle}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                Official Address: {AGENCY_INFO.address}
              </p>
              <p className="text-xs text-slate-300 font-mono-num">
                Direct Phone &amp; WhatsApp: {AGENCY_INFO.phoneDisplay} ({AGENCY_INFO.phoneRaw})
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <p className="text-xs font-semibold text-white">
                4-Page Multi-Page Website Navigation
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActivePage('home')}
                  className="text-left hover:text-white transition-colors"
                >
                  Page 1: Home (6 Sections)
                </button>
                <button
                  type="button"
                  onClick={() => setActivePage('suites-estates')}
                  className="text-left hover:text-white transition-colors"
                >
                  Page 2: Suites &amp; Estates
                </button>
                <button
                  type="button"
                  onClick={() => setActivePage('offers-packages')}
                  className="text-left hover:text-white transition-colors"
                >
                  Page 3: Special Offers
                </button>
                <button
                  type="button"
                  onClick={() => setActivePage('reviews-contact')}
                  className="text-left hover:text-white transition-colors"
                >
                  Page 4: Reviews &amp; Contact
                </button>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-3">
              <button
                type="button"
                onClick={() => setPromptModalOpen(true)}
                className="px-4 py-2 rounded-lg border border-slate-700 hover:border-red-500 text-xs font-medium text-slate-200 transition-colors"
              >
                Open 4-Page + 6-Section Prompt
              </button>
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-red-400 hover:text-red-300 font-medium"
              >
                WhatsApp Concierge: 0301-6044097 →
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {AGENCY_INFO.name}. All rights reserved. Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad, 38000, Pakistan.
            </p>
            <p>Dark Blue &amp; Crimson Luxury Edition</p>
          </div>
        </div>
      </footer>

      {/* Interactive Booking & Package Inquiry Modal */}
      {bookingModal.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() =>
            setBookingModal((prev) => ({ ...prev, isOpen: false }))
          }
        >
          <div
            className="max-w-lg w-full bg-[#0F172A] border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <p className="text-xs font-medium text-red-400">
                  MADNI REAL ESTATE &amp; LUXURY SUITES RESERVATION
                </p>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {bookingModal.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {bookingModal.subtitle} · Rate:{' '}
                  <span className="text-white font-semibold font-mono-num">
                    {bookingModal.priceLabel}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setBookingModal((prev) => ({ ...prev, isOpen: false }))
                }
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalConfirmed ? (
              <div className="space-y-4 py-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-bold">
                    Booking Request Prepared!
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Click below to send your reservation details directly to our Satyana Road desk via WhatsApp (<span className="font-mono-num text-white">0301-6044097</span>) or call us immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <a
                    href={`https://wa.me/${
                      AGENCY_INFO.whatsappNumber
                    }?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Madni Real Estate! I would like to confirm "${bookingModal.title}" (${bookingModal.priceLabel}). Guest Name: ${modalGuestName}, Phone: ${modalGuestPhone}, Check-In: ${bookingModal.checkIn}, Check-Out: ${bookingModal.checkOut}, Guests: ${bookingModal.guests}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center"
                  >
                    Send to WhatsApp (0301-6044097)
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      setBookingModal((prev) => ({ ...prev, isOpen: false }))
                    }
                    className="py-2.5 px-4 rounded-lg border border-slate-700 text-xs text-slate-300 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setModalConfirmed(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={modalGuestName}
                      onChange={(e) => setModalGuestName(e.target.value)}
                      placeholder="Enter full name"
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={modalGuestPhone}
                      onChange={(e) => setModalGuestPhone(e.target.value)}
                      placeholder="0301-6044097"
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white font-mono-num"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={bookingModal.checkIn}
                      onChange={(e) =>
                        setBookingModal((prev) => ({
                          ...prev,
                          checkIn: e.target.value,
                        }))
                      }
                      className="w-full px-2.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white font-mono-num"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={bookingModal.checkOut}
                      onChange={(e) =>
                        setBookingModal((prev) => ({
                          ...prev,
                          checkOut: e.target.value,
                        }))
                      }
                      className="w-full px-2.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white font-mono-num"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">
                      Guests
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={bookingModal.guests}
                      onChange={(e) =>
                        setBookingModal((prev) => ({
                          ...prev,
                          guests: Number(e.target.value),
                        }))
                      }
                      className="w-full px-2.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white font-mono-num"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors"
                  >
                    Confirm &amp; Proceed
                  </button>
                  <a
                    href={`https://wa.me/${
                      AGENCY_INFO.whatsappNumber
                    }?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Madni Real Estate! I want to book "${bookingModal.title}" (${bookingModal.priceLabel}) from ${bookingModal.checkIn} to ${bookingModal.checkOut} for ${bookingModal.guests} guests.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg border border-slate-700 hover:border-emerald-500 text-slate-200 text-xs font-medium text-center"
                  >
                    Direct WhatsApp Inquiry
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Copyable 4-Page + 6-Section AI Prompt Modal */}
      {promptModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPromptModalOpen(false)}
        >
          <div
            className="max-w-3xl w-full bg-[#0F172A] border border-red-500/50 rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  Madni Real Estate — 4-Page + 6-Section Master AI Prompt
                </h3>
                <p className="text-xs text-slate-400">
                  Ready to copy and paste into any AI builder, while already live and functional on this website!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPromptModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[60vh]">
              {MASTER_PROMPT_BLUEPRINT}
            </pre>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyBlueprint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold"
              >
                {copiedMasterPrompt ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Master Prompt
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
