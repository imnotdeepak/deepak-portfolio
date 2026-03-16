import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Lime Messenger",
    description:
      "A messaging app that allows you to send messages in real time.",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Socket.io"],
    github: "https://github.com/imnotdeepak/lime-messenger",
    live: "https://lime-dyg4y.sevalla.app",
    accent: "from-emerald-500/60 to-teal-500/60",
    border: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_4px_24px_rgba(16,185,129,0.15)]",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  {
    title: "Signalist",
    description:
      "An up-to-date stock market tracker with real-time data, alerts, and performance insights.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Finnhub API", "MongoDB", "Inngest"],
    github: "https://github.com/imnotdeepak/Signalist",
    live: "https://signalist-six.vercel.app/",
    accent: "from-blue-500/60 to-cyan-500/60",
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-[0_4px_24px_rgba(59,130,246,0.15)]",
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  {
    title: "Pomo",
    description:
      "A pomodoro timer web app with task management, state switching and historic data.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "GSAP"],
    github: "https://github.com/imnotdeepak/pomo",
    live: "https://pomo-six-umber.vercel.app",
    accent: "from-orange-500/60 to-amber-500/60",
    border: "hover:border-orange-500/40",
    glow: "hover:shadow-[0_4px_24px_rgba(249,115,22,0.15)]",
    tag: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  {
    title: "RecorderFlix",
    description:
      "A screen recording app that lets you record your screen and share it with others.",
    tech: ["Next.js", "TypeScript", "Xata", "Bunny.net", "Drizzle"],
    github: "https://github.com/imnotdeepak/screen-recording",
    live: "https://recorder-flix.vercel.app/sign-in",
    accent: "from-purple-500/60 to-violet-500/60",
    border: "hover:border-purple-500/40",
    glow: "hover:shadow-[0_4px_24px_rgba(168,85,247,0.15)]",
    tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
  {
    title: "MacBook Landing Page",
    description:
      "A MacBook landing page with smooth 3D animations and full responsiveness.",
    tech: ["React", "GSAP", "Three.js"],
    github: "https://github.com/imnotdeepak/macbook-landing-page",
    live: "https://macbook-alpha.vercel.app",
    accent: "from-zinc-400/50 to-slate-400/50",
    border: "hover:border-zinc-400/40",
    glow: "hover:shadow-[0_4px_24px_rgba(161,161,170,0.12)]",
    tag: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",
  },
  {
    title: "Locked In",
    description:
      "A life tracker that keeps track of your busy day and productivity habits.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    github: "https://github.com/imnotdeepak/Locked-In",
    live: "https://locked-in-theta.vercel.app",
    accent: "from-cyan-500/60 to-sky-500/60",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-[0_4px_24px_rgba(6,182,212,0.15)]",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            A selection of things I've built
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${project.border} ${project.glow}`}
              >
                {/* Colored top accent bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-full border text-xs ${project.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
