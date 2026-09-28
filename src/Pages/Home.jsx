import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { GiPolarStar } from "react-icons/gi";
import Activities from '../components/Activities';
import Testimonial from '../components/Testimonial';
import Networking from '../components/Networking';
import Mentor from '../components/Mentor';
import Idea from '../components/Idea';

function Home() {
  const [heroEmail, setHeroEmail] = useState('');

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const email = heroEmail.trim();
    if (!email) return;
    window.location.href = `mailto:ecell@abes.ac.in?subject=Connection%20Request%20from%20${encodeURIComponent(email)}&body=Hello%20E-Cell%20ABESEC,%0A%0AI%20am%20interested%20in%20connecting%20with%20your%20entrepreneurship%20initiatives.%20My%20email%20is%20${encodeURIComponent(email)}.`;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        {/* Subtle background ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#ffde59]/10 rounded-full blur-[100px] pointer-events-none -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div
            style={{ backgroundColor: '#141412', color: '#FFDE59', border: '1px solid #26250F' }}
            className="rounded-full px-4 py-1.5 mb-6 shadow-sm inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Fade triggerOnce>
              <span className="flex items-center gap-2">
                <GiPolarStar aria-hidden="true" /> From Ideas to Imprint
              </span>
            </Fade>
          </div>

          {/* Heading */}
          <Fade triggerOnce cascade damping={0.15}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 leading-tight">
              <span className="text-white">Welcome </span>
              <span className="text-[#FFDE59]">To</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ffde59] tracking-tight mb-4 leading-tight">
              Entrepreneurship Cell
            </h2>
            <p className="text-zinc-400 text-sm sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
              ABES Engineering College, Ghaziabad
            </p>
          </Fade>

          {/* CTA Group: Primary Email Connect & Secondary Action Links */}
          <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-4">
            <form
              onSubmit={handleHeroSubmit}
              className="w-full flex flex-col sm:flex-row items-center gap-2 bg-[#0D0D0D] border border-[#26250F] p-2 rounded-2xl sm:rounded-full shadow-[0_0_50px_-15px_rgba(255,222,89,0.3)] transition-all hover:border-[#ffde59]/50"
            >
              <label htmlFor="hero-email" className="sr-only">Your email address</label>
              <input
                id="hero-email"
                type="email"
                required
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                placeholder="your-email@example.com"
                className="w-full sm:flex-1 bg-transparent px-4 py-2.5 text-sm text-white focus:outline-none placeholder:text-zinc-500 rounded-full"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ffde59] hover:bg-[#ffed59] text-black font-semibold text-sm px-6 py-2.5 rounded-xl sm:rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,222,89,0.4)] whitespace-nowrap"
              >
                Let&apos;s Connect
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm">
              <Link
                to="/events"
                className="px-4 py-2 rounded-full border border-zinc-700 hover:border-[#ffde59] text-zinc-300 hover:text-white transition-all duration-200 hover:bg-white/5"
              >
                Explore Events &rarr;
              </Link>
              <Link
                to="/teams"
                className="px-4 py-2 rounded-full border border-zinc-700 hover:border-[#ffde59] text-zinc-300 hover:text-white transition-all duration-200 hover:bg-white/5"
              >
                Meet the Team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are / Mission Section */}
      <section className="text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div
            style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
            className="rounded-full px-4 py-1 mb-4 w-fit mx-auto"
          >
            <Fade triggerOnce>
              <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                <GiPolarStar aria-hidden="true" /> ABOUT US
              </span>
            </Fade>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Who We Are</h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            At the Entrepreneurship Cell (E-Cell) of ABES Engineering College, we&apos;re a vibrant community of student innovators driven by curiosity, ambition, and a shared passion for turning ideas into impact. Founded and run entirely by students, our core belief is that entrepreneurship isn&apos;t just a career&mdash;it&apos;s a way of thinking that empowers individuals to identify opportunities, take thoughtful risks, and continuously learn. From casual brainstorming sessions in campus cafes to organizing large-scale pitching events, we grow stronger together.
          </p>
        </div>

        {/* Mindset / Mission / Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Slide direction="left" triggerOnce>
            <div
              className="p-6 rounded-2xl h-full border border-[#26250F] hover:border-[#ffde59]/50 transition-all duration-300 flex flex-col justify-start"
              style={{ backgroundColor: '#131412' }}
            >
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="mr-3 w-8 h-8 flex-shrink-0"
                  fill="#ffde59"
                  aria-hidden="true"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Mindset</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Creating a dynamic ecosystem where young minds challenge limits and build tomorrow&apos;s enterprises.
              </p>
            </div>
          </Slide>

          <Slide direction="up" triggerOnce>
            <div
              className="p-6 rounded-2xl h-full border border-[#26250F] hover:border-[#ffde59]/50 transition-all duration-300 flex flex-col justify-start"
              style={{ backgroundColor: '#131412' }}
            >
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-3 w-8 h-8 flex-shrink-0"
                  fill="#ffde59"
                  aria-hidden="true"
                >
                  <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Inspire, empower, and equip students with mentorship and resources to pursue their entrepreneurial dreams.
              </p>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div
              className="p-6 rounded-2xl h-full border border-[#26250F] hover:border-[#ffde59]/50 transition-all duration-300 flex flex-col justify-start"
              style={{ backgroundColor: '#131412' }}
            >
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="mr-3 w-8 h-8 flex-shrink-0"
                  fill="#ffde59"
                  aria-hidden="true"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Create an inclusive, high-energy startup culture on campus and connect students to the national venture ecosystem.
              </p>
            </div>
          </Slide>
        </div>
      </section>

      {/* Faculty Mentor */}
      <Mentor />

      {/* Flagship Activities */}
      <Activities />

      {/* Strategic Networking */}
      <Networking />

      {/* Testimonials */}
      <Testimonial />

      {/* Connect Idea Prompt */}
      <Idea />
    </div>
  );
}

export default Home;
