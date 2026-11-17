import './BackgroundFX.css';

const blobs = [
  { d: -30, style: { left: '-6%', top: '18%', background: 'var(--sage)' } },
  { d: 40, style: { right: '-8%', top: '55%', background: 'var(--sky)' } },
];
const shapes = [
  { glyph: '✿', d: 60, left: '6%', top: '42%', size: 54 },
  { glyph: '♡', d: -45, left: '88%', top: '16%', size: 40 },
  { glyph: '✦', d: 80, left: '78%', top: '78%', size: 60 },
  { glyph: '❀', d: -70, left: '20%', top: '84%', size: 46 },
  { glyph: '☾', d: 35, left: '50%', top: '48%', size: 34 },
];

// Decorative layer behind the page. Moves with the mouse (see hooks/useMouseEffects).
export default function BackgroundFX() {
  return (
    <div id="fx" aria-hidden="true">
      {blobs.map((b, i) => <i key={i} className="blob" data-d={b.d} style={b.style} />)}
      {shapes.map((s) => (
        <b key={s.glyph} className="s" data-d={s.d} style={{ left: s.left, top: s.top, fontSize: s.size }}>{s.glyph}</b>
      ))}
    </div>
  );
}
