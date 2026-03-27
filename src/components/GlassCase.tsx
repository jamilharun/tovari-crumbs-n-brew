import { useState, useRef } from 'react';

interface CakeItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cakes: CakeItem[] = [
  {
    id: 1,
    name: 'Chocolate Mud Pie',
    description: 'Rich chocolate cream on a crumble mud-chocolate crust, crowned with coffee ice cream. The one that started it all.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
  },
  {
    id: 2,
    name: 'White Chocolate Cheesecake',
    description: 'Silky, delicate, and dangerously smooth. Our staff\'s most-recommended slice.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80',
  },
  {
    id: 3,
    name: 'Blueberry Cheesecake',
    description: 'Tart blueberry on a creamy base. A consistent fan favorite since day one.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
  },
  {
    id: 4,
    name: 'French Chocolate Cheesecake',
    description: 'Layered depth. For those who know what they\'re looking for.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  },
  {
    id: 5,
    name: 'Lemon Pie',
    description: 'Bright, citrusy, refreshing. The perfect contrast to our richer offerings.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80',
  },
  {
    id: 6,
    name: 'Carrot Cake',
    description: 'Generously spiced, generously portioned. A true classic.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80',
  },
];

export default function GlassCase() {
  const [revealedId, setRevealedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleReveal = (id: number) => {
    setRevealedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="glass-case"
      className="py-20 md:py-28 bg-[#2B1A0F] overflow-hidden"
      aria-label="The Glass Case — Calea bestsellers"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 mb-10 md:mb-14">
        <p className="font-italiana text-[#C49A84] text-sm tracking-[0.2em] uppercase mb-3">
          Today's Selection
        </p>
        <h2 className="font-playfair text-[#F0E6D2] text-3xl md:text-5xl font-bold mb-4">
          The Glass Case
        </h2>
        <p className="font-dmsans text-[#F0E6D2]/60 text-base md:text-lg font-light max-w-md">
          No labels. No descriptions. Just the case.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 px-5 md:px-8 overflow-x-auto scrollbar-hide pb-4"
        role="list"
        aria-label="Cake selection"
      >
        {cakes.map((cake) => {
          const isRevealed = revealedId === cake.id;

          return (
            <div
              key={cake.id}
              role="listitem"
              className={`glass-card relative flex-none w-64 md:w-72 h-80 md:h-96 rounded-sm overflow-hidden cursor-pointer group focus-within:outline focus-within:outline-2 focus-within:outline-[#C49A84] ${
                isRevealed ? 'revealed' : ''
              }`}
              onClick={() => toggleReveal(cake.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleReveal(cake.id); }}}
              tabIndex={0}
              aria-label={isRevealed ? `${cake.name}: ${cake.description}` : 'Unknown pastry — interact to reveal'}
              aria-pressed={isRevealed}
            >
              {/* Cake image */}
              <img
                src={cake.image}
                alt={isRevealed ? cake.name : 'A mystery pastry from Calea'}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Always-visible dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0F]/90 via-[#2B1A0F]/20 to-transparent" />

              {/* Blur overlay — the magic */}
              <div
                className="glass-card-overlay absolute inset-0 bg-[#2B1A0F]/30"
                aria-hidden="true"
              />

              {/* Revealed content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-400 ${
                  isRevealed
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'
                }`}
              >
                <h3 className="font-playfair text-[#F0E6D2] text-lg font-bold mb-1.5">
                  {cake.name}
                </h3>
                <p className="font-dmsans text-[#F0E6D2]/75 text-sm leading-relaxed">
                  {cake.description}
                </p>
              </div>

              {/* "Tap to reveal" hint — shown before reveal */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 pointer-events-none ${
                  isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
                aria-hidden="true"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F0E6D2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span className="font-dmsans text-[#F0E6D2]/60 text-xs tracking-widest uppercase">
                  Reveal
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe hint on mobile */}
      <p className="md:hidden text-center font-dmsans text-[#F0E6D2]/40 text-xs tracking-widest uppercase mt-6 px-5">
        Swipe to see more
      </p>
    </section>
  );
}
