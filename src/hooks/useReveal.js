import { useLayoutEffect } from 'react';

// Fades/slides an element in the first time it scrolls into view.
// kind: '' | 'l' (from left) | 'r' (from right) | 'pop'
export default function useReveal(ref, kind = '', index = 0) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('rv');
    if (kind) el.classList.add(kind);
    el.style.setProperty('--d', `${Math.min(index * 0.07, 0.8)}s`);

    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('in');
        io.disconnect();
        timer = setTimeout(() => el.classList.remove('rv'), 2200);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [ref, kind, index]);
}
