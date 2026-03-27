interface Location {
  id: number;
  name: string;
  tag: string;
  address: string;
  phone?: string[];
  hours: string[];
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Lacson Street',
    tag: 'Flagship',
    address: 'Door No. G1-4 Balay Quince Commercial Building, 15th Lacson Street, Bacolod City',
    phone: ['+63 34 435 8413', '+63 34 441 0505'],
    hours: [
      'Mon – Thu & Sun: 9:00 AM – 9:30 PM',
      'Fri – Sat: 9:00 AM – 10:00 PM',
    ],
  },
  {
    id: 2,
    name: 'Robinsons Place Bacolod',
    tag: 'Mall',
    address: '1st Level, Robinsons Place Bacolod, Lacson Street, Mandalagan, Bacolod City',
    hours: ['Mall hours apply'],
  },
  {
    id: 3,
    name: 'The District Ayala North Point',
    tag: 'Mall',
    address: 'The District Ayala North Point, City of Talisay, Negros Occidental',
    hours: ['Mall hours apply'],
  },
];

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="py-20 md:py-28 bg-[#2B1A0F]"
      aria-label="Find Us — Calea locations"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-italiana text-[#C49A84] text-sm tracking-[0.2em] uppercase mb-3">
            Three places to find us
          </p>
          <h2 className="font-playfair text-[#F0E6D2] text-3xl md:text-5xl font-bold mb-4">
            Find Us
          </h2>
          <p className="font-dmsans text-[#F0E6D2]/60 text-base md:text-lg font-light max-w-md">
            Lacson Street is where it started. The others followed.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="bg-[#F0E6D2]/5 border border-[#F0E6D2]/10 p-6 md:p-8 flex flex-col gap-5 hover:bg-[#F0E6D2]/10 transition-colors duration-300"
              aria-label={`${loc.name} location`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-[#C49A84]">
                  <PinIcon />
                </div>
                <span className="font-dmsans text-[#8A9A85] text-xs tracking-widest uppercase border border-[#8A9A85]/30 px-2.5 py-1">
                  {loc.tag}
                </span>
              </div>

              <div>
                <h3 className="font-playfair text-[#F0E6D2] text-xl font-bold mb-3">
                  {loc.name}
                </h3>
                <p className="font-dmsans text-[#F0E6D2]/60 text-sm leading-relaxed">
                  {loc.address}
                </p>
              </div>

              {loc.phone && loc.phone.length > 0 && (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#C49A84]">
                    <PhoneIcon />
                    <span className="font-dmsans text-[#F0E6D2]/50 text-xs tracking-widest uppercase">
                      Phone
                    </span>
                  </div>
                  {loc.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, '')}`}
                      className="font-dmsans text-[#F0E6D2]/70 text-sm hover:text-[#C49A84] transition-colors pl-6"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[#C49A84]">
                  <ClockIcon />
                  <span className="font-dmsans text-[#F0E6D2]/50 text-xs tracking-widest uppercase">
                    Hours
                  </span>
                </div>
                {loc.hours.map((h) => (
                  <p
                    key={h}
                    className="font-dmsans text-[#F0E6D2]/70 text-sm pl-6"
                  >
                    {h}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-14 pt-10 border-t border-[#F0E6D2]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-dmsans text-[#F0E6D2]/50 text-sm text-center sm:text-left">
            Follow along — we post daily specials and seasonal offerings.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/pages/Calea-Pastries-Cake-Bacolod-City/126985990721233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-dmsans text-sm text-[#F0E6D2]/70 hover:text-[#C49A84] transition-colors"
              aria-label="Calea on Facebook (opens in new tab)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/caleacafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-dmsans text-sm text-[#F0E6D2]/70 hover:text-[#C49A84] transition-colors"
              aria-label="Calea on Instagram (opens in new tab)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
