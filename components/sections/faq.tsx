import { faq } from '@/lib/data';

/** Toegankelijke accordion op basis van native <details>/<summary> — geen JS nodig. */
export function Faq() {
  return (
    <div className="border-t border-inkt/10">
      {faq.map((item) => (
        <details key={item.q} className="group border-b border-inkt/10 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold leading-snug [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-2xl font-normal text-signaal transition-transform duration-300 ease-editorial group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-prose font-body text-base leading-relaxed text-inkt/70">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
