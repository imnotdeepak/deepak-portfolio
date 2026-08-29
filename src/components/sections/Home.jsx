import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[[255, 255, 255]]}
          dotSize={6}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,1)_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
      <div className="text-center w-full max-w-4xl">

        {/* Main heading */}
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="animate-gradient-text">Deepak</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-white text-base sm:text-lg mb-10 max-w-lg mx-auto animate-fade-up-d1 leading-relaxed">
          I build exceptional web applications — from pixel-perfect UIs to
          scalable backend systems.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center px-4 animate-fade-up-d2">
        <div className="relative flex flex-col sm:flex-row items-stretch w-full sm:w-fit overflow-hidden">
<a
            href="https://github.com/imnotdeepak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero w-full sm:w-auto py-3 px-7 font-semibold text-sm transition-all duration-200 hover:brightness-125 text-center"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deepakkolli051"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero w-full sm:w-auto py-3 px-7 font-semibold text-sm transition-all duration-200 hover:brightness-125 text-center"
          >
            LinkedIn
          </a>
          <a
            href="/Deepak_Kolli_FE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero w-full sm:w-auto py-3 px-7 font-semibold text-sm transition-all duration-200 hover:brightness-125 text-center"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="btn-hero w-full sm:w-auto py-3 px-7 font-semibold text-sm transition-all duration-200 hover:brightness-125 text-center"
          >
            Contact
          </a>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;
