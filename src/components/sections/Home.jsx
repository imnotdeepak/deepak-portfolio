export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent leading-right">
          Hi, I'm Deepak
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full stack developer who likes creating web applications! From
          exceptional UIs to unbeatable performance, I only strive for the best.{" "}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/imnotdeepak"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/deepakkolli051"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10"
          >
            Linkedin
          </a>
          <a
            href="/Deepak_Kolli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="border border-white text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-400/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
