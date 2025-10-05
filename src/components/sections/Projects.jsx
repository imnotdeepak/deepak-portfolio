import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full mx-auto p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Lime Messenger</h3>
              <p className="text-gray-400 mb-4">
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
                    className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/lime-messenger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://lime-dyg4y.sevalla.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Website →
                </a>
              </div>
            </div>
            <div
              className="
              w-full mx-auto glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Signalist</h3>
              <p className="text-gray-400 mb-4">
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
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/Signalist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://signalist-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Pomo</h3>
              <p className="text-gray-400 mb-4">
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
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/pomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://pomo-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Locked In</h3>
              <p className="text-gray-400 mb-4">
                A life tracker that allows you to keep track of your busy
                schedule.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Supabase"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/Locked-In"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://locked-in-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Bar Website Landing Page
              </h3>
              <p className="text-gray-400 mb-4">
                A landing page for a bar with proper responsiveness and
                animations
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "GSAP", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/bar-sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://bar-sample.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Website →
                </a>
              </div>
            </div>

            <div
              className="
              w-full mx-auto glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">NFT Marketplace Demo</h3>
              <p className="text-gray-400 mb-4">
                A demo of an NFT marketplace that allows you to view NFTs and
                their details
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/imnotdeepak/nft-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://nft-marketplace-two-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
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
