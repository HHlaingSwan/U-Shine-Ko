import { PenTool, Code, Search } from "lucide-react";

export const specializations = [
  {
    icon: PenTool, // Pass the component itself
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces that provide a seamless user experience, focusing on usability and aesthetics.',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications using modern technologies like React and Tailwind CSS.',
  },
  {
    icon: Search,
    title: 'User Research',
    description: 'Conducting user research to gather insights and validate design decisions, ensuring the final product meets user needs.',
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
  { name: 'Client A', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=Innovate+Co' },
  { name: 'Client B', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=Quantum+Inc' },
  { name: 'Client C', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=Apex+Group' },
  { name: 'Client D', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=NextGen+Sys' },
  { name: 'Client E', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=Stellar+Solutions' },
  { name: 'Client F', logoUrl: 'https://placehold.co/120x50/334155/94a3b8/png?text=Vertex+LLC' },
];

export const workflowData = [
  {
    id: 1,
    title: 'Discovery & Research',
    description: 'We start by understanding your business goals and user needs through detailed research and analysis.',
    points: [
      'Stakeholder interviews',
      'Competitive analysis',
      'User surveys and personas',
    ],
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: 'Based on the research, we create wireframes, mockups, and interactive prototypes to visualize the user experience.',
    points: [
      'Low-fidelity wireframing',
      'High-fidelity mockups',
      'Interactive prototyping and testing',
    ],
  },
  {
    id: 3,
    title: 'Development & Implementation',
    description: 'We work closely with developers to ensure the design is implemented accurately and performs well.',
    points: [
      'Design handoff and documentation',
      'Frontend development support',
      'Quality assurance and testing',
    ],
  },
];
