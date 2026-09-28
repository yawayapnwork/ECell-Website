import { useState } from 'react';

function Idea() {
  const [email, setEmail] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (trimmed) {
      window.location.href = `mailto:ecell@abes.ac.in?subject=Collaboration%20Idea%20from%20${encodeURIComponent(trimmed)}&body=Hi%20E-Cell%20team,%0A%0AI%20would%20like%20to%20connect%20and%20discuss%20an%20idea.%20My%20email%20is%20${encodeURIComponent(trimmed)}.`;
    }
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center bg-[#0B0C0A] border border-[#26250F] rounded-2xl p-6 sm:p-10 md:p-14 shadow-2xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Have Ideas in mind? <span className="text-[#ffde59]">Let&apos;s connect</span> and discuss
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
          Let&apos;s brainstorm together and bring your ideas to life with engaging discussions and creative collaboration!
        </p>
        <form
          onSubmit={handleConnect}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto bg-[#0D0D0D] border border-[#26250F] rounded-xl sm:rounded-full p-2"
        >
          <label htmlFor="idea-email" className="sr-only">Your email address</label>
          <input
            id="idea-email"
            type="email"
            required
            placeholder="your-email@example.com"
            className="w-full sm:flex-1 bg-transparent px-4 py-2.5 text-sm text-white focus:outline-none placeholder:text-zinc-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#ffde59] hover:bg-[#ffed59] text-black font-semibold text-sm px-6 py-2.5 rounded-lg sm:rounded-full transition-colors whitespace-nowrap"
          >
            Let&apos;s Connect
          </button>
        </form>
      </div>
    </section>
  );
}

export default Idea;