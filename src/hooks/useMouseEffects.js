import { useEffect } from 'react';

const GLYPHS = ['✦', '♡', '✿', '✧'];
const COLORS = ['var(--sage)', 'var(--sky)', 'var(--lilac)'];

// 1) Background shapes + hero bubbles drift toward the mouse (parallax).
// 2) A little trail of sparkles follows the cursor.
export default function useMouseEffects() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;

    let mx = 0, my = 0, tx = 0, ty = 0, lx = -99, ly = -99, n = 0, raf;
    const items = [...document.querySelectorAll('#fx .s, #fx .blob, .bub')];

    const onMove = (e) => {
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;

      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      if (dx * dx + dy * dy < 1600) return; // only every ~40px
      lx = e.clientX;
      ly = e.clientY;

      const s = document.createElement('span');
      s.className = 'tr';
      s.textContent = GLYPHS[n++ % GLYPHS.length];
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      s.style.color = COLORS[n % 3];
      s.style.setProperty('--tx', `${Math.random() * 60 - 30}px`);
      s.style.setProperty('--ty', `${-20 - Math.random() * 60}px`);
      document.body.appendChild(s);
      s.addEventListener('animationend', () => s.remove());
    };

    const frame = (t) => {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      items.forEach((el, i) => {
        const d = +el.dataset.d || 20;
        const x = mx * d * 2 + Math.sin(t / 2000 + i) * 12;
        const y = my * d * 2 + Math.cos(t / 2300 + i) * 12;
        el.style.transform = `translate(${x}px,${y}px) rotate(${Math.sin(t / 3000 + i) * 8}deg)`;
      });
      raf = requestAnimationFrame(frame);
    };

    addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(frame);
    return () => {
      removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
