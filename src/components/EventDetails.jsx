import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Share2, Star, Check } from "lucide-react";
import events, { createSlug } from "./EventsData";
import AchievementCarousel from "./AchievementCarousel";

const EventDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lookup event using standardized slug matching
  const event = events.find((e) => createSlug(e.title) === slug);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-32">
        <div className="text-center text-white p-8 sm:p-12 bg-[#131412] rounded-2xl shadow-xl border border-[#26250F] max-w-lg w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Event Not Found</h1>
          <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
            The event you&apos;re looking for doesn&apos;t exist or the link may have expired.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-2.5 bg-[#ffde59] text-black rounded-full hover:bg-[#ffed59] transition-all font-semibold text-sm shadow-[0_0_15px_rgba(255,222,89,0.3)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const descriptionSections = event.descriptionSections || {
    about: event.description || "Details for this event will be updated shortly.",
    vision: "",
    callout: "",
    review: "",
    conclusion: "",
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: `${event.title} | E-Cell ABESEC`,
      text: `Explore ${event.title} organized by E-Cell ABESEC:`,
      url: currentUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          fallbackCopy(currentUrl);
        }
      }
    } else {
      fallbackCopy(currentUrl);
    }
  };

  const fallbackCopy = (url) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          setCopied(false);
        });
    }
  };

  const displayImages = event.images && event.images.length > 0
    ? event.images
    : event.image
      ? [event.image]
      : [];

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          to="/events"
          className="inline-flex items-center text-sm font-semibold text-[#ffde59] hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          {/* Left Block: Info & CTAs */}
          <div
            className={`lg:col-span-5 bg-[#131412] border border-[#26250F] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between ${
              isLoaded ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-[#ffde59] font-semibold text-xs uppercase tracking-wider mb-3">
                FEATURED EVENT
              </p>

              <h1 className="text-xl min-[360px]:text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                {event.title}
              </h1>

              <div className="flex items-center text-zinc-400 text-xs sm:text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2 text-[#ffde59] flex-shrink-0" />
                <span>{event.date || "Date TBA"}</span>
              </div>

              {descriptionSections.about && (
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-4 leading-relaxed mb-6">
                  {descriptionSections.about}
                </p>
              )}
            </div>

            {/* Share Button */}
            <div className="pt-4 border-t border-zinc-900">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-colors text-xs sm:text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-green-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="mr-2 h-4 w-4 text-[#ffde59]" />
                    <span>Share Event</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Block: Image / Carousel */}
          <div
            className={`lg:col-span-7 bg-[#131412] border border-[#26250F] rounded-2xl overflow-hidden shadow-xl min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] flex items-center justify-center ${
              isLoaded ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            {displayImages.length > 1 ? (
              <div className="w-full h-full p-2">
                <AchievementCarousel images={displayImages} />
              </div>
            ) : (
              <img
                src={displayImages[0] || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full max-h-[420px] object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Content Tabs Section */}
        <div className="bg-[#131412] border border-[#26250F] rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-zinc-800">
            {[
              { id: "about", label: "About Event" },
              { id: "vision", label: "Our Vision" },
              { id: "review", label: "Event Review" },
              { id: "conclusion", label: "Conclusion" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "text-[#ffde59] border-[#ffde59] bg-white/5"
                    : "text-zinc-400 border-transparent hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-5 sm:p-7 md:p-10">
            {activeTab === "about" && (
              <div className="animate-fadeIn">
                <h2 className="text-xl sm:text-2xl font-bold text-[#ffde59] mb-4">
                  About The Event
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {descriptionSections.about || "Detailed narrative for this event is being prepared."}
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h2 className="text-xl sm:text-2xl font-bold text-[#ffde59] mb-4">
                  Our Vision
                </h2>
                {descriptionSections.callout && (
                  <div className="bg-black/40 p-4 sm:p-6 rounded-xl border-l-4 border-[#ffde59] mb-6">
                    <p className="text-zinc-300 text-sm sm:text-base italic leading-relaxed">
                      {descriptionSections.callout}
                    </p>
                  </div>
                )}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {descriptionSections.vision || "The event aimed to foster entrepreneurial passion, problem-solving confidence, and networking across student innovators."}
                </p>
              </div>
            )}

            {activeTab === "review" && (
              <div className="animate-fadeIn">
                <h2 className="text-xl sm:text-2xl font-bold text-[#ffde59] mb-4">
                  Event Highlights &amp; Review
                </h2>
                <div className="flex items-center mb-6">
                  <div className="flex text-[#ffde59]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-current mr-1"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-zinc-300 text-xs sm:text-sm font-medium">
                    Premier Student Experience
                  </span>
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {descriptionSections.review || "Participants and mentors engaged in high-impact discussions and knowledge-sharing throughout the session."}
                </p>
              </div>
            )}

            {activeTab === "conclusion" && (
              <div className="animate-fadeIn">
                <h2 className="text-xl sm:text-2xl font-bold text-[#ffde59] mb-4">
                  Conclusion &amp; Outlook
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {descriptionSections.conclusion || "As E-Cell ABESEC continues to grow, we remain dedicated to organizing more transformative experiences for aspiring founders."}
                </p>
                <div className="mt-8 p-5 bg-black/50 rounded-xl border border-zinc-800">
                  <p className="text-white text-sm font-medium">
                    <span className="text-[#ffde59] font-bold">Stay connected:</span> Follow our official handles for announcements regarding the next edition!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
