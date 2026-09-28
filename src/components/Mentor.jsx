import { GiPolarStar } from "react-icons/gi";
import sir from '../assets/sir.png';
import { Fade } from 'react-awesome-reveal';

const Mentor = () => {
  return (
    <section className="text-white py-12 px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <div
          style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
          className="rounded-full px-4 py-1 mb-4 w-fit m-auto"
        >
          <Fade cascade>
            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
              <GiPolarStar aria-hidden="true" /> Mentor&apos;s Message
            </span>
          </Fade>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">Words from Our Faculty Mentor</h2>
      </div>

      {/* Message + Image Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-5xl mx-auto">
        {/* Mentor Text */}
        <div
          className="rounded-2xl p-6 sm:p-8 shadow-lg border border-[#26250F] flex-1"
          style={{ backgroundColor: '#131412' }}
        >
          <blockquote className="text-base sm:text-lg leading-relaxed text-zinc-300">
            &ldquo;Entrepreneurship is key to job creation and economic growth &mdash; especially in countries like ours where nurturing startups and technopreneurs is urgent. At E-CELL, we foster an entrepreneurial mindset through student-led initiatives like E-Summit, workshops, meetups, and more. I invite all students to explore, engage, and innovate with us.&rdquo;
          </blockquote>
          <p className="mt-6 text-right font-semibold text-[#ffde59]">
            &mdash; Mahendra Kumar Gupta
            <br />
            <span className="text-sm font-normal text-zinc-400">Faculty Mentor, E-Cell ABESEC</span>
          </p>
        </div>

        {/* Mentor Image */}
        <div className="flex-shrink-0">
          <img
            src={sir}
            alt="Faculty Mentor Mahendra Kumar Gupta"
            className="rounded-2xl w-52 h-52 sm:w-60 sm:h-60 object-cover border-2 border-[#ffde59] shadow-xl shadow-yellow-500/10"
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
