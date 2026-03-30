import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group">
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="55" width="28" height="38" rx="3" transform="rotate(-20 10 55)" fill="#7CFC00"/>
      <rect x="40" y="30" width="28" height="50" rx="3" transform="rotate(-20 40 30)" fill="#7CFC00"/>
      <rect x="55" y="8" width="22" height="35" rx="3" transform="rotate(-20 55 8)" fill="white"/>
    </svg>
    <span className="font-display text-2xl tracking-widest">
      <span className="text-white">BIZ</span>
      <span className="text-green">Vora</span>
    </span>
  </Link>
);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm ml-4">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-brand-gray border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link py-2 ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-center mt-2">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
