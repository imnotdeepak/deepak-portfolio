export const SectionHeading = ({ index, title, subtitle }) => {
  return (
    <div className="mb-14">
      <p className="mono-label mb-3">/ {index}</p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl title-accent">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 text-sm mt-4 max-w-md font-mono">{subtitle}</p>
      )}
    </div>
  );
};
