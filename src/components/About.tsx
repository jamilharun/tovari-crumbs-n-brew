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
                Baked with intent.
                <br />
                <span className="italic font-normal">Brewed with care.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-dmsans text-[#4A2E1A] text-base leading-relaxed font-light">
              <p>
                Tovari Crumbs &amp; Brew started with a simple belief: that a good pastry and a well-brewed cup of coffee are more than food — they are the quiet architecture of a good day. We are a cozy café and bakery that takes those small things seriously.
              </p>
              <p>
                Everything we put out is handcrafted. The pastries are freshly baked each morning, shaped and filled by people who care about the difference between something made carefully and something merely made. The coffee is specialty-sourced and brewed to order — not as a trend, but because we think you deserve a cup that was actually thought about.
              </p>
              <p>
                The name Tovari has no grand origin story. It is simply a word we chose because it felt warm and unhurried — which is exactly the mood we try to set. Come in when you have a little time to spare, or when you need a quiet corner to think. We are not the kind of place that rushes you out.
              </p>
              <p>
                Simple moments are what we are built for. A croissant that is still warm. A latte that arrives just right. Somewhere to sit that feels like it was made for staying. That is Tovari Crumbs &amp; Brew — and it is enough.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#C49A84]/30">
              {[
                { number: 'Fresh', label: 'Baked daily' },
                { number: 'Craft', label: 'Specialty coffee' },
                { number: 'Cozy', label: 'Always' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-[#2B1A0F] text-xl md:text-2xl font-bold">
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
