import Link from "next/link";
import { CATEGORIES } from "@/constants";

export default function SiteHeader({ activeCategory }: { activeCategory?: string }) {
  const activeSection = CATEGORIES.find(({ id }) => id === activeCategory);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark">{activeSection?.brand ?? "Wisdom Archive"}</Link>
        <nav className="site-nav" aria-label="Article categories">
          <Link href="/page/1" className="site-nav-link">All</Link>
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className={`site-nav-link ${activeCategory === category.id ? "active" : ""}`}
              aria-current={activeCategory === category.id ? "page" : undefined}
            >
              {category.label}
            </Link>
          ))}
        </nav>
        <span className="header-note">Art &amp; technology, thoughtfully collected</span>
      </div>
    </header>
  );
}
