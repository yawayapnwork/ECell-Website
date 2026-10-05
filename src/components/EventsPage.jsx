import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import events, { createSlug } from './EventsData';
import Idea from './Idea';

const extractYear = (dateStr) => {
  if (!dateStr) return 'Other';
  const match = dateStr.match(/20\d{2}|'\d{2}/);
  if (match) {
    let year = match[0];
    if (year.startsWith("'")) {
      year = `20${year.slice(1)}`;
    }
    return year;
  }
  return 'Other';
};

const EventCard = ({ event }) => {
  const slug = createSlug(event.title);
  const displayImage = event.image || event.imgSrc || "/placeholder.svg";

  return (
    <article
      className="group flex flex-col bg-[#131412] border border-[#26250F] rounded-2xl overflow-hidden shadow-lg hover:border-[#ffde59]/50 hover:shadow-yellow-500/5 transition-all duration-300"
      aria-label={`${event.title} card`}
    >
      {/* Aspect-Ratio Standardized Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={displayImage}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-[#ffde59] text-xs font-medium tracking-wide mb-2">
            {event.date || 'Date TBA'}
          </p>
          <h3 className="text-xl font-bold text-white group-hover:text-[#ffde59] transition-colors leading-snug line-clamp-2">
            {event.title}
          </h3>
          {event.descriptionSections?.about && (
            <p className="text-zinc-400 text-sm mt-2 line-clamp-3 leading-relaxed">
              {event.descriptionSections.about}
            </p>
          )}
        </div>

        {/* Standardized Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
          <Link
            to={`/events/${slug}`}
            className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#ffde59] transition-colors focus:outline-none focus-visible:underline"
            aria-label={`Read more about ${event.title}`}
          >
            <span>Read more</span>
            <span className="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const EventsPage = () => {
  const [selectedYear, setSelectedYear] = useState('All');

  // Reverse list so latest events appear at the top
  const sortedEvents = useMemo(() => {
    return [...events].reverse();
  }, []);

  // Compute available event years from real dates
  const availableYears = useMemo(() => {
    const years = new Set(sortedEvents.map(e => extractYear(e.date)));
    years.delete('Other');
    const sorted = Array.from(years).sort((a, b) => b.localeCompare(a));
    return ['All', ...sorted];
  }, [sortedEvents]);

  // Filter events according to active tab
  const filteredEvents = useMemo(() => {
    if (selectedYear === 'All') return sortedEvents;
    return sortedEvents.filter(e => extractYear(e.date) === selectedYear);
  }, [selectedYear, sortedEvents]);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <Fade triggerOnce>
            <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              FLAGSHIP INITIATIVES &amp; EXPERIENCES
            </p>
          </Fade>
          <h1 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Events at <span className="text-[#ffed59]">E-Cell ABESEC</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From premier speaker summits to high-energy business simulations, explore the milestones and events created by our student innovators.
          </p>
        </div>

        {/* Event Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 mb-10 sm:mb-12 max-w-3xl mx-auto">
          {availableYears.map((year) => {
            const count = year === 'All'
              ? sortedEvents.length
              : sortedEvents.filter(e => extractYear(e.date) === year).length;

            return (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-[#ffde59] text-black shadow-[0_0_15px_rgba(255,222,89,0.3)]'
                    : 'bg-[#131412] text-zinc-300 border border-[#26250F] hover:border-zinc-700 hover:text-white'
                }`}
              >
                {year === 'All' ? `All Events (${count})` : `${year} (${count})`}
              </button>
            );
          })}
        </div>

        {/* Standardized Events Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Connect CTA */}
      <Idea />
    </div>
  );
};

export default EventsPage;
