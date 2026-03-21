import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="group flex items-center gap-1">
              <span className="font-display text-xl font-bold tracking-tight text-off-white">
                Refine
              </span>
              <span className="font-display text-xl font-light tracking-tight text-gray-text">
                Web
              </span>
              <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-text">
              Custom websites for local businesses in Murfreesboro, Tennessee.
              No templates. No BS. Just clean, fast sites that get results.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-text transition-colors hover:text-off-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-gray-text md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Refine Web. All rights reserved.</p>
          <p>Murfreesboro, TN</p>
        </div>
      </div>
    </footer>
  );
}
