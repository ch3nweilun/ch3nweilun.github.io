export const profile = {
  name: 'Weilun Chen',
  role: 'Computer Science Student Exploring AI, Data Mining, and Intelligent Systems',
  affiliation: 'University of Chinese Academy of Sciences (UCAS)',
  location: 'Beijing, China',
  email: 'ch3nweilun@gmail.com',
  tagline: 'Exploring artificial intelligence, data mining, and intelligent systems.',
  summary:
    'I am interested in artificial intelligence, data mining, and intelligent systems, with a growing focus on recommender systems, large language models, and data minimization approaches that reduce unnecessary data collection while preserving useful model behavior.',
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
    items: ['B.S. in Computer Science, University of Chinese Academy of Sciences (UCAS), 2022-2026'],
  },
  {
    title: 'Interests',
    items: ['Artificial Intelligence', 'Data Mining', 'Recommender Systems', 'Large Language Models'],
  },
  {
    title: 'Skills',
    items: ['Python', 'PyTorch', 'Machine Learning', 'Data Analysis'],
  },
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: 'https://github.com/ch3nweilun' },
];
