import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { SectionHeading } from "../SectionHeading.jsx";

const skillGroups = [
  {
    label: "FRONTEND",
    skills: ["React", "Next.js", "TailwindCSS", "Three.js", "GSAP", "Framer Motion", "HTML", "CSS"],
  },
  {
    label: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Python", "C/C++", "Node.js", "Express.js"],
  },
  {
    label: "DATABASES",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Drizzle"],
  },
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
      className="min-h-screen flex items-center py-24 px-6 sm:px-10 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeading
            index="01"
            title="About"
            subtitle="Passionate developer with expertise in building scalable web applications and creating innovative solutions across the full stack."
          />

          {/* Skills grid, grouped by category */}
          <div className="mb-16">
            <p className="mono-label mb-4"><span className="prompt-mark">[/&gt;]</span> SKILLS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mono-label mb-3 tick">{group.label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="border border-white/12 px-3 py-2.5 text-sm font-mono hover-lift hover:border-[var(--accent)]/50"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-10">
            {/* Experience */}
            <div>
              <p className="mono-label mb-4 text-center"><span className="prompt-mark">[/&gt;]</span> EXPERIENCE</p>
              <div className="space-y-3">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 border border-white/12 hover-lift hover:border-[var(--accent)]/50"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-white font-semibold text-sm leading-tight">{exp.role}</h4>
                      <span className="text-gray-600 text-xs shrink-0 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2 font-mono">{exp.company} · {exp.type}</p>
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line font-mono">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="mono-label mb-4 text-center"><span className="prompt-mark">[/&gt;]</span> EDUCATION</p>
              <div className="border border-white/12 px-4 py-4">
                <p className="text-white font-semibold text-sm">B.S. Computer Science · UMass Lowell</p>
                <p className="text-gray-500 text-xs mt-1 font-mono">AI · ML · Data Mining · Cloud · Architecture</p>
                <p className="text-gray-600 text-xs mt-2 font-mono">2020 – 2024</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
