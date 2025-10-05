import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-600 bg-black text-gray-100 py-12">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-10 text-white text-center transform -translate-x-2">
              Quick Links
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/deepakkolli051"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/imnotdeepak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Github
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
