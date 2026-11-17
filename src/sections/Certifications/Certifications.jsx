import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Reveal from '../../components/Reveal/Reveal';
import { certifications } from '../../data/experience';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certs">
      <SectionTitle>Always learning</SectionTitle>
      <ul className="certs">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} kind="pop" index={i}>
            {c.title}
            <span>{c.by}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
