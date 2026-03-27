export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#E4D5BB]"
      aria-label="Our Story"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Warm cafe interior with pastries"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent block */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[#C49A84]/30 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-italiana text-[#8A9A85] text-sm tracking-[0.2em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-playfair text-[#2B1A0F] text-3xl md:text-4xl font-bold leading-snug mb-1">
                Named for two daughters.
                <br />
                <span className="italic font-normal">Built for a city.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-dmsans text-[#4A2E1A] text-base leading-relaxed font-light">
              <p>
                Calea is not an invented word. It is the name Ging Consing built from the first syllables of her two daughters' names — Carissa and Leanne. Before it was a cafe, it was a mother's idea of what something good should be called. That is still the best explanation of what this place is.
              </p>
              <p>
                What started in a home kitchen in Bacolod grew, steadily and without fanfare, into something the city considers its own. Ging was not trying to open a chain or win a competition — she was baking things she thought were worth eating and seeing if anyone else agreed. Enough people did that Calea became a fixture: first on Lacson Street, then in Robinsons, then at Ayala North Point. Seventeen years later, the Chocolate Mud Pie is still the reason most people come in the first time.
              </p>
              <p>
                The thing most first-time visitors notice is the display case. There are no labels on the cakes — no descriptions, no ingredient lists, no names. You look, you point, you ask, or you guess. Ging has always believed that a cake should speak for itself, and that deciding what you want should feel like discovery, not a transaction. It is a small policy that changes the entire mood of the room.
              </p>
              <p>
                Calea is not for people in a hurry — and that is entirely the point. The chairs are comfortable, the portions are honest, and nobody is going to rush you out. Come with someone you have not caught up with in a while, or come alone with a book. Either way, Bacolod will taste better before you leave.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#C49A84]/30">
              {[
                { number: '2009', label: 'Est.' },
                { number: '3', label: 'Locations' },
                { number: '#1', label: 'TripAdvisor Bacolod' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-[#2B1A0F] text-2xl md:text-3xl font-bold">
                    {stat.number}
                  </p>
                  <p className="font-dmsans text-[#8A9A85] text-xs md:text-sm tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
