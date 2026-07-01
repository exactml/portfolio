type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type LibraryBook = {
  title: string
  author: string
  year?: string
  note?: string
  id: string
}

export const LIBRARY_BOOKS: LibraryBook[] = [
  {
    title: 'Designing Machine Learning Systems',
    author: 'Chip Huyen',
    year: '2022',
    note: 'Practical ML systems design and production considerations.',
    id: 'book-designing-ml-systems',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    year: '2017',
    note: 'Scalable systems and data infrastructure.',
    id: 'book-ddia',
  },
  {
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
    author: 'Aurélien Géron',
    year: '2019',
    note: 'Applied ML workflows.',
    id: 'book-homl',
  },
  {
    title: 'Fundamentals of Software Architecture',
    author: 'Mark Richards, Neal Ford',
    year: '2020',
    note: 'Core principles and trade-offs in architecture.',
    id: 'book-fundamentals-software-architecture',
  },
  {
    title: 'System Design Interview',
    author: 'Alex Xu',
    year: '2020',
    note: 'Practical system design patterns and interviews.',
    id: 'book-system-design-interview',
  },
  {
    title: '37 Things One Architect Knows About IT Transformation',
    author: 'Gregor Hohpe',
    year: '2021',
    note: 'Guidance for large-scale transformation.',
    id: 'book-37-things-architect-knows',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'invent.ai',
    title: 'Machine Learning Engineer',
    start: '2025',
    end: 'Present',
    link: 'https://www.invent.ai/',
    id: 'work1',
  },
  {
    company: 'NTT Data',
    title: 'Machine Learning Engineer',
    start: '2023',
    end: '2025',
    link: 'https://www.nttdata.com/',
    id: 'work2',
  },
  {
    company: 'BSH Home Appliances Group',
    title: 'Machine Learning Engineer',
    start: '2022',
    end: '2025',
    link: 'https://www.bosch.com/',
    id: 'work3',
  },
  {
    company: 'AI Business School',
    title: 'Research Intern',
    start: '2021',
    end: '2022',
    link: 'https://www.aibusinessschool.com/',
    id: 'work4',
  },
  {
    company: 'Global AI Hub',
    title: 'Research Intern',
    start: '2020',
    end: '2021',
    link: 'https://www.globalaihub.com/',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Retiring 375 Lines of Jenkins: Migrating a Monorepo to GitHub Actions',
    description:
      'Replacing a monolithic Jenkins pipeline with event-driven GitHub Actions — content-addressed image caching, a CI→CD security gate, and ~500–780 hours/year of pipeline time reclaimed.',
    link: '/blog/jenkins-to-github-actions-migration',
    uid: 'blog-jenkins-to-github-actions-migration',
  },
  {
    title: 'One Codebase, Many Bots: Designing a Multi-Tenant Slack Assistant Framework',
    description:
      'How I built a team-agnostic framework for spinning up domain-specific Slack Q&A bots — one codebase, one deployment pattern, a config file per bot.',
    link: '/blog/multi-tenant-slack-bot-framework',
    uid: 'blog-multi-tenant-slack-bot-framework',
  },
  {
    title: 'MLflow LCM: Experiments, Runs, and Sharing Best Practices',
    description:
      'Practical guidance on experiment tracking, run hygiene, and lifecycle management with MLflow.',
    link: '/blog/mlflow-lcm-experiments',
    uid: 'blog-mlflow-lcm',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/exactml',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/eslemkarakas/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/eslem.karakas',
  },
]

export const EMAIL = 'eslem.karakas.tr@gmail.com'
