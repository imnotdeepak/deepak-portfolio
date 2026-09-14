import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  const links = [
    { label: "Home", href: "#home", external: false },
    { label: "About", href: "#about", external: false },
    { label: "Projects", href: "#projects", external: false },
    { label: "Contact", href: "#contact", external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deepakkolli051", external: true },
    { label: "GitHub", href: "https://github.com/imnotdeepak", external: true },
    { label: "Resume", href: "/Deepak_Kolli_FE_Resume.pdf", external: true },
  ];

  return (
    <footer className="border-t border-white/12 py-10 px-6 sm:px-10">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <span className="font-mono text-sm font-bold text-white/80 tracking-wide">
            <span className="prompt-mark">[/&gt;]</span> deepak
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mono-label hover:text-[var(--accent)] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs font-mono">
            © {new Date().getFullYear()} Deepak Kolli
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
