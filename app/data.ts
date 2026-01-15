type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

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

export const PROJECTS: Project[] = [
  {
    name: 'DocBot',
    description:
      'Python, Docker, Slack, S3, Lambda, OpenAI, GitHub Actions (2025)\n\nDeveloped an LLM-powered chatbot for internal teams to query the codebase directly on Slack, reducing developer support requests and saving engineering time. Orchestrated AWS Lambda functions to listen to Slack channels, auto-generate documentation on new releases, and answer questions in a fully serverless manner.',
    link: '',
    video: '',
    id: 'docbot',
  },
  {
    name: 'LineGuard',
    description:
      'Python, Docker, FastAPI, GitHub Actions, Fargate, Lambda, Cognito, Redshift, DynamoDB (2024)\n\nBuilt a self-service predictive maintenance solution for factory users to create AI models with best-fit preprocessing and modeling techniques, requiring no technical knowledge. Developed a cost-efficient MLOps framework with retraining, user authentication, experiment tracking, and model management, as an affordable alternative to remote-hosted MLflow.',
    link: '',
    video: '',
    id: 'lineguard',
  },
  {
    name: 'FaultPrognosis',
    description:
      'Python, MLflow (2024)\n\nDeveloped a time-series forecasting model using XGBoost, with MLOps integration for model tracking and management, and AI explainability for transparent forecasting outcomes.',
    link: '',
    video: '',
    id: 'faultprognosis',
  },
  {
    name: 'PatternForge',
    description:
      'Python, Docker, Apache Kafka, S3, Redshift, Lambda, Fargate (2023)\n\nTransformed an unsupervised problem into a supervised one using rule-based labeling on big data to detect errors in refrigerator tests, informing operators via Power BI dashboard. Nominated for IDC Cooling Awards by BSH. Performed hybrid cloud migration for on-prem BSH SQL DB with a robust, secure data pipeline, doubling performance.',
    link: '',
    video: '',
    id: 'patternforge',
  },
  {
    name: 'BakeSpectra',
    description:
      'Python, Streamlit, FastAPI (2023)\n\nEnabled users to upload baked product images and create customized SVM models based on color distributions, all via a user-friendly web app for streamlined quality evaluations.',
    link: '',
    video: '',
    id: 'bakespectra',
  },
  {
    name: 'LeakTrack',
    description:
      'Python, Docker, PyTorch, Fargate, Redshift, EventBridge (2022)\n\nBuilt an autoencoder model that retrains itself regularly on the cloud to inform line operators about air leaks in machines. Rolled out to all BSH factories globally, resulting in a 10% decrease in unplanned downtime.',
    link: '',
    video: '',
    id: 'leaktrack',
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
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
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
