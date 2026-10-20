import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Esgrow Studio home">
      <span className="brand-mark" aria-hidden="true">
        ✿
      </span>
      esgrow<span className="brand-studio">studio</span>
    </Link>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={scrolled ? "is-scrolled" : ""}>
      <Brand />
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? "open" : ""}
      >
        {["Services", "Work", "Pricing", "About", "Blog"].map((name) => (
          <NavLink key={name} to={"/" + name.toLowerCase()}>
            {name}
          </NavLink>
        ))}
      </nav>
      <Link className="button small" to="/contact">
        Let’s talk <span>↗</span>
      </Link>
      <button
        className="menu-toggle"
        aria-controls="main-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "☰"}
      </button>
    </header>
  );
}
