import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Reveal from '../../components/Reveal/Reveal';
import { experience } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle>Where I’ve grown</SectionTitle>
      <div className="tl">
        {experience.map((job, i) => (
          <Reveal as="article" key={job.title} kind="l" index={i}>
            <div className="when">{job.when}</div>
            <h3>{job.title}</h3>
            <ul>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
