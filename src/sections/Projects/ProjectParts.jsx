export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}

export function Links({ items }) {
  return (
    <div className="links">
      {items.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
    </div>
  );
}

export function Cover({ emojis, variant }) {
  return (
    <div className={`cover g${variant}`}>
      {emojis.map((e) => <span key={e}>{e}</span>)}
    </div>
  );
}
