import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ecell.svg';
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaArrowRight,
  FaLocationDot,
  FaEnvelope,
} from 'react-icons/fa6';

const initiatives = [
  { name: 'The Entrepreneurship Show', path: '/events/the-entrepreneurship-show-4-0' },
  { name: 'BizzMantra', path: '/events/bizzmantra-2025' },
  { name: 'IdeaStorm', path: '/events/ideastorm-2026-delhi-ncr-zonal' },
  { name: 'E-Summit Techpravaah', path: '/events/e-summit-techpravaah' },
  { name: 'BidWiser Mock IPL', path: '/events/bidwiser-the-mock-ipl-auction' },
];

const programs = [
  { name: 'Game of Drones', path: '/events/game-of-drones' },
  { name: "Achiever's Talk", path: '/events/achievers-talk' },
  { name: "Founder's Cap", path: '/events/founders-cap-training' },
  { name: 'Navy Industrial Visit', path: '/events/navy-visit-2023' },
  { name: 'Eureka Pitching', path: '/events/eureka' },
];

const usefulLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Teams', path: '/teams' },
  { name: 'Contact Us', path: '/contactus' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/ecell-abes-ec/',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ecell_abesec/',
    icon: FaInstagram,
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/ecell_abesec',
    icon: FaXTwitter,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@E-CELL_ABESEC',
    icon: FaYoutube,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/abes.ecell/',
    icon: FaFacebook,
  },
];

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-[#26250F] pt-14 pb-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 mb-12">
          {/* Column 1: Brand, Newsletter, and Social Icons */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-6">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ffde59] rounded-md"
            >
              <img
                src={Logo}
                alt="E-Cell ABES EC"
                className="h-10 sm:h-11 w-auto object-contain"
              />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                E-Cell <span className="text-[#ffde59]">ABES EC</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Experience Entrepreneurship with us. Empowering student innovators,
              thinkers, and builders to turn ideas into impactful ventures.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-1">
              <h4 className="text-white text-sm sm:text-base font-bold tracking-tight mb-2.5">
                Subscribe to Our Blogs
              </h4>
              <form
                onSubmit={handleNewsletterSubmit}
                className="relative flex items-center w-full max-w-sm rounded-full bg-[#121310] border border-[#ffde59]/70 focus-within:border-[#ffde59] focus-within:ring-2 focus-within:ring-[#ffde59]/30 transition-all p-1"
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ffde59] text-black hover:bg-[#ffed59] flex items-center justify-center transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffde59]"
                >
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[#ffde59] text-xs mt-2 font-medium">
                  Thank you for subscribing to our updates!
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-3">
                Get connected with us on social networks:
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] border border-zinc-800 text-[#ffde59] hover:bg-[#ffde59] hover:text-black hover:border-[#ffde59] transition-colors duration-150 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffde59]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Our Initiatives */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-[#ffde59] font-bold text-sm tracking-wider uppercase mb-4">
              OUR INITIATIVES
            </h3>
            <ul className="space-y-2.5">
              {initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-[#ffde59] text-sm leading-relaxed transition-colors duration-150 inline-block focus:outline-none focus-visible:text-[#ffde59]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs & Activities */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-[#ffde59] font-bold text-sm tracking-wider uppercase mb-4">
              PROGRAMS
            </h3>
            <ul className="space-y-2.5">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-[#ffde59] text-sm leading-relaxed transition-colors duration-150 inline-block focus:outline-none focus-visible:text-[#ffde59]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-[#ffde59] font-bold text-sm tracking-wider uppercase mb-4">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-[#ffde59] text-sm leading-relaxed transition-colors duration-150 inline-block focus:outline-none focus-visible:text-[#ffde59]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-[#ffde59] font-bold text-sm tracking-wider uppercase mb-4">
              CONTACT
            </h3>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <FaLocationDot
                  className="w-4 h-4 text-[#ffde59] flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="leading-relaxed break-words text-zinc-400 text-sm">
                  ABES Engineering College, 19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope
                  className="w-4 h-4 text-[#ffde59] flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:ecell@abes.ac.in"
                  className="text-zinc-400 hover:text-[#ffde59] transition-colors duration-150 break-all text-sm focus:outline-none focus-visible:text-[#ffde59]"
                >
                  ecell@abes.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} E-Cell ABES EC. All rights reserved.</p>
          <p className="text-zinc-500">Experience Entrepreneurship with us.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
