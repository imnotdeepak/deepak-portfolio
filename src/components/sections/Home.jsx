export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center z-10 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent leading-tight">
          Hi, I'm Deepak
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto px-4">
          I'm a full stack developer who likes creating web applications! From
          exceptional UIs to unbeatable performance, I only strive for the best.{" "}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
          <a
            href="https://github.com/imnotdeepak"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10 text-center"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/deepakkolli051"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10 text-center"
          >
            Linkedin
          </a>
          <a
            href="/Deepak_Kolli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10 text-center"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10 text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
