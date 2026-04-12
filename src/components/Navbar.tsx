import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Find Us', href: '#find-us' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change / outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`transition-all duration-500 ${
            scrolled || menuOpen
              ? 'bg-[#F0E6D2] shadow-sm'
              : 'bg-transparent'
          }`}
          aria-label="Main navigation"
        >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`font-playfair text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled || menuOpen ? 'text-[#2B1A0F]' : 'text-[#F0E6D2]'
            }`}
            aria-label="Tovari Crumbs & Brew — home"
          >
            Tovari
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-dmsans text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C49A84] ${
                    scrolled ? 'text-[#2B1A0F]' : 'text-[#F0E6D2]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded transition-colors ${
              scrolled || menuOpen ? 'text-[#2B1A0F]' : 'text-[#F0E6D2]'
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="list-none m-0 p-0 px-5 pb-6 flex flex-col gap-1 bg-[#F0E6D2]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 font-dmsans text-base font-medium text-[#2B1A0F] border-b border-[#E4D5BB] hover:text-[#C49A84] transition-colors"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </nav>
      </div>
    </>
  );
}
