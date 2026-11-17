// cover = the three emojis floating on the project card.
export const featuredProject = {
  title: 'EGSE Satellite Telemetry Analysis Platform',
  description:
    'A ground-support platform where engineers define a satellite’s telemetry structure, decode raw telemetry files and monitor mission health in real time. Users configure subsystems, frames and parameters with CRC checks, timestamps and warning and alarm limits. The platform then decodes the data into engineering values for a live monitoring view, a historical explorer and a filterable data grid with export. It also includes role-based access, user management and an audit trail.',
  stack: ['React 19', 'Redux Toolkit', 'Vite', 'Chart.js', 'Bootstrap', 'Socket.IO', 'REST API (Node.js)'],
  links: [
    ['Live demo', 'https://eg-sa.vercel.app/'],
    ['GitHub', 'https://github.com/Afaf6/EgSA.git'],
  ],
  cover: ['🛰️', '📡', '✨'],
};

export const projects = [
  {
    title: 'Smart Virtual Physics Lab',
    kind: 'Interactive educational platform',
    wide: true,
    wip: true,
    description:
      'This project is still being built, and it matters a lot to me. The idea is a virtual lab where students run physics experiments by dragging and dropping components, so every learner can experiment safely and see how physics works. I contributed the drag-and-drop interactions with React Flow and reusable, responsive UI components.',
    stack: ['React.js', 'JavaScript', 'React Flow', 'HTML5', 'CSS3', 'REST APIs'],
    links: [['GitHub', 'https://github.com/Afaf6/Smart_Virtual_Physics_Lab.git']],
    cover: ['🧪', '⚛️', '💫'],
  },
  {
    title: 'FreshBite',
    kind: 'Restaurant POS and inventory management',
    wide: true,
    description:
      'A POS-style system that manages orders, checks ingredient availability before an order is accepted, and tracks payments and invoices. Interactive charts show sales and purchases, and transactions export to Excel as weekly or monthly reports.',
    stack: ['React', 'Bootstrap', 'React Router', 'Recharts', 'XLSX'],
    links: [
      ['Live site', 'https://restaurant-ypgb.vercel.app/'],
      ['GitHub', 'https://github.com/Afaf6/Restaurant.git'],
    ],
    cover: ['🍓', '🍽️', '📊'],
  },
  {
    title: 'Smart NoteBook',
    kind: 'Personal productivity and finance',
    description:
      'Notes, habit tracking, income, expenses and subscriptions in one place, with a dashboard that shows your remaining balance.',
    stack: ['React', 'Vite', 'CSS'],
    links: [
      ['Live site', 'https://smart-note-book-front-end.vercel.app/'],
      ['GitHub', 'https://github.com/Afaf6/Smart_NoteBook_Front-End.git'],
    ],
    cover: ['📓', '💸', '🌱'],
  },
  {
    title: 'Online Shopping Center',
    kind: 'E-commerce application',
    description:
      'A component-based shopping experience with product browsing, organized navigation, validated forms and state managed with Zustand.',
    stack: ['React', 'Zustand', 'React Router', 'Yup'],
    links: [
      ['Live site', 'https://finalproject-orcin-two.vercel.app/'],
      ['GitHub', 'https://github.com/Afaf6/Online-shopping-center-website.git'],
    ],
    cover: ['🛍️', '💳', '🎀'],
  },
  {
    title: 'SpaceTour',
    kind: 'Educational website',
    description:
      'A multi-page website that makes space science and astronomy easier to explore, with structured content and simple navigation.',
    stack: ['HTML5', 'CSS3'],
    links: [
      ['Live site', 'https://spacetour-educational.vercel.app/'],
      ['GitHub', 'https://github.com/Afaf6/SpaceTour-educational-website.git'],
    ],
    cover: ['🪐', '🌙', '⭐'],
  },
];
