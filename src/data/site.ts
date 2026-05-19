export const profile = {
  name: 'Your Name',
  role: 'Researcher in Recommender Systems, Large Language Models, and Data Mining',
  affiliation: 'Your Lab / University',
  location: 'City, Country',
  email: 'your.email@example.com',
  tagline: 'Building intelligent recommendation systems with language models and large-scale behavioral data.',
  summary:
    'I study how intelligent systems understand user behavior, mine large-scale data, and deliver trustworthy personalized recommendations.',
  keywords: ['Recommender Systems', 'Large Language Models', 'Data Mining', 'User Modeling', 'Sequential Recommendation'],
};

export const researchAreas = [
  {
    title: 'Recommender Systems',
    eyebrow: 'Personalization',
    description:
      'Modeling user intent, sequential behavior, and item relationships for accurate and explainable recommendation.',
    methods: ['Sequential RecSys', 'Graph Learning', 'User Modeling'],
  },
  {
    title: 'Large Language Models',
    eyebrow: 'Reasoning & Knowledge',
    description:
      'Exploring how LLMs can enhance recommendation, representation learning, and data-driven decision systems.',
    methods: ['LLM4Rec', 'Prompting', 'Knowledge Augmentation'],
  },
  {
    title: 'Data Mining',
    eyebrow: 'Patterns at Scale',
    description:
      'Mining noisy, sparse, and high-dimensional interaction data to discover robust behavioral patterns.',
    methods: ['Behavior Mining', 'Evaluation', 'Representation Learning'],
  },
];

export const publications = [
  {
    title: 'Placeholder Paper: Language-Enhanced Sequential Recommendation',
    authors: 'Your Name, Collaborator A, Collaborator B',
    venue: 'Conference / Journal Name',
    year: '2026',
    abstract:
      'A replaceable publication entry describing an LLM-enhanced method for sequential recommendation and user preference modeling.',
    tags: ['LLM4Rec', 'Sequential Recommendation'],
    links: { pdf: '#', code: '#', bibtex: '#', doi: '#', arxiv: '#' },
  },
  {
    title: 'Placeholder Paper: Mining User Intent from Large-Scale Interaction Logs',
    authors: 'Your Name, Collaborator C',
    venue: 'Workshop / Symposium Name',
    year: '2025',
    abstract:
      'A replaceable publication entry about mining behavioral signals for personalized ranking and retrieval.',
    tags: ['Data Mining', 'User Modeling'],
    links: { pdf: '#', code: '#', bibtex: '#', doi: '#', arxiv: '#' },
  },
];

export const projects = [
  {
    title: 'LLM-Enhanced Recommendation Toolkit',
    status: 'Research Prototype',
    description:
      'A modular experimental framework for evaluating language-model signals in recommendation pipelines.',
    tags: ['PyTorch', 'LLM', 'RecSys'],
    links: { github: '#', demo: '#', paper: '#' },
  },
  {
    title: 'Behavior Mining Dashboard',
    status: 'In Progress',
    description:
      'Interactive analysis for user sequences, item transitions, and long-tail recommendation behavior.',
    tags: ['Data Mining', 'Visualization', 'Evaluation'],
    links: { github: '#', demo: '#', paper: '#' },
  },
];

export const cvGroups = [
  {
    title: 'Education',
    items: ['Ph.D. / M.S. / B.S. in Computer Science, Your University, 20XX-20XX'],
  },
  {
    title: 'Academic Service',
    items: ['Reviewer for Conference / Journal', 'Teaching assistant for Machine Learning / Data Mining'],
  },
  {
    title: 'Awards',
    items: ['Scholarship / Best Paper / Competition Award'],
  },
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'Google Scholar', href: '#' },
  { label: 'ORCID', href: '#' },
  { label: 'Semantic Scholar', href: '#' },
];

export const blogPosts = [
  {
    title: 'Notes on LLMs for Recommendation',
    date: '2026-05-19',
    summary: 'A replaceable research note about using language models in recommendation systems.',
    href: '#',
  },
  {
    title: 'Evaluating Sequential Recommendation Models',
    date: '2026-05-19',
    summary: 'A placeholder note about offline metrics, leakage, and reproducible RecSys experiments.',
    href: '#',
  },
];
