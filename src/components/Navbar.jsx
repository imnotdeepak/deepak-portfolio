import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a
            href="#home"
            className="font-mono text-lg sm:text-xl font-bold text-white"
          >
            deepak
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
