import { PenTool, Code, Search, Zap, Smartphone } from "lucide-react";

export const specializations = [
  {
    icon: Code, // Pass the component itself
    title: 'User Research',
    description: 'Experienced in conducting user research, usability testing.',
  },
  {
    icon: Zap,
    title: 'Scalable Design Systems',
    description: 'Developing modular, reusable components and guidelines to ensure design consistency and efficiency across products and platforms.',
  },
  {
    icon: Smartphone,
    title: 'Visual Design',
    description: 'Creating visually compelling and cohesive designs that effectively communicate brand identity and enhance user experience.',
  },
  {
    icon: PenTool,
    title: 'Master Prototyping',
    description: 'Expertise in creating interactive prototypes that bring ideas to life and improve user testing and feedback.',
  },
];

export const feedback = [
  {
    name: 'Jane Doe',
    position: 'Product Manager',
    avatarUrl: 'https://placehold.co/40x40/6366f1/FFFFFF/png?text=JD',
    feedback: 'An exceptional designer with a keen eye for detail. Always delivers high-quality work on time and is a pleasure to work with.',
  },
  {
    name: 'John Smith',
    position: 'Lead Engineer',
    avatarUrl: 'https://placehold.co/40x40/ec4899/FFFFFF/png?text=JS',
    feedback: 'Their ability to translate complex requirements into beautiful and functional designs is unmatched. A true asset to any team.',
  },
  {
    name: 'Peter Jones',
    position: 'CEO',
    avatarUrl: 'https://placehold.co/40x40/22c55e/FFFFFF/png?text=PJ',
    feedback: 'Top-tier design skills and a professional attitude. Consistently exceeds expectations and contributes to a positive work environment.',
  },
  {
    name: 'Samantha Lee',
    position: 'UX Researcher',
    avatarUrl: 'https://placehold.co/40x40/f97316/FFFFFF/png?text=SL',
    feedback: 'A highly collaborative and creative partner. Their designs are always well-researched and user-centric.',
  },
];

export const clients = [
  { name: 'Client A', logoUrl: '/clients/brycenmyanmar.jpeg' },
  { name: 'Client B', logoUrl: '/clients/infinity.jpeg' },
  { name: 'Client C', logoUrl: '/clients/msis.jpeg' },
  { name: 'Client D', logoUrl: '/clients/try.jpg' },
  { name: 'Client E', logoUrl: '/clients/umg.png'},
  { name: 'Client F', logoUrl: '/clients/weday.png' },
  { name: 'Client F', logoUrl: '/clients/xan.jpeg' },
];

export const workflowData = [
  {
    id: 1,
    title: 'Discovery & Research',
    description: 'We start by understanding your business goals and user needs through detailed research and analysis.',
    points: [
      { title: 'Stakeholder interviews', description: 'Gathering insights from key stakeholders to align on project goals.' },
      { title: 'Competitive analysis', description: 'Evaluating competitor products to identify opportunities and threats.' },
      { title: 'User surveys and personas', description: 'Creating detailed user personas based on survey data to guide design decisions.' },
    ],
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: 'Based on the research, we create wireframes, mockups, and interactive prototypes to visualize the user experience.',
    points: [
      { title: 'Low-fidelity wireframing', description: 'Sketching basic layouts to define structure and flow.' },
      { title: 'High-fidelity mockups', description: 'Creating detailed visual designs of the user interface.' },
      { title: 'Interactive prototyping and testing', description: 'Building clickable prototypes for user feedback and validation.' },
    ],
  },
  {
    id: 3,
    title: 'Development & Implementation',
    description: 'We work closely with developers to ensure the design is implemented accurately and performs well.',
    points: [
      { title: 'Design handoff and documentation', description: 'Providing developers with detailed design specs and assets.' },
      { title: 'Frontend development support', description: 'Collaborating with engineers to translate designs into code.' },
      { title: 'Quality assurance and testing', description: 'Ensuring the final product meets design and quality standards.' },
    ],
  },
];
