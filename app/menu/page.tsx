const menu = {
  title: "Tasting Menu",
  subtitle: "Seasonal · 7 Courses",
  price: "£95",
  note: "A vegetarian menu is available, though chefs are bad at it.",
  sections: [
    {
      name: "Appetisers",
      items: [
        { name: "Scallops with garlic dressing", desc: "The chefs will travel 1 hour at 4am to source scallops so please cherish them" },
        { name: "Aubergine Engineering Project/茄盒", desc: "cultured butter, smoked salt" },
      ],
    },
    {
      name: "Courses",
      items: [
        { name: "红酒炖牛肉", desc: "cauliflower, brown butter, hazelnut" },
        { name: "Sea Urchin & Crab Roe Dumplings/海胆蟹黄水饺", desc: "harvested alongside scallops." },
        { name: "葱油鸡", desc: "leek, chicken" },
        { name: "锅包虾", desc: "Crispy King Prawn, Caramelised Vinegar Glaze" },
      ],
    },
    {
      name: "Dessert",
      items: [
        { name: "Vodka Seafood Porridge/伏特加海鲜粥", desc: "I INSIST" },
        { name: "Unknown", desc: "My cherries and wine, rosemary and thyme.” — Lana Del Rey" },
      ],
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 px-6 pt-28 pb-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-4">
            {menu.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-6">
            {menu.title}
          </h1>

          <div className="flex items-center justify-center gap-3 text-neutral-600">
            <span className="text-sm tracking-wide">{menu.price}</span>
            <span className="text-neutral-300">•</span>
            <span className="text-sm tracking-wide">Tesco on sale wine pairing</span>
          </div>

          <p className="mt-6 text-sm text-neutral-500 leading-relaxed">
            {menu.note}
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-14">
          {menu.sections.map((section) => (
            <section key={section.name}>
              <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-6">
                {section.name}
              </h2>

              <div className="space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-6"
                  >
                    <div className="min-w-0">
                      <p className="font-serif text-xl">{item.name}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right side: a subtle dotted leader */}
                    <div className="flex-1 border-b border-dotted border-neutral-300 mt-3 hidden sm:block" />

                    {/* If you later want per-item pricing, put it here */}
                    <p className="text-sm text-neutral-500 whitespace-nowrap">
                      {/* e.g. £18 */}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-base text-neutral-600">
          <p>Menus are subject to change depending on the chefs’ mood and alcohol intake.</p>
        </footer>
      </div>
    </main>
  );
}
