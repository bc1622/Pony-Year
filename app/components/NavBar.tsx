import Link from "next/link";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/team", label: "Meet our team" },
  { href: "/careers", label: "Careers" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-5">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm tracking-[0.25em] uppercase text-neutral-800"
          >
            Atelier No. 7
          </Link>

          <div className="flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
