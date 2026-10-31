import heroEstateImg from '../assets/images/hero_faisalabad_luxury_estate_1793426908462.jpg';
import royalPenthouseImg from '../assets/images/suite_royal_penthouse_1793426909888.jpg';
import satyanaCommercialImg from '../assets/images/property_satyana_commercial_1793426911622.jpg';
import weekendRetreatImg from '../assets/images/package_weekend_retreat_1793426912768.jpg';
import canalVillaImg from '../assets/images/gallery_canal_villa_1793426913076.jpg';

export const AGENCY_INFO = {
  name: 'Madni Real Estate',
  fullTitle: 'Madni Real Estate || Best Real Estate Agency In Faisalabad',
  phoneDisplay: '0301-6044097',
  phoneRaw: '03016044097',
  whatsappNumber: '923016044097',
  address: 'Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad, 38000, Pakistan',
  shortAddress: 'Street No. 6, Satyana Road, Muhallah Fatehabad, Faisalabad',
  postalCode: '38000',
  city: 'Faisalabad, Pakistan',
  email: 'concierge@madnirealestatefsd.pk',
  officeHours: 'Mon – Sun · 9:00 AM to 10:00 PM PKT',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Street+no+6,+Satyana+Road,+Muhallah+Fatehabad,+Faisalabad,+38000,+Pakistan&output=embed',
  googleMapsDirectUrl:
    'https://www.google.com/maps/search/?api=1&query=Street+no+6+Satyana+Road+Muhallah+Fatehabad+Faisalabad+38000+Pakistan',
  defaultGoogleReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Madni+Real+Estate+Street+no+6+Satyana+Road+Muhallah+Fatehabad+Faisalabad',
  defaultTrustpilotUrl: 'https://www.trustpilot.com',
};

export const IMAGES = {
  heroEstate: heroEstateImg,
  royalPenthouse: royalPenthouseImg,
  satyanaCommercial: satyanaCommercialImg,
  weekendRetreat: weekendRetreatImg,
  canalVilla: canalVillaImg,
};

export interface SuiteOrProperty {
  id: string;
  category: 'luxury-suite' | 'residential-estate' | 'commercial-plaza';
  categoryLabel: string;
  title: string;
  location: string;
  priceLabel: string;
  priceNumericPkr: number;
  billingUnit: string;
  sizeLabel: string;
  capacityLabel: string;
  availability: 'Available Now' | 'Limited Dates' | 'By Appointment';
  image: string;
  description: string;
  facilities: string[];
}

export const SUITES_AND_PROPERTIES: SuiteOrProperty[] = [
  {
    id: 'royal-fatehabad-penthouse',
    category: 'luxury-suite',
    categoryLabel: 'Executive Hotel Suite',
    title: 'The Royal Fatehabad Penthouse Suite',
    location: 'Satyana Road Executive Tower · Faisalabad',
    priceLabel: 'PKR 38,000',
    priceNumericPkr: 38000,
    billingUnit: 'per night',
    sizeLabel: '1,450 sq. ft.',
    capacityLabel: 'Up to 4 Guests · 2 King Beds',
    availability: 'Available Now',
    image: IMAGES.royalPenthouse,
    description:
      'Panoramic skyline views of Faisalabad with dark navy velvet lounge seating, private marble dining room, dedicated butler pantry, and high-speed fiber Wi-Fi.',
    facilities: ['High-Speed Wi-Fi', 'Complimentary Breakfast', 'Valet Parking', '24/7 Room Service', 'Climate Control', 'Executive Workspace'],
  },
  {
    id: 'madni-serenity-serviced-residence',
    category: 'luxury-suite',
    categoryLabel: 'Luxury Serviced Residence',
    title: 'Madni Serenity Presidential Residence',
    location: 'Near Street No. 6, Satyana Road · Faisalabad',
    priceLabel: 'PKR 26,500',
    priceNumericPkr: 26500,
    billingUnit: 'per night',
    sizeLabel: '980 sq. ft.',
    capacityLabel: 'Up to 3 Guests · 1 King Bed',
    availability: 'Available Now',
    image: IMAGES.heroEstate,
    description:
      'Designed for overseas Pakistani families and visiting textile executives seeking five-star hotel hospitality paired with private residential security.',
    facilities: ['High-Speed Wi-Fi', 'Complimentary Breakfast', 'Airport Chauffeur', 'Smart TV & Lounge', 'Private Balcony', '24/7 Security'],
  },
  {
    id: 'terrace-diplomat-suite',
    category: 'luxury-suite',
    categoryLabel: 'Boutique Terrace Suite',
    title: 'Satyana Courtyard Terrace Suite',
    location: 'Muhallah Fatehabad Enclave · Faisalabad',
    priceLabel: 'PKR 19,500',
    priceNumericPkr: 19500,
    billingUnit: 'per night',
    sizeLabel: '720 sq. ft.',
    capacityLabel: '2 Adults · 1 Queen Bed',
    availability: 'Limited Dates',
    image: IMAGES.weekendRetreat,
    description:
      'Intimate private terrace suite with ambient evening lantern illumination, artisan tea bar, soundproof acoustic glazing, and express laundry service.',
    facilities: ['Private Terrace', 'Complimentary Breakfast', 'High-Speed Wi-Fi', 'Valet Parking', 'Evening Turn-Down', 'Tea & Espresso Bar'],
  },
  {
    id: 'canal-designer-villa-estate',
    category: 'residential-estate',
    categoryLabel: 'Prime Residential Villa',
    title: '1-Kanal Architectural Signature Villa',
    location: 'Satyana Road Prime Corridor · Faisalabad',
    priceLabel: 'PKR 8.75 Crore',
    priceNumericPkr: 87500000,
    billingUnit: 'freehold title',
    sizeLabel: '1 Kanal (4,500 sq. ft.)',
    capacityLabel: '5 En-Suite Bedrooms · Servant Quarters',
    availability: 'By Appointment',
    image: IMAGES.canalVilla,
    description:
      'Turnkey designer residence featuring travertine stone elevation, imported Spanish porcelain flooring, smart home automation, and manicured private lawn.',
    facilities: ['Clear Registry Title', 'Smart Home System', 'Solar 15kW Installed', '3-Car Covered Garage', 'Double-Height Lobby', 'Gated Security'],
  },
  {
    id: 'satyana-commercial-plaza',
    category: 'commercial-plaza',
    categoryLabel: 'Commercial Investment',
    title: 'Satyana Corporate Plaza & Executive Floors',
    location: 'Main Satyana Road, Fatehabad · Faisalabad',
    priceLabel: 'PKR 4.20 Crore',
    priceNumericPkr: 42000000,
    billingUnit: 'ground + mezzanine unit',
    sizeLabel: '3,200 sq. ft.',
    capacityLabel: 'High Rental Yield · Main Boulevard Frontage',
    availability: 'Available Now',
    image: IMAGES.satyanaCommercial,
    description:
      'High-visibility commercial showroom and corporate floor space on main Satyana Road with dedicated basement parking, backup generators, and FDA compliance.',
    facilities: ['Main Road Frontage', 'Dedicated Parking', 'Backup Power Grid', 'High-Speed Elevators', 'Verified Rental Yield', 'Legal Documentation'],
  },
  {
    id: 'fatehabad-family-duplex',
    category: 'residential-estate',
    categoryLabel: 'Residential Property',
    title: '10-Marla Luxury Corner Residence',
    location: 'Street No. 6, Muhallah Fatehabad · Faisalabad',
    priceLabel: 'PKR 3.45 Crore',
    priceNumericPkr: 34500000,
    billingUnit: 'direct transfer',
    sizeLabel: '10 Marla (2,750 sq. ft.)',
    capacityLabel: '4 Bedrooms · Double Unit Layout',
    availability: 'Available Now',
    image: IMAGES.heroEstate,
    description:
      'Steps away from Madni Real Estate headquarters on Street No. 6, offering solid brick construction, wide carpeted street access, and immediate possession.',
    facilities: ['Corner Plot', 'Sui Gas & Dual Meters', 'Wide Street Access', 'Solid Woodwork', 'Immediate Possession', 'Bank Loan Eligible'],
  },
];

export interface OfferPackage {
  id: string;
  code: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  image: string;
  originalPricePkr: string;
  discountedPricePkr: string;
  discountBadge: string;
  minStay: string;
  occupancyLimit: string;
  validity: string;
  conditions: string;
  status: 'Active Offer' | 'Seasonal Window';
  ctaLabel: string;
  includedAmenities: string[];
}

export const EXCLUSIVE_PACKAGES: OfferPackage[] = [
  {
    id: 'pkg-weekend',
    code: 'A. Weekend Getaway',
    typeLabel: 'Weekend Getaway',
    title: 'Faisalabad Royal Weekend Retreat',
    subtitle: 'Unwind from Friday check-in through Sunday late checkout in our signature Satyana Road suites with curated dining and chauffeur pickup.',
    image: IMAGES.weekendRetreat,
    originalPricePkr: 'PKR 48,000',
    discountedPricePkr: 'PKR 39,500',
    discountBadge: 'Save 18% · Verified Weekend Rate',
    minStay: 'Minimum 2 Nights (Fri – Sun)',
    occupancyLimit: '2 Adults + 1 Child under 10',
    validity: 'Valid through December 31, 2026',
    conditions: 'Free cancellation up to 48 hours prior to arrival. Price placeholder editable upon confirmation.',
    status: 'Active Offer',
    ctaLabel: 'Explore Offer',
    includedAmenities: ['Complimentary Breakfast', 'High-Speed Wi-Fi', '4:00 PM Late Checkout', 'Valet Parking'],
  },
  {
    id: 'pkg-extended',
    code: 'B. Extended Stay Package',
    typeLabel: 'Extended Stay Package',
    title: 'Overseas & Executive Long-Stay Residency',
    subtitle: 'Tailored weekly and monthly rates for overseas families inspecting Faisalabad properties or corporate project consultants.',
    image: IMAGES.royalPenthouse,
    originalPricePkr: 'PKR 185,000',
    discountedPricePkr: 'PKR 148,000',
    discountBadge: 'Save 20% · Weekly Residency',
    minStay: 'Minimum 7 Consecutive Nights',
    occupancyLimit: 'Up to 4 Guests (2-Bedroom Suite)',
    validity: 'Year-Round Availability · Editable Rate',
    conditions: 'Includes daily housekeeping, laundry allowance, and private property tour with Madni Real Estate senior advisors.',
    status: 'Active Offer',
    ctaLabel: 'View Package',
    includedAmenities: ['High-Speed Wi-Fi', 'Daily Breakfast & Laundry', 'Private Property Tour', 'Dedicated Parking'],
  },
  {
    id: 'pkg-romantic',
    code: 'C. Romantic Stay Package',
    typeLabel: 'Romantic Stay Package',
    title: 'Velvet Twilight Couples Escape',
    subtitle: 'Celebrate anniversaries or newlywed stays with bespoke floral suite styling, private terrace candlelight dinner, and artisan desserts.',
    image: IMAGES.weekendRetreat,
    originalPricePkr: 'PKR 44,000',
    discountedPricePkr: 'PKR 36,000',
    discountBadge: 'Save 18% · Couples Package',
    minStay: 'Minimum 1 Night Stay',
    occupancyLimit: '2 Adults (Couple Only)',
    validity: 'Available All Days · Advance Reservation',
    conditions: 'Requires 24-hour advance booking for custom floral setup and private terrace dining arrangement.',
    status: 'Active Offer',
    ctaLabel: 'Discover Package',
    includedAmenities: ['Suite Floral Styling', 'Private Terrace Dinner', 'In-Suite Breakfast', '2:00 PM Late Checkout'],
  },
  {
    id: 'pkg-family',
    code: 'D. Family Stay Package',
    typeLabel: 'Family Stay Package',
    title: 'Fatehabad Heritage Family Suite Package',
    subtitle: 'Spacious interconnected luxury suites with family dining platters, secure courtyard recreation, and dedicated driver accommodation support.',
    image: IMAGES.heroEstate,
    originalPricePkr: 'PKR 64,000',
    discountedPricePkr: 'PKR 52,000',
    discountBadge: 'Save 19% · Interconnected Suites',
    minStay: 'Minimum 2 Nights',
    occupancyLimit: 'Up to 6 Guests (2 Adults + 4 Children)',
    validity: 'Valid for School Holidays & Weekends',
    conditions: 'Children under 12 dine complimentary from the kids menu when accompanied by parents.',
    status: 'Active Offer',
    ctaLabel: 'Explore Family Offer',
    includedAmenities: ['Interconnected Rooms', 'Family Breakfast Buffet', 'Secure Gated Parking', '24/7 Room Service'],
  },
  {
    id: 'pkg-business',
    code: 'E. Business Stay Package',
    typeLabel: 'Business Stay Package',
    title: 'Textile & Commercial Investor Executive Stay',
    subtitle: 'Built for industrialists, exporters, and commercial property investors visiting Satyana Road and Faisalabad industrial estates.',
    image: IMAGES.satyanaCommercial,
    originalPricePkr: 'PKR 32,000',
    discountedPricePkr: 'PKR 27,000',
    discountBadge: 'Save 15% · Corporate Rate',
    minStay: 'Minimum 1 Night',
    occupancyLimit: '1–2 Corporate Travellers',
    validity: 'Valid Monday – Thursday',
    conditions: 'Includes boardroom access for 3 hours daily and commercial market briefing by Madni Real Estate.',
    status: 'Active Offer',
    ctaLabel: 'Book Business Stay',
    includedAmenities: ['Dedicated Fiber Wi-Fi', 'Executive Workspace', 'Boardroom Access', 'Express Pressing'],
  },
  {
    id: 'pkg-seasonal',
    code: 'F. Seasonal Special Offers',
    typeLabel: 'Seasonal Special Offers',
    title: 'Winter Wedding & Overseas Homecoming Offer',
    subtitle: 'Seasonal winter privilege for wedding guests and overseas families visiting Faisalabad between November and February.',
    image: IMAGES.canalVilla,
    originalPricePkr: 'PKR 55,000',
    discountedPricePkr: 'PKR 45,000',
    discountBadge: 'Save 18% · Winter Season',
    minStay: 'Minimum 3 Nights',
    occupancyLimit: 'Up to 4 Guests',
    validity: 'Nov 1, 2026 – Feb 28, 2027',
    conditions: 'Subject to seasonal allocation. Group block bookings for 3+ suites eligible for chauffeur van transfer.',
    status: 'Seasonal Window',
    ctaLabel: 'Explore Offer',
    includedAmenities: ['Airport Pick & Drop', 'Signature Kashmiri Tea Bar', 'Complimentary Breakfast', 'Priority Check-In'],
  },
];

export const PACKAGE_FAQS = [
  {
    question: 'How are package prices and discounts verified at Madni Real Estate & Suites?',
    answer:
      'All package tariffs are listed in Pakistani Rupees (PKR) and reflect genuine bundled savings compared to booking room nights, breakfast, and private transfers separately. Final taxes and seasonal dates are confirmed transparently via WhatsApp (0301-6044097) before any payment.',
  },
  {
    question: 'What is the cancellation and date modification policy for special offers?',
    answer:
      'Standard Weekend, Family, and Business packages allow free date modifications or cancellation up to 48 hours before check-in. Romantic and Seasonal packages with custom floral or chauffeur arrangements require 24–72 hours notice.',
  },
  {
    question: 'Can we combine a luxury suite stay with a guided property tour in Faisalabad?',
    answer:
      'Yes. Every guest staying in our Satyana Road executive suites receives complimentary real estate advisory and private site visits across Muhallah Fatehabad, Satyana Road, and prime Faisalabad residential societies.',
  },
  {
    question: 'What is included in all suite bookings by default?',
    answer:
      'Every stay includes high-speed fiber Wi-Fi, freshly prepared breakfast, secure gated parking at our Satyana Road enclave, climate-controlled interiors, and 24/7 concierge support.',
  },
];

export const RATING_BREAKDOWN = [
  { stars: 5, percentage: 92, countLabel: '136 Reviews' },
  { stars: 4, percentage: 6, countLabel: '9 Reviews' },
  { stars: 3, percentage: 2, countLabel: '3 Reviews' },
  { stars: 2, percentage: 0, countLabel: '0 Reviews' },
  { stars: 1, percentage: 0, countLabel: '0 Reviews' },
];

export interface ClientTestimonial {
  id: string;
  serviceCategory: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarInitials: string;
  avatarBg: string;
  rating: number;
  isDemoSample: boolean;
  reviewText: string;
}

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    serviceCategory: 'Property Acquisition & Hospitality Stay',
    clientName: 'Chaudhry Tariq Mahmood',
    clientRole: 'Managing Director',
    companyName: 'Chenab Textile Exports (UK & Faisalabad)',
    avatarInitials: 'TM',
    avatarBg: 'bg-red-900/80 text-red-100',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'Madni Real Estate on Street No. 6, Satyana Road handled our 1-Kanal villa purchase and hosted our family in their executive suites for ten days. Every registry document was verified transparently and the hospitality felt five-star.',
  },
  {
    id: 'test-2',
    serviceCategory: 'Professional Website Design & Development',
    clientName: 'Usman Ghani Siddiqui',
    clientRole: 'Head of Digital Operations',
    companyName: 'Faisalabad Prime Developers',
    avatarInitials: 'UG',
    avatarBg: 'bg-slate-800 text-amber-200',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'Our custom-built property showcase and luxury suite booking portal transformed how overseas clients explore Satyana Road listings. The dark navy and crimson luxury layout loads instantaneously on mobile and desktop.',
  },
  {
    id: 'test-3',
    serviceCategory: 'WordPress Website Redesign & Speed Optimization',
    clientName: 'Ayesha Kamran Mir',
    clientRole: 'Marketing Director',
    companyName: 'Lyallpur Heritage Hospitality',
    avatarInitials: 'AK',
    avatarBg: 'bg-indigo-950 text-indigo-200',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'After redesigning our hospitality portal and optimizing Core Web Vitals, mobile page load dropped under 1.2 seconds and direct WhatsApp suite reservations increased by 64% within two months.',
  },
  {
    id: 'test-4',
    serviceCategory: 'React Development & Custom-Coded Websites',
    clientName: 'Bilal Hassan Randhawa',
    clientRole: 'Founder & CEO',
    companyName: 'Randhawa Commercial Holdings',
    avatarInitials: 'BH',
    avatarBg: 'bg-red-950 text-red-200',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'The custom React multi-page architecture with interactive package calculators, live QR review verification, and instant WhatsApp routing sets a new benchmark for real estate agencies in Punjab.',
  },
  {
    id: 'test-5',
    serviceCategory: 'SEO & Digital Marketing Services',
    clientName: 'Zainab Fatima Noor',
    clientRole: 'Growth Strategist',
    companyName: 'Satyana Commercial Ventures',
    avatarInitials: 'ZF',
    avatarBg: 'bg-slate-800 text-emerald-200',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'Targeted local SEO for Faisalabad real estate and executive stays placed us at the top of search results for Satyana Road commercial plots, delivering qualified investor inquiries every single day.',
  },
  {
    id: 'test-6',
    serviceCategory: 'Logo Design, Brand Identity & Video Editing',
    clientName: 'Hamza Munir Sheikh',
    clientRole: 'Creative Lead',
    companyName: 'Fatehabad Luxury Estates',
    avatarInitials: 'HM',
    avatarBg: 'bg-blue-950 text-blue-200',
    rating: 5,
    isDemoSample: true,
    reviewText:
      'From our regal dark-blue and crimson brand identity to architectural drone reels and social media campaigns, the attention to visual detail elevated our agency perception across Faisalabad.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'The Royal Serenity Exterior & Courtyard',
    category: 'Flagship Facade · Satyana Road',
    image: IMAGES.heroEstate,
    caption: 'Evening illumination of the flagship executive suites and real estate enclave in Faisalabad.',
  },
  {
    id: 'gal-2',
    title: 'Royal Penthouse Velvet Lounge',
    category: 'Presidential Suite Interior',
    image: IMAGES.royalPenthouse,
    caption: 'Bespoke navy velvet seating, brass chandeliers, and panoramic floor-to-ceiling city views.',
  },
  {
    id: 'gal-3',
    title: 'Satyana Plaza Commercial Boulevard',
    category: 'Commercial Real Estate · Fatehabad',
    image: IMAGES.satyanaCommercial,
    caption: 'Prime commercial offices and retail frontages managed by Madni Real Estate on Satyana Road.',
  },
  {
    id: 'gal-4',
    title: 'Private Twilight Dining Terrace',
    category: 'Hospitality Experience',
    image: IMAGES.weekendRetreat,
    caption: 'Exclusive terrace dining setup included in our Weekend Getaway and Romantic Stay packages.',
  },
  {
    id: 'gal-5',
    title: '1-Kanal Signature Designer Villa',
    category: 'Luxury Residential Portfolio',
    image: IMAGES.canalVilla,
    caption: 'Turnkey contemporary residence with travertine stonework and landscaped courtyard.',
  },
];

export const MASTER_PROMPT_BLUEPRINT = `MASTER AI WEBSITE PROMPT — MADNI REAL ESTATE (4 SEPARATE PAGES + 6 LANDING SECTIONS)
Copy and paste this complete prompt into any AI Website Builder (Claude, Cursor, or Google AI Studio):

---
Website Title: Madni Real Estate || Best Real Estate Agency In Faisalabad
Phone & WhatsApp: 03016044097 (+92 301 6044097)
Official Address: Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad, 38000, Pakistan
Color Theme: Dark Blue (#070C18 / #0F172A) & Crimson Red Luxury (#DC2626) with Warm Gold Accents
Architecture: Multi-Page Website with 4 Separate Pages (NOT a single-page site) + 6 Distinct Sections on the Landing Page. Keep existing website structure and branding consistent without deleting existing content.

PAGE STRUCTURE (4 SEPARATE PAGES):
1. PAGE 1 — HOME (Landing Page with 6 Full Sections):
   - Section 1: Luxury Hero Banner with Check-In/Property Filter Bar & Faisalabad Authority Metrics
   - Section 2: Featured Luxury Hotel Suites & Satyana Road Real Estate Listings (Room prices, facilities, WhatsApp booking)
   - Section 3: Exclusive Offers & Packages Preview ("Exclusive Offers & Packages")
   - Section 4: Customer Reviews & Ratings Summary (5.0 rating, 5-to-1 star breakdown, Google & Trustpilot cards, working "Review Us!" QR Code)
   - Section 5: What Our Clients Say — Professional Client Testimonials Grid (3 cards per row, 5 golden stars, Verified Client badge)
   - Section 6: Architectural Photo Gallery, Google Maps Location (Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad) & Direct WhatsApp Concierge (03016044097)

2. PAGE 2 — SUITES, PROPERTIES & PHOTO GALLERY:
   - Complete catalog of Luxury Hotel Suites (nightly rates in PKR, occupancy, Wi-Fi, breakfast, valet) and Faisalabad Residential/Commercial Properties
   - Interactive Category Filter, Room Facility Matrix, and High-Resolution Lightbox Photo Gallery

3. PAGE 3 — EXCLUSIVE OFFERS & PACKAGES:
   - Heading: "Exclusive Offers & Packages"
   - Subtitle: "Discover exceptional stays and exclusive offers designed to make your experience unforgettable."
   - Featured Offer Banner + 6 Detailed Offer Cards:
     A. Weekend Getaway ("Explore Offer")
     B. Extended Stay Package ("View Package")
     C. Romantic Stay Package ("Discover Package")
     D. Family Stay Package ("Explore Family Offer")
     E. Business Stay Package ("Book Business Stay")
     F. Seasonal Special Offers ("Explore Offer")
   - Interactive Stay Date & Guest Calculator + Offer FAQ Section + "Find Your Perfect Stay" CTA

4. PAGE 4 — REVIEWS, TESTIMONIALS & CONTACT CONCIERGE:
   - Full Customer Reviews & Ratings Section with 5-star to 1-star percentage bars, Google Reviews & Trustpilot cards with editable review links, and functional "Review Us!" QR Code
   - Full "What Our Clients Say" Client Testimonials section (3-column responsive grid, Verified Client indicator, golden stars, service filters)
   - Direct WhatsApp Booking Form (03016044097) and embedded Google Map for Street no 6, Satyana Road, Muhallah Fatehabad, Faisalabad, 38000, Pakistan.
---`;
