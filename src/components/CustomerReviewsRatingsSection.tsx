import React, { useState } from 'react';
import { ExternalLink, QrCode, Settings2, Check, Copy } from 'lucide-react';
import { AGENCY_INFO, RATING_BREAKDOWN } from '../data/madniData';
import { QrCodeSvg } from './QrCodeSvg';

export const CustomerReviewsRatingsSection: React.FC = () => {
  const [googleReviewUrl, setGoogleReviewUrl] = useState(
    AGENCY_INFO.defaultGoogleReviewUrl
  );
  const [trustpilotUrl, setTrustpilotUrl] = useState(
    AGENCY_INFO.defaultTrustpilotUrl
  );
  const [qrTargetPlatform, setQrTargetPlatform] = useState<'google' | 'trustpilot'>('google');
  const [showLinkEditor, setShowLinkEditor] = useState(false);
  const [copiedQrUrl, setCopiedQrUrl] = useState(false);

  const activeQrUrl =
    qrTargetPlatform === 'google' ? googleReviewUrl : trustpilotUrl;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(activeQrUrl);
    setCopiedQrUrl(true);
    setTimeout(() => setCopiedQrUrl(false), 2000);
  };

  return (
    <section
      id="customer-ratings"
      className="py-20 bg-[#070C18] border-t border-slate-800/80 text-slate-100"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium tracking-wider text-red-400 mb-2">
              VERIFIED GUEST &amp; INVESTOR FEEDBACK
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Customer Reviews &amp; Ratings
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Transparent satisfaction ratings across our Satyana Road luxury suites and Faisalabad real estate advisory desk.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowLinkEditor((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-200 hover:border-red-500 transition-colors whitespace-nowrap shrink-0"
            >
              <Settings2 className="w-3.5 h-3.5 text-red-400" />
              {showLinkEditor ? 'Close Review Link Setup' : 'Update Google & Trustpilot Links'}
            </button>
          </div>
        </div>

        {/* Editable Review URLs Drawer (So owner can plug in exact Google Reviews & Trustpilot links) */}
        {showLinkEditor && (
          <div className="mb-8 p-5 rounded-xl bg-slate-900/95 border border-red-500/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Configure Actual Review Profile Links (Updates QR Code &amp; “See Reviews” Buttons Instantly)
              </h3>
              <span className="text-xs text-slate-400">Editable Placeholders</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Google Business Profile Review URL
                </label>
                <input
                  type="url"
                  value={googleReviewUrl}
                  onChange={(e) => setGoogleReviewUrl(e.target.value)}
                  placeholder="https://g.page/r/..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Trustpilot Profile Review URL
                </label>
                <input
                  type="url"
                  value={trustpilotUrl}
                  onChange={(e) => setTrustpilotUrl(e.target.value)}
                  placeholder="https://www.trustpilot.com/review/..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500 font-mono-num"
                />
              </div>
            </div>
          </div>
        )}

        {/* Reference-Inspired 3-Column Ratings, Platforms & QR Code Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: Overall Rating (5.0) + 5-Star to 1-Star Breakdown Bars */}
          <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-colors">
            <div>
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white font-mono-num">
                      5.0
                    </span>
                    <span className="text-sm text-slate-400 font-mono-num">
                      / 5.0
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-amber-400 text-lg mt-2"
                    aria-label="5 out of 5 stars"
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">
                    Based on 148 Guest &amp; Client Ratings (Sample / Editable)
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-400 block">
                    98% Recommended
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Satyana Road, Faisalabad
                  </span>
                </div>
              </div>

              {/* 5 Stars to 1 Star Percentage Bars */}
              <div className="mt-6 space-y-3">
                {RATING_BREAKDOWN.map((row) => (
                  <div
                    key={row.stars}
                    className="grid grid-cols-12 items-center gap-3 text-xs"
                  >
                    <span className="col-span-2 font-medium text-slate-200 font-mono-num">
                      {row.stars} ★
                    </span>
                    <div className="col-span-7 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-amber-400 rounded-full transition-all duration-300"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="col-span-3 text-right text-slate-400 font-mono-num">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
              Location: {AGENCY_INFO.address} · Helpline: {AGENCY_INFO.phoneDisplay}
            </p>
          </div>

          {/* Column 2: Separate Google Reviews & Trustpilot Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {/* Google Reviews Card */}
            <div className="flex-1 bg-[#0F172A] border border-slate-800 hover:border-red-600/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Google G SVG */}
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#EA4335"
                        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.2 8.9 5 12 5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6l3.7 2.9c2.2-2 3.7-5 3.7-8.7z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.3 14.8c-.2-.8-.4-1.6-.4-2.5s.2-1.7.4-2.5L1.6 7C.6 9 0 11.2 0 13.5s.6 4.5 1.6 6.5l3.7-2.9z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5l-3.7 2.9C3.5 21.4 7.4 24 12 24z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Google Reviews
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-white font-mono-num">
                        4.9
                      </span>
                      <span className="text-amber-400 text-sm">★★★★★</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono-num">
                  112 Reviews
                </span>
              </div>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Verified Google Maps location ratings for Madni Real Estate on Street No. 6, Satyana Road, Faisalabad.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>See Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setQrTargetPlatform('google')}
                  className={`text-xs font-medium transition-colors ${
                    qrTargetPlatform === 'google'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {qrTargetPlatform === 'google' ? 'Active on QR' : 'Show on QR'}
                </button>
              </div>
            </div>

            {/* Trustpilot Card */}
            <div className="flex-1 bg-[#0F172A] border border-slate-800 hover:border-red-600/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Trustpilot Star Logo SVG */}
                  <div className="w-11 h-11 rounded-xl bg-[#00B67A] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Trustpilot
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-white font-mono-num">
                        5.0
                      </span>
                      <span className="text-[#00B67A] text-sm">★★★★★</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono-num">
                  36 Reviews
                </span>
              </div>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Independent hospitality and overseas Pakistani property investment reviews on Trustpilot.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={trustpilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>See Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setQrTargetPlatform('trustpilot')}
                  className={`text-xs font-medium transition-colors ${
                    qrTargetPlatform === 'trustpilot'
                      ? 'text-emerald-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {qrTargetPlatform === 'trustpilot' ? 'Active on QR' : 'Show on QR'}
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Stylish "Review Us!" QR Code Card */}
          <div className="lg:col-span-3 bg-gradient-to-b from-[#0F172A] to-[#1A0D18] border border-red-900/50 rounded-2xl p-6 flex flex-col items-center justify-between text-center shadow-lg">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400">
                <QrCode className="w-4 h-4" />
                <span>Scan &amp; Share Feedback</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Review Us!</h3>
              <p className="text-xs text-slate-300">
                Scan with your phone camera or click the QR code below to leave a review on{' '}
                <span className="text-white font-semibold">
                  {qrTargetPlatform === 'google' ? 'Google Reviews' : 'Trustpilot'}
                </span>
                .
              </p>
            </div>

            <div className="my-5">
              <QrCodeSvg value={activeQrUrl} size={160} />
            </div>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-center gap-2">
                <a
                  href={activeQrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  Leave a Review
                </a>
                <button
                  type="button"
                  onClick={handleCopyUrl}
                  title="Copy Review Link"
                  className="p-2 rounded-lg border border-slate-700 bg-slate-900 hover:border-slate-500 text-slate-200 transition-colors"
                >
                  {copiedQrUrl ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                Links to: {activeQrUrl}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
