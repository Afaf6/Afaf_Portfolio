import Reveal from '../../components/Reveal/Reveal';
import { Tags, Links, Cover } from './ProjectParts';

export default function ProjectCard({ project, index }) {
  const { title, kind, description, stack, links, cover, wide, wip } = project;
  const className = ['card', wide && 'wide', wip && 'wip'].filter(Boolean).join(' ');

  return (
    <Reveal
      as="article"
      tilt
      index={index}
      className={className}
      style={{ '--r': `${index % 2 ? 1.8 : -1.8}deg` }}
    >
      <Cover emojis={cover} variant={(index % 3) + 1} />
      {wip && <span className="badge">In progress</span>}
      <h3>{title}</h3>
      <div className="kind">{kind}</div>
      <p>{description}</p>
      <Tags items={stack} />
      <Links items={links} />
    </Reveal>
  );
}
