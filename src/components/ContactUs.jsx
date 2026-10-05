import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

// Custom Leaflet marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -38],
});

const contactChannels = [
  {
    id: "email",
    label: "Official Email",
    value: "ecell@abes.ac.in",
    href: "mailto:ecell@abes.ac.in",
    icon: AiOutlineMail,
    isExternal: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@ecell_abesec",
    href: "https://www.instagram.com/ecell_abesec",
    icon: AiOutlineInstagram,
    isExternal: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Channel",
    value: "Join Community Updates",
    href: "https://whatsapp.com/channel/0029VaEzRcf84Om7lps30D2F",
    icon: AiOutlineWhatsApp,
    isExternal: true,
  },
  {
    id: "youtube",
    label: "YouTube Channel",
    value: "@E-CELL_ABESEC",
    href: "https://www.youtube.com/@E-CELL_ABESEC",
    icon: AiOutlineYoutube,
    isExternal: true,
  },
];

function ContactCard({ item }) {
  const IconComponent = item.icon;
  return (
    <a
      id={`contact-link-${item.id}`}
      href={item.href}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      title={item.value}
      className="group w-full h-[72px] px-4 py-3 rounded-xl bg-black/40 border border-zinc-800 hover:border-[#ffde59]/60 hover:bg-[#ffde59]/5 transition-colors duration-150 ease-in-out flex items-center gap-3.5 box-border"
    >
      <div className="w-11 h-11 min-w-[44px] rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl text-[#ffde59] flex-shrink-0 transition-colors duration-150 group-hover:border-[#ffde59]/40">
        <IconComponent aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1 flex flex-col justify-center">
        <span className="text-xs text-zinc-400 font-medium truncate block leading-tight mb-1">
          {item.label}
        </span>
        <span className="text-sm font-semibold text-white group-hover:text-[#ffde59] transition-colors duration-150 truncate block leading-snug">
          {item.value}
        </span>
      </div>
    </a>
  );
}

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user begins typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email format.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message before sending.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const rawApiUrl = import.meta.env.VITE_API_URL;
      if (import.meta.env.PROD && !rawApiUrl) {
        console.warn(
          "[ContactUs] Warning: VITE_API_URL is not set at build time. Form submission may fail if backend is hosted on a different origin."
        );
      }
      const apiBaseUrl = (rawApiUrl || "").replace(/\/+$/, "");
      const response = await fetch(`${apiBaseUrl}/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          data.message || "Your message has been received! Our team will reach out soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to submit form. Please verify and try again or email us directly."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Network or server connection issue. Please check your connection and try again."
      );
    }
  };

  const position = [28.6341, 77.4456]; // Coordinates for ABES Engineering College, Ghaziabad

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Fade cascade triggerOnce>
          <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            CONTACT US
          </p>
        </Fade>
        <Fade triggerOnce>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Reach Us <span className="text-[#ffed59]">Here</span>
          </h1>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about upcoming events, mentorship, partnerships, or startup incubation? Send us a message or connect through our official channels.
          </p>
        </Fade>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Direct Info & Official Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#131412] border border-[#26250F] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-[#ffde59] mb-3">Get In Touch</h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Our student coordinators and faculty mentors are here to support your entrepreneurial ideas and collaboration requests.
            </p>

            <div className="flex flex-col gap-3.5">
              {contactChannels.map((channel) => (
                <ContactCard key={channel.id} item={channel} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#131412] border border-[#26250F] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Direct Message</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6">
            Fill in your details below and we will get back to you promptly.
          </p>

          {status === "success" ? (
            <div className="p-8 text-center bg-black/40 border border-green-500/40 rounded-xl space-y-4 animate-fadeIn">
              <FiCheckCircle className="w-12 h-12 text-green-400 mx-auto" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                {statusMessage}
              </p>
              <button
                id="contact-reset-button"
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 h-10 rounded-full bg-[#ffde59] text-black font-semibold text-sm hover:bg-[#ffed59] transition-colors duration-150 ease-in-out box-border"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {status === "error" && (
                <div
                  className="p-4 bg-red-950/40 border border-red-800 rounded-xl flex items-start gap-3 text-red-200 text-sm"
                  role="alert"
                >
                  <FiAlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold">Unable to submit message</p>
                    <p className="text-xs text-red-300 mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5 tracking-wide"
                >
                  Your Full Name <span className="text-[#ffde59]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ashish Kumar"
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                  className={`w-full p-3 rounded-xl bg-black/50 text-white border text-sm transition-colors duration-200 ease-in-out focus:outline-none ${
                    formErrors.name
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-[#ffde59]"
                  }`}
                />
                {formErrors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1.5">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5 tracking-wide"
                >
                  Email Address <span className="text-[#ffde59]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. yourname@gmail.com"
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                  className={`w-full p-3 rounded-xl bg-black/50 text-white border text-sm transition-colors duration-200 ease-in-out focus:outline-none ${
                    formErrors.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-[#ffde59]"
                  }`}
                />
                {formErrors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1.5">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-zinc-300 mb-1.5 tracking-wide"
                >
                  Message / Inquiry <span className="text-[#ffde59]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help? Share your inquiry or collaboration idea..."
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? "message-error" : undefined}
                  className={`w-full p-3 rounded-xl bg-black/50 text-white border text-sm transition-colors duration-200 ease-in-out focus:outline-none resize-y ${
                    formErrors.message
                      ? "border-red-500 focus:border-red-400"
                      : "border-zinc-800 focus:border-[#ffde59]"
                  }`}
                />
                {formErrors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1.5">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                id="contact-submit-button"
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-12 rounded-xl bg-[#ffde59] hover:bg-[#ffed59] text-black font-bold text-sm tracking-wide transition-colors duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 box-border shadow-[0_0_20px_rgba(255,222,89,0.2)]"
              >
                {status === "submitting" ? (
                  <>
                    <FiLoader className="w-4 h-4 animate-spin flex-shrink-0" aria-hidden="true" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Interactive Campus Map Section */}
      <div className="max-w-6xl mx-auto bg-[#131412] border border-[#26250F] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Our Location</h2>
          <p className="text-zinc-400 text-sm">
            ABES Engineering College, 19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009
          </p>
        </div>

        <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-zinc-800 z-0">
          <MapContainer
            center={position}
            zoom={15}
            className="w-full h-full"
            zoomControl={true}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="p-1 text-black font-sans">
                  <p className="font-bold text-sm">E-Cell ABESEC</p>
                  <p className="text-xs text-gray-700">ABES Engineering College, Ghaziabad</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
