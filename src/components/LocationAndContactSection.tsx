import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { AGENCY_INFO, MASTER_PROMPT_BLUEPRINT } from '../data/madniData';

interface LocationAndContactSectionProps {
  initialSubject?: string;
}

export const LocationAndContactSection: React.FC<LocationAndContactSectionProps> = ({
  initialSubject = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(
    initialSubject || 'Luxury Hotel Suite Reservation'
  );
  const [checkInDate, setCheckInDate] = useState('2026-11-06');
  const [guestsOrBudget, setGuestsOrBudget] = useState('2 Adults · 2 Nights');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showPromptBox, setShowPromptBox] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setFormError('Please enter your name and mobile/WhatsApp number.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(MASTER_PROMPT_BLUEPRINT);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const whatsappDirectUrl = `https://wa.me/${
    AGENCY_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    `Assalam-o-Alaikum ${AGENCY_INFO.name}! My name is ${
      fullName || 'Guest'
    } (${phone || 'Faisalabad Inquiry'}). Inquiry Type: ${inquiryType}. Date: ${checkInDate}. Details: ${guestsOrBudget}. ${notes}`
  )}`;

  return (
    <section
      id="location-and-contact"
      className="py-20 bg-[#070C18] border-t border-slate-800/80 text-slate-100"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-wider text-red-400 mb-2">
              HEADQUARTERS &amp; RESERVATION DESK · FAISALABAD
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Google Maps Location &amp; Direct WhatsApp Booking
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl">
              Visit our flagship office on Street No. 6, Satyana Road, Muhallah Fatehabad, Faisalabad, or reserve your suite and property tour directly via WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowPromptBox((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 hover:border-red-500 text-xs font-medium text-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-4 h-4 text-red-400" />
            {showPromptBox
              ? 'Hide 4-Page + 6-Section AI Prompt'
              : 'View Ready-to-Copy AI Website Prompt'}
          </button>
        </div>

        {/* Ready-to-Copy Master Prompt Drawer (Fulfilling the user's request for the 4-page / 6-section prompt text as well) */}
        {showPromptBox && (
          <div className="mb-12 rounded-2xl bg-[#0F172A] border border-red-500/50 p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  Complete 4-Page + 6-Section Master Prompt for Madni Real Estate
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Includes Dark Blue &amp; Red Luxury theme, 4 separate pages, 6 landing sections, Luxury Hotel Suites, Exclusive Offers, Customer Ratings QR, and Client Testimonials.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-4 h-4" />
                    Prompt Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Full Prompt
                  </>
                )}
              </button>
            </div>
            <pre className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-80">
              {MASTER_PROMPT_BLUEPRINT}
            </pre>
          </div>
        )}

        {/* Main 2-Column Split: Google Maps + Direct Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Details & Embedded Google Map */}
          <div className="lg:col-span-6 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">
                {AGENCY_INFO.fullTitle}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      Official Faisalabad Address:
                    </span>
                    <span>{AGENCY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      Direct Phone &amp; WhatsApp Concierge:
                    </span>
                    <span className="font-mono-num text-white font-semibold">
                      {AGENCY_INFO.phoneDisplay} ({AGENCY_INFO.phoneRaw})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      Reception &amp; Viewing Hours:
                    </span>
                    <span>{AGENCY_INFO.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live Google Map for Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad */}
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 h-72 relative">
              <iframe
                title="Madni Real Estate Satyana Road Faisalabad Google Map"
                src={AGENCY_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href={AGENCY_INFO.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum Madni Real Estate! Please share your live Google Maps pin for Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {AGENCY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Suite Booking & Property Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Reserve a Luxury Suite or Schedule a Property Viewing
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                Complete your inquiry below for instant confirmation or send directly to our WhatsApp desk at <span className="font-mono-num text-white font-semibold">{AGENCY_INFO.phoneRaw}</span>.
              </p>

              {submitted ? (
                <div className="mt-6 p-6 rounded-xl bg-slate-950 border border-emerald-500/50 space-y-4">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h4 className="text-base font-bold">
                      Reservation &amp; Inquiry Logged!
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>. Our concierge at Street No. 6, Satyana Road, Muhallah Fatehabad will reach out to <span className="font-mono-num text-white">{phone}</span> regarding <span className="text-red-300">{inquiryType}</span>.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Instant WhatsApp Confirmation
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/60 text-xs text-red-200">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Mian Ahmed Raza"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., 0301-6044097"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Select Suite, Package or Property
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                      >
                        <option value="Luxury Hotel Suite Reservation">
                          Luxury Hotel Suite Reservation
                        </option>
                        <option value="Weekend Getaway Package (PKR 39,500)">
                          Weekend Getaway Package (PKR 39,500)
                        </option>
                        <option value="Extended Stay Residency Package">
                          Extended Stay Residency Package
                        </option>
                        <option value="Romantic Stay Package">
                          Romantic Stay Package
                        </option>
                        <option value="Family Stay Suite Package">
                          Family Stay Suite Package
                        </option>
                        <option value="Business Stay Corporate Package">
                          Business Stay Corporate Package
                        </option>
                        <option value="Satyana Road Commercial / Villa Purchase">
                          Satyana Road Commercial / Villa Purchase
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Preferred Check-In or Visit Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Number of Guests / Property Budget
                    </label>
                    <input
                      type="text"
                      value={guestsOrBudget}
                      onChange={(e) => setGuestsOrBudget(e.target.value)}
                      placeholder="e.g., 2 Adults, 3 Nights OR 1-Kanal Villa Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Special Requests (Airport Pickup, Floral Setup, Registry Consultation)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your stay preferences or property requirements on Satyana Road..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                    >
                      Confirm Reservation Request
                    </button>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book Instantly on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
