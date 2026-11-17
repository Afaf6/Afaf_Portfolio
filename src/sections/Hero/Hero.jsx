import Navbar from '../../components/Navbar/Navbar';
import Reveal from '../../components/Reveal/Reveal';
import { bubbles } from '../../data/skills';
import { contact } from '../../data/experience';
import './Hero.css';

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <Navbar />
        <div id="top">
          <Reveal as="h1" kind="pop" index={0}>
            Hi, I’m Afaf. I turn complex data into gentle, lovely interfaces.
          </Reveal>
          <Reveal as="p" index={1}>
            Front-End Developer from Cairo with a physics and education background. I build React applications for science, education and satellite data.
          </Reveal>
          <div className="btns">
            <Reveal as="a" kind="pop" index={0} className="btn main" href="#projects">See my projects</Reveal>
            <Reveal as="a" kind="pop" index={1} className="btn" href={`mailto:${contact.email}`}>Email me</Reveal>
          </div>
        </div>

        <div className="bubbles" aria-hidden="true">
          {bubbles.map((b) => (
            <div key={b.label} className="bub" data-d={b.d} style={{ left: b.x, top: b.y, width: b.size, height: b.size }}>
              <b style={{ background: `var(--${b.color})`, animationDelay: b.delay }}>{b.label}</b>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
