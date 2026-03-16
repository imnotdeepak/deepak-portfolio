import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Have a project in mind? Let's talk.
          </p>

          <form
            className="space-y-4 bg-white/3 border border-white/8 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm transition focus:outline-none focus:border-white/25 focus:bg-white/6 placeholder-gray-600"
                placeholder="Your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm transition focus:outline-none focus:border-white/25 focus:bg-white/6 placeholder-gray-600"
                placeholder="your@email.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm transition focus:outline-none focus:border-white/25 focus:bg-white/6 resize-none placeholder-gray-600"
                placeholder="What's on your mind?"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white/20 text-white border border-white/30 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/28 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
