import './Navbar.css';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  return (
    <nav style={{ gridColumn: '1 / -1' }}>
      <a className="logo" href="#top">Afaf Tawfek</a>
      <ul>
        {links.map(([label, href]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
