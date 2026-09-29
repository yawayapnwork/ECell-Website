import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/ecell.svg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Teams', path: '/teams' },
  { label: 'Events', path: '/events' },
  { label: 'Contact Us', path: '/contactus' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleNav = () => {
    setIsOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      // Keep navbar visible if near top, or if mobile menu is open
      if (isOpen || currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Prevent background scroll when mobile menu is open on small screens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94vw] max-w-5xl transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-28'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="relative bg-black/85 backdrop-blur-md border border-[#322d22] rounded-full shadow-[0_4px_30px_rgba(40,36,16,0.3)] px-4 sm:px-6 py-2.5 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-[#ffde59] rounded-md transition-opacity hover:opacity-90"
          onClick={closeNav}
          aria-label="E-Cell ABESEC Home"
        >
          <img
            src={Logo}
            alt="E-Cell ABESEC Logo"
            className="h-9 sm:h-10 w-auto object-contain"
            width="40"
            height="40"
          />
          <span className="hidden sm:inline-block font-bold text-sm tracking-wide text-white">
            E-CELL <span className="text-[#ffde59]">ABESEC</span>
          </span>
        </Link>

        {/* Desktop / Tablet Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium border ${
                  isActive
                    ? 'text-[#ffde59] bg-[#141412] border-[#26250F]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5 border-transparent transition-colors duration-150'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNav}
            type="button"
            className="p-2 text-zinc-300 hover:text-[#ffde59] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffde59] rounded-full transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden mt-2 p-3 bg-black/95 backdrop-blur-xl border border-[#322d22] rounded-2xl shadow-2xl flex flex-col gap-1 transition-all duration-300 animate-fadeIn"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeNav}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium border ${
                  isActive
                    ? 'text-[#ffde59] bg-[#141412] border-[#26250F]'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900 border-transparent transition-colors duration-150'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;