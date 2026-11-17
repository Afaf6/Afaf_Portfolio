import Reveal from '../Reveal/Reveal';
import './SectionTitle.css';

export default function SectionTitle({ children }) {
  return (
    <Reveal as="h2" kind="l">
      {children}
    </Reveal>
  );
}
