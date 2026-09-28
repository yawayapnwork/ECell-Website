import AchievementCarousel from "./AchievementCarousel";
import '../App.css';
import { Fade } from 'react-awesome-reveal';
import { GiPolarStar } from "react-icons/gi";
import ach1 from "../assets/achievements1.webp";
import ach2 from "../assets/achievements2.jpg";
import ach3 from "../assets/nec25.webp";
import au1 from "../assets/aboutUs1.webp";
import au2 from "../assets/aboutUs2.webp";
import nt25 from "../assets/nationalTechDay25.webp";

const images1 = [ach1, ach2, ach3];
const images2 = [au1, au2, nt25];

function Aboutus() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> ABOUT US
                </span>
              </Fade>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              <span className="text-[#ffde59]">Fast Tracking </span>the idea into reality with E-Cell ABESEC
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              At E-Cell ABESEC, our journey began with a simple but powerful idea: to fast track and nurture the ideas developing in the minds of young innovators. Frustrated by the complexities and limitations of existing ecosystems, we set out to create a vibrant platform that empowers students to collaborate effectively, streamline creative workflows, and turn concepts into thriving ventures.
            </p>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              With a team of passionate student leaders, developers, and project managers, we continuously refine our initiatives, host transformative workshops, and foster partnerships across institutions nationwide to build tomorrow's enterprises.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <AchievementCarousel images={images2} />
          </div>
        </div>

        <hr className="border-zinc-800" />

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col">
            <div
              style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
              className="rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <GiPolarStar aria-hidden="true" /> ACHIEVEMENTS
                </span>
              </Fade>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Highlight <span className="text-[#ffde59]">achievements</span> by the <span className="text-[#ffde59]">numbers</span>
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col bg-[#131412] border border-[#26250F] p-5 rounded-xl hover:border-[#ffde59]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-[#ffde59] mb-1">AIR 27 & 29</p>
                <h3 className="text-sm font-semibold text-white">National Entrepreneurship Challenge</h3>
                <p className="text-xs text-zinc-400 mt-1">IIT Bombay</p>
              </div>

              <div className="flex flex-col bg-[#131412] border border-[#26250F] p-5 rounded-xl hover:border-[#ffde59]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-[#ffde59] mb-1">AIR Rank 9</p>
                <h3 className="text-sm font-semibold text-white">Western Entrepreneurship Challenge</h3>
                <p className="text-xs text-zinc-400 mt-1">Regional Finals</p>
              </div>

              <div className="flex flex-col bg-[#131412] border border-[#26250F] p-5 rounded-xl hover:border-[#ffde59]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-[#ffde59] mb-1">20+</p>
                <h3 className="text-sm font-semibold text-white">MOUs with Premier Colleges</h3>
                <p className="text-xs text-zinc-400 mt-1">Pan-India Network</p>
              </div>

              <div className="flex flex-col bg-[#131412] border border-[#26250F] p-5 rounded-xl hover:border-[#ffde59]/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-bold text-[#ffde59] mb-1">20+</p>
                <h3 className="text-sm font-semibold text-white">Startups Incubated</h3>
                <p className="text-xs text-zinc-400 mt-1">Campus Incubation Ecosystem</p>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <AchievementCarousel images={images1} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;