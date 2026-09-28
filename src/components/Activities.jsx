import { Slide, Fade } from 'react-awesome-reveal';
import { GiPolarStar } from "react-icons/gi";
import AchievementCarousel from "./AchievementCarousel";
import tes3 from "../assets/tes3convrted.webp";
import tes2 from "../assets/tes2.webp";
import yugantra25 from "../assets/yugantra25.webp";
import iiitD25 from "../assets/iiitD25.webp";
import nec25 from "../assets/nec25.webp";
import tes3a from "../assets/tes3a.webp";
import tes3b from "../assets/tes3b.webp";
import tes3c from "../assets/tes3c.webp";
import nec24 from "../assets/iitb.jpg";
import eurekamb from "../assets/eurekamb.jpg";

const images3 = [nec25, nec24];
const images1 = [tes3, tes2, tes3a, tes3b, tes3c];
const images2 = [yugantra25, iiitD25];

function Activities() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Activity - 1: NEC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> NATIONAL RECOGNITION
                </span>
              </Fade>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              National <span className="text-[#ffde59]">Entrepreneurship</span> Challenge
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              The team&apos;s dedication to nurturing aspiring entrepreneurs has translated into a remarkable accomplishment: securing 27th and 29th place at the prestigious{' '}
              <span className="text-[#ffde59]">National Entrepreneurship Challenge 2023 &amp; 2024</span> organized by IIT Bombay.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <AchievementCarousel images={images3} />
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Activity - 2: EUREKA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full overflow-hidden rounded-xl order-2 md:order-1">
            <img
              src={eurekamb}
              alt="Eureka Runner Up at IIT Bombay"
              className="rounded-xl shadow-lg border border-[#26250F] w-full h-[25rem] object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> REGIONAL EXCELLENCE
                </span>
              </Fade>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Runner Up at <span className="text-[#ffde59]">Eureka 2024</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Proud to share that E-Cell ABESEC secured the Runner-Up title at{' '}
              <span className="text-[#ffde59]">Eureka 2024</span>, Asia&apos;s largest business model competition organized by IIT Bombay. This milestone demonstrates the innovative mindset and execution capability of our students.
            </p>
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Activity - 3: Startup Visits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> REAL WORLD EXPOSURE
                </span>
              </Fade>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Visits to <span className="text-[#ffde59]">startups</span> and incubators
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Our curated industrial visits to premier tech hubs and incubators give student members direct engagement with founders, understanding high-growth business operations from the ground up:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>Witness startup problem solving and product lifecycles up close</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>Interact with early-stage founders and industry leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>Absorb the energy of dynamic teams solving real-world challenges</span>
              </li>
            </ul>
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <AchievementCarousel images={images2} />
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Activity - 4: Engaging Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full overflow-hidden rounded-xl order-2 md:order-1">
            <AchievementCarousel images={images1} />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> ENGAGING INITIATIVES
                </span>
              </Fade>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Flagship events driving <span className="text-[#ffde59]">Entrepreneurship</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Beyond partnerships, our student cell conducts high-impact workshops, hackathons, and speaker sessions throughout the academic calendar:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>The Entrepreneurship Show (TES) — Annual Flagship Summit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>BizzMantra — Business Plan &amp; Innovation Arena</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>E-Summit (Techpravaah) — Conclave of Investors &amp; Tech Leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffde59] font-bold mt-0.5">&bull;</span>
                <span>Achiever&apos;s Talk — Interactive Dialogue with Established Founders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;