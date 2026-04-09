type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-[#efc77d]/45 bg-[#efc77d]/14 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#f2debb]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-[#d8ceb8] md:text-lg">{description}</p> : null}
    </div>
  );
}
