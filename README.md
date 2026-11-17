# Afaf Tawfek – Portfolio

React + Vite portfolio.

```bash
npm install
npm run dev      # development
npm run build    # production build in dist/
```

## Structure
- `src/data/` – all the text content (projects, skills, experience, certifications). Edit content here.
- `src/sections/` – one folder per page section (JSX + CSS).
- `src/components/` – shared pieces (Navbar, Reveal, SectionTitle, BackgroundFX, ScrollProgress).
- `src/hooks/` – scroll reveal, card tilt, mouse-following effects.
- `src/styles/` – `base.css` (colors, fonts, resets), `animations.css`, `responsive.css`.

Colors live in `:root` inside `src/styles/base.css` (`--sage` = pink, `--sky` = lavender, `--lilac` = peach).
