import { RevealOnScroll } from "../RevealOnScroll.jsx";

const allSkills = [
  // Frontend — green
  { name: "React",         color: "text-emerald-400 border-emerald-500/20" },
  { name: "Next.js",       color: "text-emerald-400 border-emerald-500/20" },
  { name: "TailwindCSS",   color: "text-emerald-400 border-emerald-500/20" },
  { name: "Three.js",      color: "text-emerald-400 border-emerald-500/20" },
  { name: "GSAP",          color: "text-emerald-400 border-emerald-500/20" },
  { name: "Framer Motion", color: "text-emerald-400 border-emerald-500/20" },
  { name: "HTML",          color: "text-emerald-400 border-emerald-500/20" },
  { name: "CSS",           color: "text-emerald-400 border-emerald-500/20" },
  // Languages — red
  { name: "TypeScript",    color: "text-red-400 border-red-500/20" },
  { name: "JavaScript",    color: "text-red-400 border-red-500/20" },
  { name: "Python",        color: "text-red-400 border-red-500/20" },
  { name: "C/C++",         color: "text-red-400 border-red-500/20" },
  { name: "Node.js",       color: "text-red-400 border-red-500/20" },
  { name: "Express.js",    color: "text-red-400 border-red-500/20" },
  // Databases — blue
  { name: "MongoDB",       color: "text-blue-400 border-blue-500/20" },
  { name: "PostgreSQL",    color: "text-blue-400 border-blue-500/20" },
  { name: "Supabase",      color: "text-blue-400 border-blue-500/20" },
  { name: "Prisma",        color: "text-blue-400 border-blue-500/20" },
  { name: "Drizzle",       color: "text-blue-400 border-blue-500/20" },
];

const experiences = [
    {
    role: "Founder / Full Stack Developer",
    company: "LycheeCorp",
    period: "Nov 2025 – Present",
    type: "Remote",
    description: "• Created Vita, a website where users can manage their entire life.\n• Created Noxa, an app that allows you to block screentime.",
  },
  {
    role: "Frontend Developer",
    company: "Skinstric",
    period: "Aug 2025",
    type: "Remote",
    description: "Built the website and integrated their AI API for accurate skin analysis.",
  },
  {
    role: "Full Stack Engineering Intern",
    company: "Fidelity Investments",
    period: "Jun – Aug 2022",
    type: "On-site",
    description: "Developed a performance-boosting feature deployed to their main production website.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto w-full">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <p className="text-gray-500 text-center max-w-lg mx-auto mb-12 text-sm leading-relaxed">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions across the full stack.
          </p>

          {/* Skills Marquee */}
          <div className="mb-14 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, black, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, black, transparent)" }} />

            <div className="flex w-max animate-marquee">
              {[...allSkills, ...allSkills].map((skill, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center mx-2.5 px-3.5 py-1.5 rounded-md border bg-white/4 text-xs font-medium whitespace-nowrap ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-xl mx-auto space-y-8">
            {/* Education */}
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest mb-3">Education</p>
              <div className="px-4 py-3 rounded-xl border border-white/8 bg-white/3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-xs">B.S. Computer Science · UMass Lowell</p>
                  <p className="text-gray-600 text-xs mt-0.5">AI · ML · Data Mining · Cloud · Architecture</p>
                </div>
                <span className="text-gray-600 text-xs shrink-0">2020 – 2024</span>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest mb-3">Experience</p>
              <div className="space-y-3">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/8 bg-white/3 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-white font-semibold text-sm leading-tight">{exp.role}</h4>
                      <span className="text-gray-600 text-xs shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">{exp.company} · {exp.type}</p>
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
