import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Testimonial from "../components/Testimonial";
import Aboutus from "../components/Aboutus";
import Volunteers from "../components/Volunteers";
import { teamData, sectionData } from "../components/DataTeam";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Teams() {
  const [currentTeam, setCurrentTeam] = useState("2025-2026");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const teamRoster = teamData[currentTeam] || {
    executives: [],
    mentors: [],
    alumni: [],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 pb-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <Fade triggerOnce cascade damping={0.15}>
            <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              THE LEADERSHIP &amp; DRIVING FORCE
            </p>

            <h1 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
              <span className="text-[#ffde59]">
                {sectionData.hero.title1.split(" ")[0]}
              </span>{" "}
              {sectionData.hero.title1.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              {sectionData.hero.title2.split("Environment")[0]}{" "}
              <span className="text-[#ffde59]">Environment</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {sectionData.hero.description}
            </p>
          </Fade>
        </div>
      </section>

      {/* About Us Narrative & Achievements */}
      <Aboutus />

      {/* Team Selection & Roster Section */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <SectionHeader
          badge={sectionData.team.badge}
          title={sectionData.team.title}
        />

        {/* Team Year Selection Navbar */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-10">
          <button
            type="button"
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              currentTeam === "2024-2025"
                ? "bg-[#ffde59] text-black shadow-[0_0_20px_rgba(255,222,89,0.3)]"
                : "bg-[#131412] text-zinc-300 border border-[#26250F] hover:border-zinc-600 hover:text-white"
            }`}
            onClick={() => setCurrentTeam("2024-2025")}
          >
            Team 2024-2025
          </button>
          <button
            type="button"
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              currentTeam === "2025-2026"
                ? "bg-[#ffde59] text-black shadow-[0_0_20px_rgba(255,222,89,0.3)]"
                : "bg-[#131412] text-zinc-300 border border-[#26250F] hover:border-zinc-600 hover:text-white"
            }`}
            onClick={() => setCurrentTeam("2025-2026")}
          >
            Team 2025-2026
          </button>
        </div>

        {/* Executive Team Members */}
        <TeamSection members={teamRoster.executives} />
      </section>

      {/* Mentors Section */}
      {teamRoster.mentors && teamRoster.mentors.length > 0 && (
        <section
          className={`py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeader
            badge={sectionData.mentors.badge}
            title={sectionData.mentors.title}
          />
          <TeamSection members={teamRoster.mentors} />
        </section>
      )}

      {/* Alumni Section */}
      {teamRoster.alumni && teamRoster.alumni.length > 0 && (
        <section
          className={`py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <SectionHeader
            badge={sectionData.alumni.badge}
            title={sectionData.alumni.title}
          />
          <TeamSection members={teamRoster.alumni} />
        </section>
      )}

      {/* Volunteers Section with Role Filtering */}
      <Volunteers currentTeam={currentTeam} />

      {/* Community Testimonials */}
      <Testimonial />
    </div>
  );
}

export default Teams;

export const TeamSection = ({ members }) => {
  if (!members || members.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <TeamMemberCard key={`${member.name}-${index}`} member={member} />
      ))}
    </div>
  );
};

export const SectionHeader = ({ badge, title }) => {
  return (
    <div className="text-center mb-8">
      {badge && (
        <Fade triggerOnce>
          <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            {badge}
          </p>
        </Fade>
      )}
      <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title.split(" ").map((word, index) =>
          word === "Team" || word === "Mentors" || word === "Alumni" ? (
            <span key={index} className="text-[#ffde59]">
              {word}{" "}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </h2>
    </div>
  );
};

export const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-[#131412] border border-[#26250F] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between items-center text-center shadow-lg hover:border-[#ffde59]/50 transition-all duration-300">
      <div className="flex flex-col items-center">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="mb-4 rounded-full w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover border-2 border-[#ffde59]/40 aspect-square shadow-md"
          loading="lazy"
        />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{member.name}</h3>
        <p className="text-[#ffde59] text-xs sm:text-sm font-semibold mt-1">{member.role}</p>
        {member.description && (
          <p className="text-zinc-400 mt-3 text-xs sm:text-sm leading-relaxed max-w-xs">
            {member.description}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-3 mt-6">
        {member.instagram && (
          <a
            target="_blank"
            href={member.instagram}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-[#ffde59] flex items-center justify-center text-lg hover:bg-[#ffde59] hover:text-black hover:scale-105 transition-all"
            rel="noopener noreferrer"
            aria-label={`${member.name} Instagram`}
          >
            <FaInstagram aria-hidden="true" />
          </a>
        )}
        {member.linkedin && (
          <a
            target="_blank"
            href={member.linkedin}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-[#ffde59] flex items-center justify-center text-lg hover:bg-[#ffde59] hover:text-black hover:scale-105 transition-all"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
          >
            <PiLinkedinLogoBold aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};
