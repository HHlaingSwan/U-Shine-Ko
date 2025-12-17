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
    name: 'Htet Hlaing Swan',
    position: 'React Developer',
    avatarUrl: 'https://placehold.co/40x40/6366f1/FFFFFF/png?text=HS',
    feedback: 'U shine is very kind and patient with his subordinates, always teaching and encouraging them. He can apply his specific knowledge well in the workplace and lead.',
  },
  {
    name: 'Htet Aung Ye Yint',
    position: 'React Developer',
    avatarUrl: 'https://placehold.co/40x40/ec4899/FFFFFF/png?text=HY',
    feedback: 'Working with U Shine has been an incredible experience. As a UI/UX tutor, he is  one of my favourites . He has a gift for making complex design concepts easy to understand and is incredibly helpful, both as a teacher and a collaborative work partner. I highly recommend him to anyone looking to master UI/UX design',
  },
  {
    name: 'Saung Eaindray Min',
    position: 'React Developer',
    avatarUrl: 'https://placehold.co/40x40/22c55e/FFFFFF/png?text=SM',
    feedback: 'As a Frontend Developer and co-workers, I would like to express my appreciation for U Shine is leadership and collaboration during your time as UI/UX Team Lead.  clear design direction, well-structured UI systems, and emphasis on user experience greatly supported efficient and high-quality frontend implementation.Your attention to detail, consistency in design standards, and openness to cross-functional collaboration made the development process smoother and more effective. The guidance you provided helped ensure strong alignment between design intent and technical execution.Thanks U Shine for better experiences in design system and knowledge.',
  },
  {
    name: 'Ko Pyae',
    position: 'UX Researcher',
    avatarUrl: 'https://placehold.co/40x40/f97316/FFFFFF/png?text=KP',
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
    title: 'Project Request',
    description: 'Every project begins with understanding your needs and confirming we ‌are the right fit.',
    points: [
      { title: 'Consultation', description: 'You will fill out a short form outlining your goals, target audience, project scope, and timeline.' },
      { title: 'Review & Assessment', description: 'I carefully evaluate your request to ensure it aligns with my expertise, availability, and design values.' },
      { title: 'Schedule Intro Call', description: 'If everything matches, we will arrange a video call to discuss your project in depth and align expectations.' },
    ],
  },
  {
    id: 2,
    title: 'Design Phase',
    description: 'This is where ideas turn into structured, research-backed design solutions.',
    points: [
      { title: 'Understand', description: 'Sketching basic layouts to define structure and flow.' },
      { title: 'Explore', description: 'Multiple potential concepts and directions' },
      { title: 'Decide', description: 'On the strongest idea(s) through discussion and feedback' },
      { title: 'Prototype', description: 'Wireframes, UI concepts, and interactive prototypes' },
      { title: 'Validate', description: 'Refine through real user or stakeholder testing' },
    ],
  },
  {
    id: 3,
    title: 'Presentation & Refinement',
    description: 'I present the design concepts, explain the reasoning behind each choice, and refine based on your input.',
    points: [
      { title: 'Design Walkthrough', description: 'Review wireframes, UI mockups, and prototypes to explain layout, interactions, and core decisions.' },
      { title: 'Client Feedback', description: 'We discuss your thoughts, clarify requests, and document improvements for the next iteration.' },
      { title: 'Refinement & Iteration', description: 'Updates are applied, visuals enhanced, usability improved, and the design is re-presented for approval.' },
    ],
  },

  {
    id: 4,
    title: 'Development Support',
    description: 'Once the design is approved, I ensure a smooth transition into development — and support even after launch.',
    points: [
      { title: 'Design Handoff', description: 'Provide clean, organized Figma files with style guides, specs, and ready-to-implement screens.' },
      { title: 'Design Token Guidance', description: 'Explain color systems, typography, spacing, components, and interactions to ensure consistency in build.' },
      { title: 'Asset & Component Delivery', description: 'Export all assets in required formats and resolutions, optimized for performance and platform standards.' },
    ],
  },
];
