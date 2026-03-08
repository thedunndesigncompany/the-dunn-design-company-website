// Custom artistic SVG icons for services and process steps

export const GraphicDesignIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 4L8 20h16L16 4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.6" />
    <path d="M12 24c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="10" r="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="24" cy="10" r="2.5" fill="currentColor" opacity="0.2" />
    <path d="M6 28h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="28" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="22" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
  </svg>
);

export const ProductionDesignIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="6" y="4" width="16" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="10" y="8" width="16" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <line x1="9" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="9" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="9" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <rect x="9" y="19" width="6" height="3" rx="0.5" fill="currentColor" opacity="0.15" />
  </svg>
);

export const StrategyIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="14" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="14" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.7" />
    <path d="M22 12L28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DiscoverIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="20" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.15" />
    <path d="M11 11l2 2M15 9l1 3M10 15l3-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <path d="M25 6l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="currentColor" opacity="0.6" />
  </svg>
);

export const DesignProcessIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 28L8 16l4 4-8 8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 16L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="22" cy="4" r="2" fill="currentColor" opacity="0.5" />
    <path d="M14 22c4-8 10-8 16-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 2" opacity="0.4" />
    <circle cx="14" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="30" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

export const LaunchIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M18 4c-4 4-6 10-6 14l4 4c4 0 10-2 14-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="12" r="2" fill="currentColor" opacity="0.5" />
    <path d="M12 18l-4 2-2 6 6-2 2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <circle cx="6" cy="26" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="4" cy="22" r="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="8" cy="28" r="0.8" fill="currentColor" opacity="0.4" />
  </svg>
);

export const GrowIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 28L12 18l6 4 10-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M24 8l4 0 0 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 14c2-6 8-8 12-6-2 4-6 8-12 6z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
    <path d="M6 14c4-2 8-2 12-6" stroke="currentColor" strokeWidth="0.8" opacity="0.3" fill="none" />
  </svg>
);

// ─── Services Page Icons (larger viewBox for bolder detail) ───

export const BrandDesignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Shield / crest with monogram */}
    <path d="M20 4L6 10v10c0 8 6 14 14 16 8-2 14-8 14-16V10L20 4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
    <path d="M20 4L6 10v10c0 8 6 14 14 16 8-2 14-8 14-16V10L20 4z" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Stylized "D" letterform */}
    <path d="M15 14h4c3.5 0 6 2.5 6 6s-2.5 6-6 6h-4V14z" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="15" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    {/* Color dot accents */}
    <circle cx="10" cy="34" r="2" fill="currentColor" opacity="0.35" />
    <circle cx="16" cy="36" r="2" fill="currentColor" opacity="0.25" />
    <circle cx="24" cy="36" r="2" fill="currentColor" opacity="0.15" />
  </svg>
);

export const MarketingStrategyIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Compass rose / strategic direction */}
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    {/* Compass needle */}
    <path d="M20 6l2 14-2 2-2-2L20 6z" fill="currentColor" opacity="0.5" />
    <path d="M20 34l-2-14 2-2 2 2-2 14z" fill="currentColor" opacity="0.2" />
    <path d="M6 20l14 2-2 2H6z" fill="currentColor" opacity="0.15" />
    <path d="M34 20l-14-2 2-2h12z" fill="currentColor" opacity="0.35" />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.7" />
    {/* Cardinal ticks */}
    <line x1="20" y1="2" x2="20" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="35" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="20" x2="5" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="35" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AISystemsIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Neural network brain */}
    <path d="M20 4c-7 0-13 5.5-13 13 0 4.5 2.5 8.5 6 10.5V32h14v-4.5c3.5-2 6-6 6-10.5 0-7.5-6-13-13-13z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    <path d="M20 4c-7 0-13 5.5-13 13 0 4.5 2.5 8.5 6 10.5V32h14v-4.5c3.5-2 6-6 6-10.5 0-7.5-6-13-13-13z" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Network connections */}
    <line x1="14" y1="14" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="26" y1="14" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="14" y1="14" x2="14" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="26" y1="14" x2="26" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="14" y1="20" x2="20" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="26" y1="20" x2="20" y2="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    {/* Neural nodes */}
    <circle cx="20" cy="11" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="26" cy="14" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="14" cy="20" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="26" cy="20" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="20" cy="23" r="2.5" fill="currentColor" opacity="0.7" />
    {/* Pulse at base */}
    <path d="M13 35l2-3 2 4 3-5 2 4 2-3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
  </svg>
);

export const DigitalContentIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Tablet/phone with play button and content layers */}
    <rect x="8" y="3" width="24" height="34" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="8" y1="8" x2="32" y2="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="8" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    {/* Play button center */}
    <path d="M17 15v10l9-5-9-5z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Engagement indicators */}
    <circle cx="14" cy="28" r="1.5" fill="currentColor" opacity="0.3" />
    <rect x="18" y="27" width="8" height="2" rx="1" fill="currentColor" opacity="0.2" />
    {/* Floating notification */}
    <circle cx="34" cy="8" r="3" fill="currentColor" opacity="0.3" />
    <text x="34" y="10" textAnchor="middle" fill="currentColor" fontSize="5" fontWeight="bold" opacity="0.5">3</text>
  </svg>
);

export const CollateralIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Open magazine / brochure spread */}
    <path d="M3 7l17 3v26L3 33V7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.04" />
    <path d="M37 7L20 10v26l17-3V7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.04" />
    <path d="M3 7l17 3v26L3 33V7z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M37 7L20 10v26l17-3V7z" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Text lines left page */}
    <line x1="6" y1="15" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="6" y1="19" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="6" y1="23" x2="17" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    {/* Image block right page */}
    <rect x="23" y="14" width="10" height="7" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
    <line x1="23" y1="25" x2="33" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <line x1="23" y1="29" x2="30" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    {/* Spine */}
    <line x1="20" y1="10" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
  </svg>
);

export const CampaignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Bold megaphone */}
    <path d="M5 16v8l12 5V11L5 16z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
    <path d="M5 16v8l12 5V11L5 16z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M17 11l10-6v30l-10-6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="1" y="15" width="4" height="10" rx="2" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    {/* Sound waves */}
    <path d="M30 14c2.5 2.5 2.5 9.5 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M34 10c4 5 4 15 0 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    {/* Sparkle accents */}
    <circle cx="37" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="39" cy="15" r="1" fill="currentColor" opacity="0.2" />
  </svg>
);

export const SocialDesignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    {/* Grid of social cards with rich detail */}
    <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    <rect x="22" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    <rect x="2" y="22" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    <rect x="22" y="22" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    {/* Image icon in first card */}
    <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.3" />
    <path d="M3 16l4-4 4 3 3-2 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    {/* Heart in last card */}
    <path d="M28 27c1.5-1.5 4-1.5 4.5 0.5s-4.5 5-4.5 5-5-3-4.5-5S26.5 25.5 28 27z" fill="currentColor" opacity="0.25" />
    {/* Play icon in third card */}
    <path d="M8 28l6 3-6 3V28z" fill="currentColor" opacity="0.25" />
    {/* Chat bubble in second card */}
    <path d="M26 6h8v6h-5l-2 2v-2h-1V6z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.1" />
  </svg>
);
