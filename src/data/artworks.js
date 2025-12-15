const artworks = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    category: "web",
    imageUrl:
      "https://placehold.co/600x400/000000/FFFFFF/png?text=Web+Project+1",
    projectOverview:
      "A modern, responsive portfolio website showcasing various design projects. Built with React and Tailwind CSS for a seamless user experience across all devices. The primary goal was to create a clean, minimalist design that puts the focus on the visual work, while ensuring high performance and accessibility.",
    role: "Lead UI/UX Designer",
    year: "2024",
    teamMembers: 4,
    client: "Self-initiated",
    tools: ["React", "Tailwind CSS", "Vite", "Figma"],
    coreFeatures: [
      {
        title: "Responsive Design",
        description:
          "Our website is meticulously designed to adapt and display perfectly across a wide range of devices, including large desktop monitors, tablets, and various mobile phone screens, ensuring an optimal viewing and interaction experience for all users, regardless of their device.",
      },
      {
        title: "Interactive Project Filtering",
        description:
          "Users can easily filter projects by category, technology, or role, allowing them to quickly find the most relevant work samples based on their interests.",
      },
      {
        title: "Dynamic Routing",
        description:
          "Leveraging dynamic routing, each project has its own dedicated, unique URL, making it easy to share specific artwork details directly with clients or collaborators.",
      },
      {
        title: "Customizable Theme",
        description:
          "The portfolio includes a built-in theme switcher, allowing visitors to toggle between light and dark modes according to their preference, enhancing accessibility and user comfort.",
      },
      {
        title: "Optimized for Fast Loading Speeds",
        description:
          "Performance was a key consideration; the site is optimized with lazy loading, image compression, and code splitting to ensure a blazing-fast loading experience, keeping visitors engaged.",
      },
    ],
    uxProcess: [
      {
        title: "Research & Analysis",
        description:
          "The project started with in-depth user research and competitive analysis to identify key user needs, pain points, and design opportunities, which informed the overall project strategy.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low-fidelity wireframes and interactive prototypes were created to map out user flows and test core functionalities. This iterative process allowed for early feedback and refinement.",
      },
      {
        title: "High-Fidelity Mockups",
        description:
          "High-fidelity mockups were developed in Figma, focusing on visual hierarchy, typography, color theory, and creating a cohesive brand identity that would resonate with the target audience.",
      },
      {
        title: "Usability Testing",
        description:
          "Throughout the development cycle, usability testing was conducted with real users to identify and address any usability issues, ensuring an intuitive and delightful final product.",
      },
    ],
    challenge:
      "The primary challenge was to create a design that is both visually engaging and extremely fast to load, avoiding the common pitfall of portfolio sites that are slow due to large media assets. It also needed to be easily maintainable.",
    solution:
      "Implemented lazy loading for images and code splitting for routes. Used a static site generation approach for the final build to ensure a highly performant and SEO-friendly result. The design focused on strong typography and a clear grid system to showcase work effectively without relying on heavy graphical elements.",
    detailImages: [
      "https://placehold.co/800x600/111111/FFFFFF/png?text=Web+Detail+1.1",
      "https://placehold.co/600x800/222222/FFFFFF/png?text=Web+Detail+1.2",
      "https://placehold.co/800x400/333333/FFFFFF/png?text=Web+Detail+1.3",
      "https://placehold.co/800x800/111111/FFFFFF/png?text=Web+Detail+1.4",
    ],
    projectUrl: "https://example.com/portfolio1",
  },
  {
    id: 2,
    title: "Mobile Banking App UI/UX",
    category: "mobile",
    imageUrl:
      "https://placehold.co/600x400/111111/FFFFFF/png?text=Mobile+App+2",
    projectOverview:
      "Designed an intuitive and secure mobile banking application, focusing on ease of use and accessibility. Includes features like account management, transfers, and bill payments.",
    role: "UI/UX Designer",
    year: "2023",
    teamMembers: 6,
    client: "FinTech Solutions",
    tools: ["Figma", "Sketch", "Adobe XD"],
    coreFeatures: [
      {
        title: "Secure Login",
        description:
          "Ensuring the highest level of security, the app supports biometric authentication methods such as fingerprint and face ID, alongside robust multi-factor authentication, to protect user accounts and sensitive financial data.",
      },
      {
        title: "Real-time Transaction History",
        description:
          "Users can view their complete transaction history with instant updates, categorized spending, and easy search functionality, providing clear insights into their financial activities.",
      },
      {
        title: "Seamless Fund Transfers",
        description:
          "Facilitating quick and effortless money movement, the app allows users to transfer funds between their own accounts, to other bank accounts, and set up recurring payments with just a few taps, including integrated bill payment services.",
      },
      {
        title: "Personalized Financial Insights",
        description:
          "Leveraging AI-driven analytics, the app provides personalized spending reports, budget tracking, and tailored financial advice to help users achieve their monetary goals and better manage their finances.",
      },
      {
        title: "Multi-currency Support",
        description:
          "Catering to global users, the application offers comprehensive multi-currency account management, real-time exchange rates, and simplified international transactions, making cross-border banking straightforward and efficient.",
      },
    ],
    uxProcess: [
      {
        title: "User Interviews & Persona Creation",
        description:
          "Engaged in extensive user interviews to understand user needs and pain points, which led to the creation of detailed user personas that guided the design process.",
      },
      {
        title: "Information Architecture",
        description:
          "Conducted card sorting and tree testing exercises to develop an intuitive and logical information architecture, ensuring that users can easily navigate the app and find the features they need.",
      },
      {
        title: "Interactive Prototyping & Testing",
        description:
          "Developed high-fidelity interactive prototypes in Figma, which were used for rigorous user testing. Feedback from these sessions was crucial in refining the user flows and overall visual design.",
      },
      {
        title: "Accessibility Compliance",
        description:
          "Ensured the application adhered to WCAG 2.1 guidelines, implementing features like adjustable font sizes, screen reader support, and high-contrast color schemes to make the app accessible to all users.",
      },
    ],
    challenge:
      "The challenge was to simplify complex banking processes for a diverse user base, including those with low financial literacy, while maintaining a high level of security and trust.",
    solution:
      "The solution was a task-based interface that guides users through each process step-by-step. Visual cues and clear language were used to demystify banking jargon. Security features were integrated seamlessly into the user flow to be reassuring but not intrusive.",
    detailImages: [
      "https://placehold.co/600x800/444444/FFFFFF/png?text=Mobile+Detail+2.1",
      "https://placehold.co/800x600/555555/FFFFFF/png?text=Mobile+Detail+2.2",
      "https://placehold.co/800x800/444444/FFFFFF/png?text=Mobile+Detail+2.3",
    ],
    projectUrl: "https://example.com/banking-app",
  },
  {
    id: 3,
    title: "E-commerce Redesign",
    category: "web",
    imageUrl:
      "https://placehold.co/600x400/222222/FFFFFF/png?text=Web+Project+3",
    projectOverview:
      "Complete UI/UX overhaul for an existing e-commerce platform, improving conversion rates and user satisfaction through a streamlined shopping experience.",
    role: "UI Designer",
    year: "2023",
    teamMembers: 3,
    client: "Fashion Outlet",
    tools: ["Figma", "Illustrator", "User Testing"],
    coreFeatures: [
      {
        title: "Improved Navigation",
        description:
          "We revamped the entire site navigation to be more intuitive and user-friendly, allowing customers to find products effortlessly with simplified menus and clear categorization, significantly reducing bounce rates.",
      },
      {
        title: "Personalized Recommendations",
        description:
          "Integrated an advanced AI-driven recommendation engine that suggests products based on browsing history, purchase patterns, and complementary items, enhancing the shopping experience and increasing average order value.",
      },
      {
        title: "Streamlined Checkout",
        description:
          "The checkout process was redesigned to be faster and more efficient, reducing the number of steps required to complete a purchase. We also introduced a guest checkout option and various payment methods to accommodate all users.",
      },
      {
        title: "High-Resolution Product Imagery",
        description:
          "Implemented a high-resolution image gallery with zoom and 360-degree views for all products, allowing customers to examine items in detail, fostering confidence in their purchase decisions.",
      },
    ],
    uxProcess: [
      {
        title: "Discovery & Research",
        description:
          "Analyzed user data and conducted market research to identify key pain points and opportunities for improvement in the existing user journey.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Developed wireframes and high-fidelity prototypes to visualize the new design and gather early feedback from stakeholders.",
      },
      {
        title: "A/B Testing & Iteration",
        description:
          "Rigorously tested different design variations with users to determine the most effective solutions for improving usability and conversion rates.",
      },
    ],
    challenge:
      "To overhaul an outdated e-commerce site with a high cart abandonment rate without disrupting existing loyal customers.",
    solution:
      "A phased rollout was planned, starting with an improved checkout flow, which data showed was the biggest pain point. A/B testing was used extensively to validate new design choices before full implementation. The final design is cleaner, faster, and more intuitive.",
    detailImages: [
      "https://placehold.co/800x600/666666/FFFFFF/png?text=Web+Detail+3.1",
    ],
    projectUrl: "https://example.com/ecommerce-redesign",
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    category: "mobile",
    imageUrl:
      "https://placehold.co/600x400/333333/FFFFFF/png?text=Mobile+App+4",
    projectOverview:
      "A mobile application designed to help users track their fitness activities, set goals, and monitor progress. Features include workout logging, calorie tracking, and social sharing.",
    role: "Product Designer",
    year: "2022",
    teamMembers: 5,
    client: "Health & Wellness Co.",
    tools: ["Sketch", "Figma", "Principle"],
    coreFeatures: [
      {
        title: "Activity Tracking",
        description:
          "Comprehensive tracking of all physical activities, including steps, distance, calories burned, and active minutes. Users can set daily goals and monitor their progress effortlessly through intuitive dashboards.",
      },
      {
        title: "Personalized Workout Plans",
        description:
          "AI-generated workout routines tailored to individual fitness levels, goals, and preferences. Plans adapt over time based on user performance and feedback, ensuring continuous challenge and progress.",
      },
      {
        title: "Nutrition Logging",
        description:
          "An easy-to-use food diary allows users to log their meals and snacks, providing detailed nutritional breakdowns and helping them stay within their calorie and macro goals. Includes a vast database of food items.",
      },
      {
        title: "Social Sharing",
        description:
          "Users can connect with friends, share their achievements, participate in challenges, and motivate each other, fostering a supportive community around their fitness journey. Leaderboards and badges add a fun competitive element.",
      },
    ],
    uxProcess: [
      {
        title: "Ideation & Validation",
        description:
          "Brainstormed feature ideas and validated them through user surveys and market analysis to ensure the app would meet user expectations and stand out in a competitive market.",
      },
      {
        title: "UI/UX Design",
        description:
          "Focused on creating a clean, motivating, and easy-to-navigate interface. Developed a cohesive design system to ensure consistency across the application.",
      },
      {
        title: "Prototyping & User Feedback",
        description:
          "Created interactive prototypes to simulate the user experience and gathered feedback from potential users to refine the design and flow before development began.",
      },
    ],
    challenge:
      "To create a fitness app that is motivating and not discouraging, addressing the common user drop-off after a few weeks of use.",
    solution:
      "Gamification elements such as badges, streaks, and community challenges were introduced. The app focuses on celebrating small wins and consistency over intense, unsustainable workouts, fostering a healthier long-term relationship with fitness.",
    detailImages: [
      "https://placehold.co/800x600/999999/FFFFFF/png?text=Mobile+Detail+4.1",
    ],
    projectUrl: "https://example.com/fitness-app",
  },
  {
    id: 5,
    title: "SaaS Dashboard UI",
    category: "web",
    imageUrl:
      "https://placehold.co/600x400/444444/FFFFFF/png?text=Web+Project+5",
    projectOverview:
      "Designed a comprehensive and data-rich dashboard for a SaaS product, providing users with actionable insights and easy management of their subscriptions.",
    role: "UI/UX Designer",
    year: "2023",
    teamMembers: 4,
    client: "Cloud Solutions Inc.",
    tools: ["Figma", "Chart.js", "React"],
    coreFeatures: [
      {
        title: "Customizable Widgets",
        description:
          "Users can personalize their dashboard layout by adding, removing, and rearranging widgets with a simple drag-and-drop interface, ensuring they see the most relevant information at a glance.",
      },
      {
        title: "Real-time Analytics",
        description:
          "Gain instant insights into key performance indicators and operational metrics with real-time data updates and interactive charts, empowering users to make data-driven decisions quickly.",
      },
      {
        title: "Subscription Management",
        description:
          "A dedicated section allows users to easily view their current subscription plan, upgrade or downgrade services, manage billing information, and access invoices, all within the dashboard.",
      },
      {
        title: "User Activity Logs",
        description:
          "Detailed logs provide an overview of all user and team activities within the platform, offering transparency and traceability for administrative oversight and security monitoring.",
      },
    ],
    uxProcess: [
      {
        title: "User Requirements Gathering",
        description:
          "Worked closely with stakeholders and end-users to gather detailed requirements for the dashboard, ensuring all necessary data points and features were included.",
      },
      {
        title: "Data Visualization Design",
        description:
          "Designed clear and effective data visualizations, including charts, graphs, and tables, to present complex data in an easily digestible format.",
      },
      {
        title: "Interactive Prototyping",
        description:
          "Built interactive prototypes to simulate data interactions, such as drilling down into charts and filtering data, to test and validate the user experience.",
      },
    ],
    challenge:
      "Presenting a vast amount of complex data in a way that is easily digestible and actionable for non-technical users.",
    solution:
      "The dashboard was designed with a modular, widget-based system, allowing users to customize their view to prioritize information relevant to them. Data visualizations were made interactive, with tooltips and drill-downs to provide context without cluttering the interface.",
    detailImages: [],
    projectUrl: "https://example.com/saas-dashboard",
  },
  {
    id: 6,
    title: "Smart Home Control App",
    category: "mobile",
    imageUrl:
      "https://placehold.co/600x400/555555/FFFFFF/png?text=Mobile+App+6",
    projectOverview:
      "Intuitive mobile application for controlling smart home devices, allowing users to manage lighting, temperature, and security systems from a single interface.",
    role: "Lead UX Designer",
    year: "2024",
    teamMembers: 7,
    client: "Innovate Home Tech",
    tools: ["Figma", "InVision"],
    coreFeatures: [
      {
        title: "Centralized Device Control",
        description:
          "Manage all your smart home devices—lights, thermostats, locks, and cameras—from a single, intuitive dashboard, eliminating the need for multiple apps.",
      },
      {
        title: "Automated Routines",
        description:
          "Create custom automation rules and schedules, such as turning off lights when you leave, adjusting the thermostat before you arrive home, or arming the security system at bedtime.",
      },
      {
        title: "Voice Assistant Integration",
        description:
          "Seamlessly integrate with popular voice assistants like Google Assistant and Amazon Alexa, allowing for hands-free control of your smart home devices with simple voice commands.",
      },
      {
        title: "Energy Monitoring",
        description:
          "Monitor your household energy consumption in real-time, identify energy-hungry devices, and receive smart recommendations to optimize usage and reduce your utility bills.",
      },
    ],
    uxProcess: [
      {
        title: "Device Integration Analysis",
        description:
          "Researched and analyzed the protocols of various smart home devices to create a unified control system and a seamless user experience.",
      },
      {
        title: "User Flow Mapping",
        description:
          "Mapped out user flows for common tasks, such as adding a new device, creating a routine, and adjusting settings, to ensure the app was intuitive and easy to use.",
      },
      {
        title: "Visual Design & Branding",
        description:
          "Developed a clean and modern visual design that made the app feel approachable and trustworthy, using a consistent iconography and color scheme.",
      },
    ],
    challenge:
      "To create a single, unified interface for a wide range of devices from different manufacturers, each with its own protocol.",
    solution:
      'A standardized control language and UI pattern was developed for common actions (on/off, dimming, temperature control), abstracting away the device-specific complexity. The app uses a "room-centric" navigation model, which users found more intuitive than a "device-centric" one.',
    detailImages: [],
    projectUrl: "https://example.com/smart-home-app",
  },
  {
    id: 7,
    title: "Travel Booking Website",
    category: "designSystem",
    imageUrl:
      "https://placehold.co/600x400/666666/FFFFFF/png?text=Web+Project+7",
    projectOverview:
      "Designed a modern and user-friendly travel booking website with advanced search filters, destination guides, and seamless booking flow.",
    role: "UI/UX Designer",
    year: "2023",
    teamMembers: 4,
    client: "Global Adventures",
    tools: ["Figma", "Photoshop", "React"],
    coreFeatures: [
      {
        title: "Advanced Search Filters",
        description:
          "Our powerful search engine allows you to filter flights and hotels by price, dates, airlines, layovers, star ratings, amenities, and much more, ensuring you find exactly what you need for your trip.",
      },
      {
        title: "Destination Guides",
        description:
          "Explore comprehensive guides for hundreds of destinations worldwide, featuring local attractions, dining recommendations, cultural tips, and essential travel information to help you plan your perfect itinerary.",
      },
      {
        title: "Secure Booking System",
        description:
          "Book with confidence knowing that all transactions are secured with industry-leading encryption and robust fraud prevention measures. We support various secure payment gateways for your convenience.",
      },
      {
        title: "Multi-Currency Support",
        description:
          "View prices and complete payments in your preferred currency, with real-time exchange rate conversions, making international travel planning straightforward and transparent.",
      },
    ],
    uxProcess: [
      {
        title: "Competitive Analysis",
        description:
          "Conducted a thorough analysis of competing travel websites to identify industry best practices and areas for innovation.",
      },
      {
        title: "Booking Flow Optimization",
        description:
          "Designed a simplified, multi-step booking process that reduced friction and improved the overall user experience, leading to higher conversion rates.",
      },
      {
        title: "Trust & Credibility Design",
        description:
          "Incorporated user reviews, ratings, and high-quality imagery to build trust and provide social proof, encouraging users to book with confidence.",
      },
    ],
    challenge:
      "To simplify the overwhelming process of booking travel, which often involves many variables and options.",
    solution:
      "A guided, multi-step booking form was created that breaks the process into manageable chunks. A powerful filtering system allows users to narrow down options easily. User-generated reviews and photos were prominently featured to build trust and provide social proof.",
    detailImages: [],
    projectUrl: "https://example.com/travel-booking",
  },
  {
    id: 8,
    title: "Recipe Sharing Mobile App",
    category: "brandingLogo",
    imageUrl:
      "https://placehold.co/600x400/777777/FFFFFF/png?text=Mobile+App+8",
    projectOverview:
      "A community-driven mobile app for sharing and discovering recipes. Features include personalized recommendations, meal planning, and cooking tutorials.",
    role: "UX Designer",
    year: "2022",
    teamMembers: 3,
    client: "Foodie Network",
    tools: ["Sketch", "Figma", "Protopie"],
    coreFeatures: [
      {
        title: "Personalized Recommendations",
        description:
          "Leveraging advanced machine learning, the app provides daily recipe recommendations tailored to your dietary preferences, cooking skill level, and past culinary choices, ensuring you always find something new to try.",
      },
      {
        title: "Meal Planning Tool",
        description:
          "Effortlessly plan your weekly meals with our intuitive drag-and-drop interface. Generate automated shopping lists based on your planned recipes, minimizing waste and simplifying your grocery runs.",
      },
      {
        title: "User-Generated Content",
        description:
          "Join a vibrant community of food enthusiasts! Share your own unique recipes, complete with photos and cooking tips, and discover an endless array of dishes contributed by users from around the globe.",
      },
      {
        title: "Cooking Tutorials",
        description:
          "Access a rich library of step-by-step cooking tutorials, including video guides and detailed images, designed to help home cooks of all levels master new techniques and create delicious meals with confidence.",
      },
    ],
    uxProcess: [
      {
        title: "Community-Centered Design",
        description:
          "Focused on features that encourage community interaction, such as user profiles, recipe comments, and photo sharing, to create a vibrant and engaging user base.",
      },
      {
        title: "Recipe Submission Wizard",
        description:
          "Designed an easy-to-use wizard that simplifies the process of submitting new recipes, encouraging more users to contribute their own culinary creations.",
      },
      {
        title: "Gamification & Engagement",
        description:
          "Introduced gamification elements like badges for trying new recipes and sharing content to increase user engagement and retention.",
      },
    ],
    challenge:
      "To create a recipe app that stands out in a crowded market and encourages user-generated content.",
    solution:
      'The app focuses heavily on the social and community aspect, with user profiles, "likes," and comments being central to the experience. A recipe submission wizard makes it easy for users to contribute their own recipes. The "meal planner" feature was also a key differentiator.',
    detailImages: [],
    projectUrl: "https://example.com/recipe-app",
  },
];

export default artworks;
