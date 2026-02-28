import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Food & Drinks", path: "/food" },
  { name: "Combos", path: "/combos" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-md shadow-black/20"
          : "bg-black/90"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* ✅ Bigger Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              scrollTop();
              setMobileOpen(false);
            }}
          >
            <img
              src="/images/logos/dip-and-dash-logo.png"
              alt="Dip & Dash"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  scrollTop();
                  setMobileOpen(false);
                }}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/get-app"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all glow-lavender-sm"
            >
              Order on App
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-2 sm:pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  scrollTop();
                  setMobileOpen(false);
                }}
                className={`block px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/get-app"
              onClick={() => setMobileOpen(false)}
              className="block mx-2 sm:mx-4 mt-2 text-center px-3 sm:px-4 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold"
            >
              Order on App
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;