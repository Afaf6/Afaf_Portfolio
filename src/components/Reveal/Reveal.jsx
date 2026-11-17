import { useRef } from 'react';
import useReveal from '../../hooks/useReveal';
import useTilt from '../../hooks/useTilt';

// Wrap any element: <Reveal as="li" kind="pop" index={2}>…</Reveal>
export default function Reveal({ as: Tag = 'div', kind = '', index = 0, tilt = false, children, ...props }) {
  const ref = useRef(null);
  useReveal(ref, kind, index);
  useTilt(ref, tilt);
  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
}
