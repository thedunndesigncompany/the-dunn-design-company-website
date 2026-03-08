// Custom artistic SVG icons for services and process steps
// These are more detailed and unique than basic Lucide icons

export const GraphicDesignIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Pen nib with color splash */}
    <path d="M16 4L8 20h16L16 4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.6" />
    <path d="M12 24c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="10" r="2.5" fill="currentColor" opacity="0.2" />
    <circle cx="24" cy="10" r="2.5" fill="currentColor" opacity="0.2" />
    <path d="M6 28h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Color dots */}
    <circle cx="10" cy="28" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="22" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
  </svg>
);

export const ProductionDesignIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Layered pages / print stack */}
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
    {/* Target with ascending arrow */}
    <circle cx="14" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="14" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.7" />
    <path d="M22 12L28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 4h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DiscoverIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Magnifying glass with sparkle */}
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="20" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.15" />
    <path d="M11 11l2 2M15 9l1 3M10 15l3-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    {/* Sparkle */}
    <path d="M25 6l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="currentColor" opacity="0.6" />
  </svg>
);

export const DesignProcessIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Pencil with bezier curve */}
    <path d="M4 28L8 16l4 4-8 8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 16L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="22" cy="4" r="2" fill="currentColor" opacity="0.5" />
    {/* Bezier curve */}
    <path d="M14 22c4-8 10-8 16-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="2 2" opacity="0.4" />
    <circle cx="14" cy="22" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="30" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

export const LaunchIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Rocket with trail */}
    <path d="M18 4c-4 4-6 10-6 14l4 4c4 0 10-2 14-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="22" cy="12" r="2" fill="currentColor" opacity="0.5" />
    <path d="M12 18l-4 2-2 6 6-2 2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    {/* Trail sparks */}
    <circle cx="6" cy="26" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="4" cy="22" r="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="8" cy="28" r="0.8" fill="currentColor" opacity="0.4" />
  </svg>
);

export const GrowIcon = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Growth chart with plant leaf */}
    <path d="M4 28L12 18l6 4 10-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M24 8l4 0 0 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Leaf accent */}
    <path d="M6 14c2-6 8-8 12-6-2 4-6 8-12 6z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1" />
    <path d="M6 14c4-2 8-2 12-6" stroke="currentColor" strokeWidth="0.8" opacity="0.3" fill="none" />
  </svg>
);

export const BrandDesignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Logo mark / diamond with circle */}
    <rect x="8" y="8" width="12" height="12" rx="2" transform="rotate(45 14 14)" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    <circle cx="14" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
    {/* Color swatches */}
    <circle cx="4" cy="22" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="9" cy="25" r="2" fill="currentColor" opacity="0.2" />
  </svg>
);

export const MarketingStrategyIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Chess knight / strategy piece */}
    <path d="M8 24h12v-2H8v2z" fill="currentColor" opacity="0.3" />
    <path d="M10 22V14c0-4 2-6 4-8l2 2c-1 2-2 3-2 6v8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M14 6c2 0 4 2 4 5v11" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="13" cy="12" r="1" fill="currentColor" opacity="0.6" />
    {/* Flag */}
    <path d="M20 4l-4 2 4 2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
  </svg>
);

export const DigitalContentIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Phone with floating elements */}
    <rect x="8" y="2" width="12" height="24" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="8" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="8" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="14" cy="24" r="1" fill="currentColor" opacity="0.4" />
    {/* Content blocks */}
    <rect x="10" y="8" width="8" height="4" rx="0.5" fill="currentColor" opacity="0.12" />
    <rect x="10" y="14" width="5" height="2" rx="0.5" fill="currentColor" opacity="0.12" />
    <rect x="10" y="18" width="8" height="2" rx="0.5" fill="currentColor" opacity="0.08" />
    {/* Floating hearts/likes */}
    <circle cx="4" cy="10" r="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="24" cy="14" r="1.5" fill="currentColor" opacity="0.2" />
  </svg>
);

export const CollateralIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Open brochure / folded document */}
    <path d="M2 6l12 2v18L2 24V6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M26 6L14 8v18l12-2V6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="5" y1="12" x2="11" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="5" y1="15" x2="11" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="17" y1="13" x2="23" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="17" y1="16" x2="23" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Spine highlight */}
    <line x1="14" y1="8" x2="14" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

export const CampaignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Megaphone with waves */}
    <path d="M4 12v4l8 4V8L4 12z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 8l8-4v20l-8-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="1" y="11" width="3" height="6" rx="1" fill="currentColor" opacity="0.2" />
    {/* Sound waves */}
    <path d="M22 10c2 2 2 6 0 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M25 7c3 4 3 10 0 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
  </svg>
);

export const SocialDesignIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    {/* Grid of social cards */}
    <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="16" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    <rect x="2" y="16" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    <rect x="16" y="16" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Image icon in first card */}
    <circle cx="5" cy="6" r="1" fill="currentColor" opacity="0.3" />
    <path d="M3 10l2-2 3 2 2-1" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    {/* Heart in second card */}
    <path d="M19 5c1-1 3-1 3 1s-3 3-3 3-3-1-3-3 2-2 3-1z" fill="currentColor" opacity="0.2" />
  </svg>
);
