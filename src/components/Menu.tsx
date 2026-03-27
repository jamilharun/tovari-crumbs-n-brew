import { useState } from 'react';

type Category = 'All' | 'Cakes & Pastries' | 'Beverages' | 'Seasonal';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, 'All'>;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Chocolate Mud Pie',
    description: 'The iconic slice. Chocolate cream, crumble crust, coffee ice cream crown.',
    price: '₱180 – ₱200',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
  },
  {
    id: 2,
    name: 'White Chocolate Cheesecake',
    description: 'Silky, delicate, and dangerously smooth. Staff pick, every time.',
    price: '₱160 – ₱185',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
  },
  {
    id: 3,
    name: 'Blueberry Cheesecake',
    description: 'Tart blueberry on a creamy base. A fan favorite since day one.',
    price: '₱155 – ₱180',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80',
  },
  {
    id: 4,
    name: 'French Chocolate Cheesecake',
    description: 'Layered chocolate depth for those who know what they\'re looking for.',
    price: '₱165 – ₱190',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
  },
  {
    id: 5,
    name: 'Lemon Pie',
    description: 'Bright, citrusy, and refreshing. The perfect contrast to richer slices.',
    price: '₱120 – ₱145',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80',
  },
  {
    id: 6,
    name: 'Carrot Cake',
    description: 'Generously spiced, generously portioned. A true classic.',
    price: '₱130 – ₱155',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80',
  },
  {
    id: 7,
    name: 'Mango Cheesecake',
    description: 'A tropical twist on the classic — sweet, ripe Philippine mango throughout.',
    price: '₱155 – ₱175',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
  },
  {
    id: 8,
    name: 'Tiramisu',
    description: 'Classic Italian layers, made with care. Espresso-soaked, mascarpone-rich.',
    price: '₱150 – ₱170',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80',
  },
  {
    id: 9,
    name: 'Strawberry Shortcake',
    description: 'Light sponge, whipped cream, fresh strawberries. Simple and wonderful.',
    price: '₱140 – ₱160',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80',
  },
  {
    id: 10,
    name: 'Americano',
    description: 'Clean, bold espresso shots with hot water. The classic black coffee.',
    price: '₱85 – ₱95',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80',
  },
  {
    id: 11,
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and foam. A textbook cappuccino.',
    price: '₱95 – ₱110',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
  },
  {
    id: 12,
    name: 'Cafe Latte',
    description: 'Espresso with silky steamed milk. Smooth and easy to love.',
    price: '₱100 – ₱120',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80',
  },
  {
    id: 13,
    name: 'Hot Chocolate',
    description: 'Rich and warming. Made with quality cocoa, not powder.',
    price: '₱95 – ₱110',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
  },
  {
    id: 14,
    name: 'Iced Coffee',
    description: "Calea's house blend over ice. A Bacolod afternoon essential.",
    price: '₱100 – ₱130',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&q=80',
  },
];

const categories: Category[] = ['All', 'Cakes & Pastries', 'Beverages', 'Seasonal'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#F0E6D2]"
      aria-label="The Menu"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-italiana text-[#8A9A85] text-sm tracking-[0.2em] uppercase mb-3">
            What we serve
          </p>
          <h2 className="font-playfair text-[#2B1A0F] text-3xl md:text-5xl font-bold mb-4">
            The Menu
          </h2>
          <p className="font-dmsans text-[#4A2E1A]/60 text-base md:text-lg font-light max-w-md mb-6">
            The menu changes. The Chocolate Mud Pie does not.
          </p>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter menu by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-dmsans text-sm font-medium px-5 py-2.5 transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[#2B1A0F] text-[#F0E6D2] border-[#2B1A0F]'
                    : 'bg-transparent text-[#2B1A0F] border-[#C49A84]/50 hover:border-[#C49A84] hover:bg-[#C49A84]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group bg-white/60 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              aria-label={item.name}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-playfair text-[#2B1A0F] text-base md:text-lg font-bold leading-snug">
                    {item.name}
                  </h3>
                </div>
                <p className="font-dmsans text-[#4A2E1A]/70 text-xs md:text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-dmsans text-[#C49A84] text-sm font-medium">
                    {item.price}
                  </span>
                  <span className="font-dmsans text-[#8A9A85] text-xs tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 font-dmsans text-[#2B1A0F]/50 text-sm text-center">
          Menu and availability may vary by location. Prices are approximate.
        </p>
      </div>
    </section>
  );
}
