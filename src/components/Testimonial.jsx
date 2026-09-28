import { GiPolarStar } from "react-icons/gi";
import dg from "../assets/dg.webp";
import founder from "../assets/founder.jpg";
import president from "../assets/president.webp";
import np from "../assets/np.jpg";
import sa from "../assets/sa.jpg";
import kaa from "../assets/kaa.webp";

const testimonialData = [
  {
    id: 1,
    description:
      "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting a drone show and reaching NEC 2023 finals. Guided by Mahendra Sir and Prabhansh Sir, it fostered growth, teamwork, and unforgettable memories.",
    imgSrc: dg,
    name: "Divyanshu Gupta",
    role: "Mentor",
  },
  {
    id: 2,
    description:
      "E-Cell ABESEC guided my growth from volunteer to Tech-Ops Coordinator, highlighted by launching the first live website, fostering professional and personal development under inspiring mentorship.",
    imgSrc: np,
    name: "Neelansh Pandey",
    role: "Former Tech-Ops Coordinator, E-CELL ABESEC",
  },
  {
    id: 3,
    description:
      "E-Cell ABESEC guided my growth from volunteer to Social Media Coordinator, fostering personal and professional development through impactful events and lasting relationships under inspiring mentorship.",
    imgSrc: sa,
    name: "Shoaib Ahmad",
    role: "Former Social Media Coordinator, E-CELL ABESEC",
  },
  {
    id: 4,
    description:
      "E-Cell ABESEC shaped my journey from volunteer to Vice President, boosting female participation by 30%, enhancing leadership skills, and building confidence while leaving a lasting legacy of personal and professional growth.",
    imgSrc: kaa,
    name: "Kamakshi Agarwal",
    role: "Former Vice President",
  },
  {
    id: 5,
    description:
      "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting an E-SUMMIT, reaching NEC 2023 finals, and achieving AIR 27. Guided by Mahendra Sir and Prabhansh Sir, it fostered growth and teamwork.",
    imgSrc: president,
    name: "Yash Mishra",
    role: "Former NEC Lead and President, E-CELL ABESEC",
  },
  {
    id: 6,
    description:
      "Founding E-CELL ABESEC was a journey of vision, perseverance, and teamwork. With Mahendra Sir's guidance, we built a platform to foster innovation and inspire future entrepreneurs.",
    imgSrc: founder,
    name: "Prabhansh Tripathi",
    role: "Founder",
  },
];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className="bg-[#141412] rounded-xl p-5 sm:p-6 flex flex-col justify-between text-left min-h-[220px] w-[300px] sm:w-[360px] border border-[#26250F] hover:border-[#ffde59] mx-3 my-2 shadow-lg transition-colors flex-shrink-0">
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">{body}</p>
      <div className="flex items-center space-x-3 mt-auto pt-2 border-t border-zinc-900">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border border-[#ffde59]"
          width="44"
          height="44"
          loading="lazy"
        />
        <div>
          <h3 className="text-sm font-semibold text-[#ffde59]">{name}</h3>
          <p className="text-xs text-zinc-400">{username}</p>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  const halfLength = Math.ceil(testimonialData.length / 2);
  const firstRow = testimonialData.slice(0, halfLength);
  const secondRow = testimonialData.slice(halfLength);

  return (
    <section className="w-full bg-black py-16 relative overflow-hidden">
      {/* Testimonials Section Header */}
      <div className="flex flex-col items-center mb-12 relative z-0 px-4 text-center">
        <div className="rounded-full px-4 py-1 mb-4 w-fit bg-[#141412] border border-[#26250F]">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#ffde59]">
            <GiPolarStar aria-hidden="true" /> TESTIMONIALS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-center text-white">
          Voices of <span className="text-[#ffde59]">Our Community</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* First Row (left to right) */}
        <div className="marquee-container">
          <div className="marquee">
            {[...firstRow, ...firstRow].map((item, index) => (
              <ReviewCard
                key={`first-row-${index}`}
                img={item.imgSrc}
                name={item.name}
                username={item.role}
                body={item.description}
              />
            ))}
          </div>
        </div>

        {/* Second Row (right to left) */}
        <div className="marquee-container mt-4">
          <div className="marquee reverse">
            {[...secondRow, ...secondRow].map((item, index) => (
              <ReviewCard
                key={`second-row-${index}`}
                img={item.imgSrc}
                name={item.name}
                username={item.role}
                body={item.description}
              />
            ))}
          </div>
        </div>

        {/* Gradient fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
}

export default Testimonial;
