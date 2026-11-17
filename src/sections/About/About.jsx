import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Reveal from '../../components/Reveal/Reveal';
import { aboutParagraphs, facts } from '../../data/about';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <SectionTitle>From physics labs to React screens</SectionTitle>
      <div className="about">
        <div>
          {aboutParagraphs.map((text, i) => (
            <Reveal as="p" key={i} index={i}>{text}</Reveal>
          ))}
        </div>
        <div className="facts">
          {facts.map((f, i) => (
            <Reveal key={f.title} kind="r" index={i} className="fact">
              <b>{f.title}</b>
              <span>{f.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
