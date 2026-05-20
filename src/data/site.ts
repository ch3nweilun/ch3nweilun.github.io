export const profile = {
  name: 'Your Name',
  role: 'Researcher in Recommender Systems, Large Language Models, and Data Mining',
  affiliation: 'Your Lab / University',
  location: 'City, Country',
  email: 'your.email@example.com',
  tagline: 'Building intelligent recommendation systems with language models and large-scale behavioral data.',
  summary:
    'I study how intelligent systems understand user behavior, mine large-scale data, and deliver trustworthy personalized recommendations.',
};

export const publications: Array<{
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  tags: string[];
  links: Record<string, string>;
}> = [];

export const projects: Array<{
  title: string;
  status: string;
  description: string;
  tags: string[];
  links: Record<string, string>;
}> = [];

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
