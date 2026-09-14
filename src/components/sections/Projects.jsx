import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeading } from "../SectionHeading.jsx";

const projects = [
  {
    title: "Lime Messenger",
    description: "A messaging app that allows you to send messages in real time.",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Socket.io"],
    github: "https://github.com/imnotdeepak/lime-messenger",
    live: "https://lime-dyg4y.sevalla.app",
  },
  {
    title: "Signalist",
    description: "An up-to-date stock market tracker with real-time data, alerts, and performance insights.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Finnhub API", "MongoDB", "Inngest"],
    github: "https://github.com/imnotdeepak/Signalist",
    live: "https://signalist-six.vercel.app/",
  },
  {
    title: "Pomo",
    description: "A pomodoro timer web app with task management, state switching and historic data.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "GSAP"],
    github: "https://github.com/imnotdeepak/pomo",
    live: "https://pomo-six-umber.vercel.app",
  },
  {
    title: "RecorderFlix",
    description: "A screen recording app that lets you record your screen and share it with others.",
    tech: ["Next.js", "TypeScript", "Xata", "Bunny.net", "Drizzle"],
    github: "https://github.com/imnotdeepak/screen-recording",
    live: "https://recorder-flix.vercel.app/sign-in",
  },
  {
    title: "MacBook Landing Page",
    description: "A MacBook landing page with smooth 3D animations and full responsiveness.",
    tech: ["React", "GSAP", "Three.js"],
    github: "https://github.com/imnotdeepak/macbook-landing-page",
    live: "https://macbook-alpha.vercel.app",
  },
  {
    title: "Locked In",
    description: "A life tracker that keeps track of your busy day and productivity habits.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    github: "https://github.com/imnotdeepak/Locked-In",
    live: "https://locked-in-theta.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-24 px-6 sm:px-10 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeading
            index="02"
            title="Projects"
            subtitle="A selection of things I've built."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col border border-white/12 hover-lift hover:border-[var(--accent)]/60"
              >
                <div className="p-5 flex flex-col flex-1">
                  <p className="mono-label mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-base font-semibold text-white mb-2 font-mono group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1 font-mono">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-white/12 text-xs font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label hover:text-[var(--accent)] transition-colors"
                    >
                      <span className="prompt-mark">[/&gt;]</span> CODE
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label hover:text-[var(--accent)] transition-colors"
                    >
                      <span className="prompt-mark">[/&gt;]</span> LIVE
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
