import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed top-1/3 right-4 z-40">
      
      <div className="flex flex-col items-center gap-6 px-3 py-6 rounded-2xl 
                      bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">

        <a
          href="https://www.linkedin.com/company/ecell-abes-ec/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-yellow-400 hover:text-[#ffed59] transition-colors duration-200"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://www.instagram.com/ecell_abesec/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-yellow-400 hover:text-[#ffed59] transition-colors duration-200"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://x.com/ecell_abesec"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-yellow-400 hover:text-[#ffed59] transition-colors duration-200"
        >
          <FaTwitter size={22} />
        </a>

        <a
          href="https://www.youtube.com/@E-CELL_ABESEC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-yellow-400 hover:text-[#ffed59] transition-colors duration-200"
        >
          <FaYoutube size={22} />
        </a>

        <a
          href="https://www.facebook.com/abes.ecell/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-yellow-400 hover:text-[#ffed59] transition-colors duration-200"
        >
          <FaFacebook size={22} />
        </a>

      </div>
    </div>
  );
}