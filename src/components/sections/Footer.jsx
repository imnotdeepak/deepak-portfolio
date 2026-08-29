import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  const links = [
    { label: "Home", href: "#home", external: false },
    { label: "Contact", href: "#contact", external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deepakkolli051", external: true },
    { label: "GitHub", href: "https://github.com/imnotdeepak", external: true },
    { label: "Resume", href: "/Deepak_Kolli_FE_Resume.pdf", external: true },
  ];

  return (
    <footer className="border-t border-white/8 bg-black py-10">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
          <span className="font-mono text-sm font-bold text-white/80 tracking-wide">
            deepak.
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Deepak Kolli
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
