import { useState, useEffect, useCallback, useRef } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    alt: 'Elegant layered cake with fresh toppings at Tovari',
  },
  {
    src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80',
    alt: 'Delicate pastry closeup with powdered sugar',
  },
  {
    src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80',
    alt: 'Rich chocolate torte on a wooden surface',
  },
  {
    src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&q=80',
    alt: 'Iced coffee drink on a cafe table',
  },
  {
    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    alt: 'Cappuccino with latte art in a white ceramic cup',
  },
  {
    src: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80',
    alt: 'Creamy dessert in a glass with caramel drizzle',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setLightboxIndex(index);
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.classList.remove('lightbox-open');
    triggerRef.current?.focus();
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    requestAnimationFrame(() => dialogRef.current?.focus());
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { document.body.classList.remove('lightbox-open'); };
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#F0E6D2]"
      aria-label="Gallery — A Taste of Tovari Crumbs & Brew"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-italiana text-[#8A9A85] text-sm tracking-[0.2em] uppercase mb-3">
            Through the lens
          </p>
          <h2 className="font-playfair text-[#2B1A0F] text-3xl md:text-5xl font-bold">
            A Taste of Tovari
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid" role="list">
          {images.map((img, index) => (
            <div
              key={img.src}
              className="masonry-item"
              role="listitem"
            >
              <button
                className="block w-full group relative overflow-hidden rounded-sm cursor-zoom-in focus:outline focus:outline-2 focus:outline-[#C49A84] focus:outline-offset-2"
                onClick={(e) => openLightbox(index, e)}
                aria-label={`View larger: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2B1A0F]/0 group-hover:bg-[#2B1A0F]/25 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F0E6D2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-[100] bg-[#2B1A0F]/95 flex items-center justify-center p-4 focus:outline-none"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          {/* Image container */}
          <div
            className="relative max-w-4xl w-full max-h-[90svh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src.replace('w=600', 'w=1200')}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[85svh] object-contain rounded-sm shadow-2xl"
            />

            {/* Caption */}
            <p className="absolute -bottom-8 left-0 right-0 text-center font-dmsans text-[#F0E6D2]/50 text-sm">
              {images[lightboxIndex].alt}
            </p>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-0 -translate-x-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#F0E6D2]/70 hover:text-[#C49A84] transition-colors focus:outline-none focus:text-[#C49A84]"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-0 translate-x-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#F0E6D2]/70 hover:text-[#C49A84] transition-colors focus:outline-none focus:text-[#C49A84]"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-[#F0E6D2]/70 hover:text-[#C49A84] transition-colors focus:outline-none focus:text-[#C49A84]"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-dmsans text-[#F0E6D2]/40 text-xs tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
