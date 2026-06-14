/**
 * Merkmonogram "R" — geometrische interpretatie van het logo.
 * Erft de kleur via `currentColor`, dus werkt op licht én donker.
 *
 * Vervang dit desgewenst door je officiële export: zet die in
 * /public/logo/monogram.svg en gebruik <img> of pas dit component aan.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={11}
      strokeLinecap="square"
      strokeLinejoin="miter"
      role="img"
      aria-label="Rinse Bommerson monogram"
    >
      {/* stam */}
      <path d="M25 15 V85" />
      {/* boog */}
      <path d="M25 15 H53 A19 19 0 0 1 53 53 H25" />
      {/* poot */}
      <path d="M44 53 L75 85" />
      {/* signatuur-basisbalk */}
      <path d="M25 85 H82" />
    </svg>
  );
}
