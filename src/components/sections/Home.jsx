import { HeroMeshGradientBg } from "../ui/hero-mesh-gradient-bg";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <HeroMeshGradientBg
          colors={["#000000", "#0a1a00", "#4d7a00", "#a6ff00"]}
          distortion={0.8}
          swirl={0.6}
          speed={0.42}
          offsetX={0.08}
          veilOpacity="bg-black/50"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center gap-12 px-6 sm:px-10 py-24 sm:py-28">
        {/* Main heading */}
        <div className="flex flex-col">
          <h1 className="font-display text-[13vw] sm:text-[9vw] md:text-[7vw] leading-[0.95] tracking-tight animate-fade-up">
            Deepak
            <br />
            <span className="italic text-[var(--accent)] inline-block mt-2 sm:mt-3">Kolli</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-8 max-w-md font-mono animate-fade-up-d1">
            I build exceptional web applications — from pixel-perfect
            UIs to scalable backend systems.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 animate-fade-up-d2">
          <a
            href="/Deepak_Kolli_FE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label !text-black bg-[var(--accent)] px-5 py-3 hover:brightness-110 transition-all"
          >
            <span className="prompt-mark">[/&gt;]</span> RESUME
          </a>
          <a
            href="#contact"
            className="mono-label border border-white/20 px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="prompt-mark">[/&gt;]</span> CONTACT
          </a>
          <div className="flex gap-6 sm:ml-4">
            <a
              href="https://github.com/imnotdeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-[var(--accent)] hover:font-bold hover:underline underline-offset-4 transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/deepakkolli051"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-[var(--accent)] hover:font-bold hover:underline underline-offset-4 transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
