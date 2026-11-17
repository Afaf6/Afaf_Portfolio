import Reveal from '../../components/Reveal/Reveal';
import { Tags, Links, Cover } from './ProjectParts';

export default function FeaturedProject({ project }) {
  return (
    <Reveal as="article" tilt className="feat">
      <div className="txt">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Tags items={project.stack} />
        <Links items={project.links} />
      </div>
      <Cover emojis={project.cover} variant={2} />
    </Reveal>
  );
}
