import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      ref.current.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100}%`;
    };
    update();
    addEventListener('scroll', update, { passive: true });
    return () => removeEventListener('scroll', update);
  }, []);
  return <div id="bar" ref={ref} />;
}
