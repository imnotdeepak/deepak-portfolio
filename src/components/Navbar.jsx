import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] md:w-auto">
      <div className="flex items-center justify-between md:justify-start md:gap-10 bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <a
          href="#home"
          className="font-mono text-sm font-bold text-white tracking-wide shrink-0"
        >
          deepak.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {["about", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};
