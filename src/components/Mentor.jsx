import sir from '../assets/sir.png';
import { Fade } from 'react-awesome-reveal';

const Mentor = () => {
  return (
    <section className="text-white py-12 px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <Fade cascade>
          <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Mentor&apos;s Message
          </p>
        </Fade>
        <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold">Words from Our Faculty Mentor</h2>
      </div>

      {/* Message + Image Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Mentor Text */}
        <div
          className="rounded-2xl p-5 sm:p-8 shadow-lg border border-[#26250F] flex-1"
          style={{ backgroundColor: '#131412' }}
        >
          <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
            &ldquo;Entrepreneurship is key to job creation and economic growth - especially in countries like ours where nurturing startups and technopreneurs is urgent. At E-CELL, we foster an entrepreneurial mindset through student-led initiatives like E-Summit, workshops, meetups, and more. I invite all students to explore, engage, and innovate with us.&rdquo;
          </blockquote>
          <p className="mt-6 text-right font-semibold text-[#ffde59]">
            - Mahendra Kumar Gupta
            <br />
            <span className="text-xs sm:text-sm font-normal text-zinc-400">Faculty Mentor, E-Cell ABESEC</span>
          </p>
        </div>

        {/* Mentor Image */}
        <div className="flex-shrink-0">
          <img
            src={sir}
            alt="Faculty Mentor Mahendra Kumar Gupta"
            className="rounded-2xl w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 object-cover border-2 border-[#ffde59] shadow-xl shadow-yellow-500/10"
            width="240"
            height="240"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Mentor;
