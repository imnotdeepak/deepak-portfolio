import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React",
    "Next.js",
  ];
  const backendSkills = [
    "Python",
    "C/C++/C#",
    "Node.js",
    "MongoDB",
    "Supabase",
    "PostgreSQL",
    "Prisma",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 
                                    hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <h2>
                <strong> B.S. in Computer Science </strong> - UMass Lowell
                (2020-2024)
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Relevant Coursework: AI, Data Mining, Machine Learning, Cloud
                  Computing, Computer Architecture, Computing I - IV
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Frontend Developer: Skinstric AI (Remote - Aug 2025)
                  </h4>
                  <p>
                    Programmed the website and utilized their AI API for
                    accurate skin analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
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
