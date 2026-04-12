export default function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menu = document.querySelector('#menu');
    if (menu) menu.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const glassCase = document.querySelector('#glass-case');
    if (glassCase) glassCase.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-svh min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Tovari Crumbs & Brew"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered overlay: dark base + warm espresso gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1A0F]/70 via-[#2B1A0F]/50 to-[#2B1A0F]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <p className="font-italiana text-[#C49A84] text-sm md:text-base tracking-[0.25em] uppercase">
          Crumbs &amp; Brew
        </p>

        <h1 className="font-italiana text-[#F0E6D2] text-4xl md:text-6xl lg:text-7xl leading-tight">
          Simple Moments, Made Memorable
        </h1>

        <p className="font-dmsans text-[#F0E6D2]/80 text-base md:text-lg font-light max-w-md">
          Freshly baked, carefully brewed, and made to turn ordinary moments into something comforting and worth savoring.
        </p>

        <a
          href="#menu"
          onClick={handleExploreClick}
          className="mt-2 inline-block font-dmsans text-sm font-medium tracking-widest uppercase px-8 py-4 bg-[#C49A84] text-[#2B1A0F] hover:bg-[#F0E6D2] transition-colors duration-300 rounded-none"
        >
          Explore Our Menu
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F0E6D2]/60 hover:text-[#C49A84] transition-colors cursor-pointer bg-transparent border-none p-0"
        aria-label="Scroll down"
      >
        <span className="font-dmsans text-xs tracking-widest uppercase">
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
