import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="w-full mx-auto p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Lime Messenger
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A messaging app that allows you to send messages in real time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "MongoDB",
                  "Express",
                  "Node.js",
                  "TailwindCSS",
                  "Socket.io",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/lime-messenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://lime-dyg4y.sevalla.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>
            <div
              className="
              w-full mx-auto glass p-4 sm:p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col h-full flex flex-col h-full
            "
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">Signalist</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                An up-to-date stock market tracker that allows you to track
                stocks and their performance, with real-time data and alerts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Finnhub API",
                  "MongoDB",
                  "Inngest",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/Signalist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://signalist-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-4 sm:p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col h-full flex flex-col h-full
            "
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">Pomo</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A pomodoro timer web app with task management, state switching
                and historic data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "Supabase",
                  "TailwindCSS",
                  "GSAP",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/pomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://pomo-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-4 sm:p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col h-full
            "
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                RecorderFlix
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A screen recording app that allows you to record your screen and
                share it with others.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Xata", "Bunny.net", "Drizzle"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/screen-recording"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://recorder-flix.vercel.app/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-4 sm:p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col h-full
            "
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                MacBook Landing Page
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A MacBook landing page with proper responsiveness and animations
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "GSAP", "Three.js"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/macbook-landing-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://macbook-alpha.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-4 sm:p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all flex flex-col h-full
            "
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">Locked In</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                A life tracker that keeps track of your busy day
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Supabase", "TailwindCSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-300/10 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center gap-2 mt-auto">
                <a
                  href="https://github.com/imnotdeepak/Locked-In"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Project →
                </a>
                <a
                  href="https://locked-in-theta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  View Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
