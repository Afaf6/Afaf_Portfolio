import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import { featuredProject, projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle>Things I’ve made, and loved making</SectionTitle>
      <FeaturedProject project={featuredProject} />
      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
