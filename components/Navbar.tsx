import Link from "next/link";
import { Logo } from "./Logo";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="rounded-xl focus:outline-none focus:ring-2 focus:ring-black">
          <Logo />
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <a
            href="mailto:you@example.com"
            className="ml-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
