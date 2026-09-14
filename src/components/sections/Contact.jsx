import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading.jsx";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-24 px-6 sm:px-10 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-xl mx-auto w-full">
          <SectionHeading
            index="03"
            title="Contact"
            subtitle="Have a project in mind? Let's talk."
          />

          <form className="space-y-4 border border-white/12 p-6 sm:p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mono-label block mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-transparent border border-white/12 px-4 py-3 text-white text-sm font-mono transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] placeholder-gray-600"
                placeholder="Your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="mono-label block mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-transparent border border-white/12 px-4 py-3 text-white text-sm font-mono transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] placeholder-gray-600"
                placeholder="your@email.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="mono-label block mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-transparent border border-white/12 px-4 py-3 text-white text-sm font-mono transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] resize-none placeholder-gray-600"
                placeholder="What's on your mind?"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[var(--accent)] text-black py-3 px-6 font-mono font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {status === "sending" ? "SENDING..." : "[/>] SEND MESSAGE"}
            </button>

            <div role="status" aria-live="polite" className="min-h-[1.5rem]">
              {status === "success" && (
                <p className="mono-label !text-[var(--accent)]">Message sent — I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="mono-label !text-red-400">Something went wrong. Please try again or email me directly.</p>
              )}
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
