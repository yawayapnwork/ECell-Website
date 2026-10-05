import { useEffect, useRef } from "react";
import NetworkCards from "./NetworkCards";
import { Fade } from "react-awesome-reveal";
import kmc from "../assets/MOU_clg/kmc.jpg";
import mnit from "../assets/MOU_clg/MNIT.png";
import Yukta from "../assets/MOU_clg/YUKTA.jpeg";
import iitd from "../assets/MOU_clg/IIT DELHI.png";
import vgi from "../assets/MOU_clg/VGI.jpeg";
import srcasw from "../assets/MOU_clg/SRCASW.jpeg";
import iiitdLocal from "../assets/iiitD25.webp";

// Partner institution data with local assets
const networkData = [
  {
    name: "IIIT Delhi",
    image: iiitdLocal,
    info: "Premier institute in Delhi with a strong focus on innovation and entrepreneurship.",
  },
  {
    name: "Kirori Mal College, DU",
    image: kmc,
    info: "A prestigious college of the University of Delhi, nurturing talent and innovation.",
  },
  {
    name: "MANIT (NIT Bhopal)",
    image: mnit,
    info: "An institution known for its strong focus on innovation, entrepreneurship, and technical excellence.",
  },
  {
    name: "IIT Delhi",
    image: iitd,
    info: "India's leading institute fostering groundbreaking research and industry partnerships.",
  },
  {
    name: "E-Cell YUKTA",
    image: Yukta,
    info: "A renowned institution known for academic excellence and technical innovation.",
  },
  {
    name: "VGI",
    image: vgi,
    info: "VGI is known for its advanced research programs and collaborations in engineering.",
  },
  {
    name: "Rajguru College",
    image: srcasw,
    info: "A leading college in Delhi with a vibrant student entrepreneurship community.",
  },
];

function Networking() {
  const firstHalf = networkData.slice(0, Math.ceil(networkData.length / 2));
  const secondHalf = networkData.slice(Math.ceil(networkData.length / 2));

  const marqueeUpRef = useRef(null);
  const marqueeDownRef = useRef(null);

  useEffect(() => {
    const marqueeUp = marqueeUpRef.current;
    const marqueeDown = marqueeDownRef.current;

    const handleMouseEnter = (e) => {
      const content = e.currentTarget.querySelector(".marquee-content");
      if (content) content.style.animationPlayState = "paused";
    };

    const handleMouseLeave = (e) => {
      const content = e.currentTarget.querySelector(".marquee-content");
      if (content) content.style.animationPlayState = "running";
    };

    if (marqueeUp) {
      marqueeUp.addEventListener("mouseenter", handleMouseEnter);
      marqueeUp.addEventListener("mouseleave", handleMouseLeave);
    }

    if (marqueeDown) {
      marqueeDown.addEventListener("mouseenter", handleMouseEnter);
      marqueeDown.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (marqueeUp) {
        marqueeUp.removeEventListener("mouseenter", handleMouseEnter);
        marqueeUp.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (marqueeDown) {
        marqueeDown.removeEventListener("mouseenter", handleMouseEnter);
        marqueeDown.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 text-white bg-black">
      <div className="flex flex-col items-center gap-10 mx-auto max-w-6xl lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <Fade cascade>
            <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
              NETWORKING
            </p>
          </Fade>
          <h2 className="mb-4 text-2xl min-[360px]:text-3xl sm:text-4xl font-bold">
            Strategic <span className="text-[#ffde59]">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            Recognizing the power of institutional synergy, E-Cell ABESEC has forged strategic partnerships with premier institutes across India.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            These collaborations enable knowledge exchange, joint conclaves, resource sharing, and build an expansive national ecosystem for student innovation and early-stage ventures.
          </p>
        </div>

        {/* Right Section - Vertical Scrolling Content */}
        <div className="relative w-full overflow-hidden lg:w-1/2 rounded-2xl h-[360px] sm:h-[420px] md:h-[480px]">
          <div className="flex flex-col sm:flex-row justify-between h-full gap-4">
            {/* First Column - Scrolls Up */}
            <div
              ref={marqueeUpRef}
              className="w-full sm:w-1/2 vertical-marquee-container"
            >
              <div className="marquee-content scrolling-up">
                {[...firstHalf, ...firstHalf].map((network, index) => (
                  <NetworkCards
                    key={`up-${index}`}
                    name={network.name}
                    image={network.image}
                    info={network.info}
                  />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-b from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Second Column - Scrolls Down */}
            <div
              ref={marqueeDownRef}
              className="hidden sm:block w-1/2 vertical-marquee-container"
            >
              <div className="marquee-content scrolling-down">
                {[...secondHalf, ...secondHalf].map((network, index) => (
                  <NetworkCards
                    key={`down-${index}`}
                    name={network.name}
                    image={network.image}
                    info={network.info}
                  />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-b from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Networking;
