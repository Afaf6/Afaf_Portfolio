import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Reveal from '../../components/Reveal/Reveal';
import { contact } from '../../data/experience';
import './Footer.css';

export default function Footer() {
  const links = [
    [contact.email, `mailto:${contact.email}`],
    ['GitHub', contact.github],
    ['LinkedIn', contact.linkedin],
  ];
  return (
    <footer id="contact">
      <div className="wrap">
        <SectionTitle>Let’s make something lovely together.</SectionTitle>
        <div className="links">
          {links.map(([label, href], i) => (
            <Reveal as="a" key={href} kind="pop" index={i} href={href}>{label}</Reveal>
          ))}
        </div>
        <small>© 2026 Afaf Tawfek · Cairo, Egypt</small>
      </div>
    </footer>
  );
}
