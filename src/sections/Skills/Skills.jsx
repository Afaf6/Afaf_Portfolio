import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Reveal from '../../components/Reveal/Reveal';
import { skillGroups } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle>Tools I love building with</SectionTitle>
      <div className="bands">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} index={i} className="band">
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item, j) => (
                <Reveal as="span" key={item} kind="pop" index={j} className="chip">{item}</Reveal>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
