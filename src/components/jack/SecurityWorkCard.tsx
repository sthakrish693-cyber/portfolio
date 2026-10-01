interface SecurityWorkEntry {
  title: string;
  whatIDid: string;
  whatIFound: string;
  howIFixedOrDetectedIt: string;
  link?: string;
}

export function SecurityWorkCard({
  title,
  whatIDid,
  whatIFound,
  howIFixedOrDetectedIt,
  link,
}: SecurityWorkEntry) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-7 shadow-[0_0_40px_rgba(255,255,255,0.02)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-white sm:text-2xl">
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A1F]"
          >
            Link
          </a>
        ) : null}
      </div>

      <dl className="space-y-4 text-sm leading-relaxed text-[#D7E2EA] sm:text-base">
        <div>
          <dt className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
            What I did
          </dt>
          <dd>{whatIDid}</dd>
        </div>

        <div>
          <dt className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
            What I found
          </dt>
          <dd>{whatIFound}</dd>
        </div>

        <div>
          <dt className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
            How I fixed or detected it
          </dt>
          <dd>{howIFixedOrDetectedIt}</dd>
        </div>
      </dl>
    </article>
  );
}

export type { SecurityWorkEntry };
