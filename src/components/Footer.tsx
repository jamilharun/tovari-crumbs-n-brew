const quickLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Find Us', href: '#find-us' },
  { label: 'Gallery', href: '#gallery' },
];

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TripAdvisorBadge() {
  return (
    <div className="inline-flex items-center gap-3 border border-[#C49A84]/30 px-4 py-3 rounded-sm">
      {/* Simplified owl mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="15" fill="#34E0A1" opacity="0.15" />
        <circle cx="10.5" cy="17" r="4.5" fill="none" stroke="#34E0A1" strokeWidth="1.5" />
        <circle cx="21.5" cy="17" r="4.5" fill="none" stroke="#34E0A1" strokeWidth="1.5" />
        <circle cx="10.5" cy="17" r="2" fill="#34E0A1" />
        <circle cx="21.5" cy="17" r="2" fill="#34E0A1" />
        <path d="M8 13c1-2.5 2.5-4 8-4s7 1.5 8 4" stroke="#34E0A1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div>
        <p className="font-dmsans text-[#F0E6D2] text-xs font-medium leading-none mb-0.5">
          TripAdvisor
        </p>
        <p className="font-dmsans text-[#34E0A1] text-xs leading-none">
          #1 Coffee &amp; Tea — Bacolod City
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#2B1A0F] pt-16 pb-8 px-5 md:px-8"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-[#F0E6D2]/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-playfair text-[#F0E6D2] text-3xl font-bold"
              aria-label="Calea — back to top"
            >
              Calea
            </a>
            <p className="font-dmsans text-[#F0E6D2]/40 text-sm font-light leading-relaxed">
              See you at the glass case.
            </p>
            <p className="font-italiana text-[#C49A84] text-base leading-relaxed">
              Because Life is Sweeter in Bacolod
            </p>
            <p className="font-dmsans text-[#F0E6D2]/40 text-sm leading-relaxed">
              Handcrafted pastries and specialty coffee in the heart of Bacolod City since 2009.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <p className="font-dmsans text-[#F0E6D2]/50 text-xs tracking-widest uppercase">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-dmsans text-[#F0E6D2]/70 text-sm hover:text-[#C49A84] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + Badge */}
          <div className="flex flex-col gap-5">
            <p className="font-dmsans text-[#F0E6D2]/50 text-xs tracking-widest uppercase">
              Follow us
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/pages/Calea-Pastries-Cake-Bacolod-City/126985990721233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#F0E6D2]/20 text-[#F0E6D2]/60 hover:text-[#C49A84] hover:border-[#C49A84]/50 transition-colors rounded-sm"
                aria-label="Calea on Facebook (opens in new tab)"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/caleacafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#F0E6D2]/20 text-[#F0E6D2]/60 hover:text-[#C49A84] hover:border-[#C49A84]/50 transition-colors rounded-sm"
                aria-label="Calea on Instagram (opens in new tab)"
              >
                <InstagramIcon />
              </a>
            </div>

            <TripAdvisorBadge />
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <p className="font-dmsans text-[#F0E6D2]/30 text-xs">
              &copy; 2026 Unofficial Fan Site. Not affiliated with Calea Pastries &amp; Coffee.
            </p>
            <p className="font-dmsans text-[#F0E6D2]/20 text-xs">
              Made with love by a fan &middot; All trademarks belong to their respective owners.
            </p>
            <a
              href="mailto:jamilharunl45@gmail.com"
              className="font-dmsans text-ivory/30 text-xs hover:text-rose-gold transition-colors"
            >
              jamilharunl45@gmail.com
            </a>
          </div>
          <p className="font-dmsans text-[#F0E6D2]/20 text-xs">
            Bacolod City, Negros Occidental, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
