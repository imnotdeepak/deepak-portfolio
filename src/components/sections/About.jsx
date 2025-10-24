import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "GSAP",
    "Three.js",
    "Framer Motion",
  ];
  const backendSkills = [
    "Python",
    "C/C++/C#",
    "Node.js",
    "MongoDB",
    "Supabase",
    "PostgreSQL",
    "Express.js",
    "Prisma",
    "Drizzle",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-4 sm:p-6 md:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {" "}
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 
                                    hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {" "}
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-gray-300/20 
                                    hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {" "}
                🏫 Education{" "}
              </h3>
              <h2 className="text-sm sm:text-base">
                <strong> B.S. in Computer Science </strong> - UMass Lowell
                (2020-2024)
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-xs sm:text-sm mt-2">
                <li>
                  Relevant Coursework: AI, Data Mining, Machine Learning, Cloud
                  Computing, Computer Architecture, Computing I - IV
                </li>
              </ul>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {" "}
                💼 Work Experience{" "}
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Frontend Developer: Skinstric (Remote - Aug 2025)
                  </h4>
                  <p>
                    Programmed the website and utilized their AI API for
                    accurate skin analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Full Stack Engineering Intern: Fidelity Investments (Jun
                    2022 - Aug 2022)
                  </h4>
                  <p>
                    Developed a performance boosting feature for their main
                    website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
