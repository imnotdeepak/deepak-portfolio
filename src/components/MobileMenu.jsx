export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-8">
        {["home", "about", "projects", "contact"].map((link, i) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold capitalize transition-all duration-300
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              text-white hover:text-violet-400`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
