export const education = [
  {
    school: "Jalpaiguri Government Engineering College",
    location: "West Bengal, India",
    degree: "B.Tech in Information Technology",
    period: "Expected 2028",
    highlights: [
      "SGPA: 9.48/10",
      "Core Coursework: Data Structures, Algorithms, Object-Oriented Programming, System Design",
    ],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: "JavaScript (ES6+), TypeScript, Python, C, C++",
  },
  {
    name: "Frontend",
    items: "React.js, Next.js, Tailwind CSS, HTML5, CSS3",
  },
  {
    name: "Backend & Databases",
    items: "Node.js, Express.js, Prisma, PostgreSQL, MongoDB, MySQL, Supabase",
  },
  {
    name: "Core Concepts & Architecture",
    items: "System Design, OOP, RESTful APIs, RBAC",
  },
  {
    name: "AI & Machine Learning",
    items: "TensorFlow, PyTorch, Deep Learning (CNN, LSTM), Computer Vision, Scikit-learn, Pandas",
  },
  {
    name: "Tools & Cloud",
    items: "Git, GitHub, Docker, Linux, Postman, Vercel, Aiven, Railway",
  },
];

export const experiences = [
  {
    title: "Research Intern",
    link: "https://www.nitjsr.ac.in/",
    company: "National Institute of Technology Jamshedpur",
    location: "Jamshedpur, Jharkhand (Hybrid)",
    period: "Jun 2026 – Jul 2026",
    highlights: [
      "Engineered a hybrid CNN-LSTM image captioning model using TensorFlow on the Flickr8k dataset.",
      "Achieved a BLEU-1 score of 0.55, optimizing model performance for accurate natural language descriptions.",
      "Conducted research under the guidance of Dr. Mayukh Sarkar, applying advanced Deep Learning techniques.",
    ],
  },
  {
    title: "Project Intern",
    link: "https://deepduofoundation.com/",
    company: "DeepDuo Foundation",
    location: "Kolkata, West Bengal",
    period: "Feb 2026 – May 2026",
    highlights: [
      "Architected a conference management platform using Next.js and Node.js supporting 50+ users.",
      "Developed scalable APIs, submission workflows, review pipelines, and secure authentication systems.",
      "Delivered 5+ production-ready features while collaborating in an agile team environment.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    link: "https://iisppr.org.in/",
    company: "International Institute of SDGs Public Policy Research (IISPPR)",
    location: "Remote",
    period: "Aug 2025 – Dec 2025",
    highlights: [
      "Developed a CRM system utilized by 25+ internal users, reducing manual data workflows by 30%.",
      "Engineered task and project management workflows within the client management system to improve team coordination.",
      "Designed REST APIs, optimized MongoDB database queries, and deployed applications to production.",
    ],
  },
];

export const blogPosts = [
  {
    title: "ClientPro — Full-Stack CRM",
    featured: true,
    date: "August 2025",
    excerpt:
      "Building a multi-role CRM with Next.js, Supabase, PostgreSQL, and NextAuth.",
    content:
      "ClientPro includes role-based access control, PostgreSQL with Row Level Security, interactive dashboards, automated invoice generation, and email workflows. It is deployed on Vercel for production use.",
    link: "https://new-client-management-system-vercel-plum.vercel.app/",
  },
  {
    title: "SnapClass — AI Attendance",
    featured: true,
    date: "2026",
    excerpt:
      "Using facial recognition and voice biometrics to replace manual roll-calls.",
    content:
      "SnapClass combines Dlib facial recognition and Resemblyzer voice biometrics, with QR-based enrollment and real-time PostgreSQL sync through Supabase. The landing page is on Vercel; the Python app runs on Streamlit Cloud.",
    link: "https://ai-powered-attendence-landing-page.vercel.app/",
  },
  {
    title: "Image Captioning with CNN-LSTM",
    featured: false,
    date: "July 2026",
    excerpt:
      "Notes from building a hybrid CNN-LSTM captioning model on Flickr8k at NIT Jamshedpur.",
    content:
      "During my research internship I engineered a TensorFlow CNN-LSTM pipeline for natural language image descriptions, reaching a BLEU-1 score of 0.55 and iterating on model design under Dr. Mayukh Sarkar.",
  },
  {
    title: "My Full-Stack Journey",
    featured: false,
    date: "Early 2025",
    excerpt:
      "From HTML and CSS to internships building production CRMs and conference platforms.",
    content:
      "I started with HTML, CSS, and JavaScript, then moved into React and Next.js. Internships at IISPPR and DeepDuo gave me hands-on work with authentication, workflows, and shipping features with a team.",
  },
  {
    title: "Balancing College & Development",
    featured: false,
    date: "July 2025",
    excerpt:
      "Studying B.Tech IT at JGEC while taking internships, hackathons, and club work.",
    content:
      "Between academics, hackathons, and internships I learned to manage time better. JGEC Coders Club, JWOC, and contest practice on CodeChef and Codeforces keep the learning loop going.",
  },
];

export const achievements = [
  {
    title: "Finalist – Paradigm Shift Hackathon",
    year: "2025",
    description:
      "Finalist for EmpowerHer, a full-stack job platform, at Paradigm Shift Hackathon.",
  },
  {
    title: "Competitive Programming",
    year: "2024 – Present",
    description:
      "Active participant on CodeChef and Codeforces.",
  },
  {
    title: "Open Source — JWOC",
    year: "2026",
    description:
      "Active contributor to the JWOC (JGEC Winter of Code) program.",
  },
  {
    title: "Campus Involvement",
    year: "2024 – Present",
    description:
      "Volunteer at JGEC Coders Club and participant in the CFI robotics workshop.",
  },
];

export const projects = [
  {
    title: "ClientPro — Full-Stack CRM System",
    featured: true,
    tech: ["Next.js", "Supabase", "PostgreSQL", "NextAuth"],
    description:
      "Multi-role CRM with RBAC via NextAuth, PostgreSQL Row Level Security, interactive dashboards, automated invoices, and email workflows.",
    link: "https://new-client-management-system-vercel-plum.vercel.app/",
    github: "https://github.com/SkAbuTahir/New_Client-Management-System_Vercel",
  },
  {
    title: "SnapClass — AI Attendance System",
    featured: true,
    tech: ["Python", "Streamlit", "Supabase", "Computer Vision"],
    description:
      "AI attendance using facial recognition (Dlib) and voice biometrics (Resemblyzer), QR enrollment, and real-time PostgreSQL sync via Supabase.",
    link: "https://ai-powered-attendence-landing-page.vercel.app/",
    github: "https://github.com/SkAbuTahir/ai-attendance-project",
  },
  {
    title: "Product Management System",
    featured: true,
    tech: ["React", "Node.js", "MySQL", "Aiven"],
    description:
      "Secure product management platform with full CRUD operations, Node.js backend, and MySQL on Aiven for scalable data storage.",
    github: "https://github.com/SkAbuTahir/Product-Management-system-",
    link: "",
  },
  {
    title: "Tasknest",
    featured: false,
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    description:
      "A SaaS-style task manager with authentication. Frontend in Next.js and React; backend on Node.js, Express.js, and MongoDB.",
    link: "https://task-nest-alpha.vercel.app/login",
    github: "https://github.com/SkAbuTahir/task-nest",
  },
  {
    title: "Sales Analytics Dashboard",
    featured: false,
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    description:
      "Cleaned CSV datasets with Pandas, ran exploratory analysis, and visualized trends with Matplotlib and Seaborn for business insights.",
    github: "https://github.com/SkAbuTahir",
    link: "",
  },
  {
    title: "React To-Do Application",
    featured: false,
    tech: ["React.js", "Vite", "Tailwind CSS"],
    description:
      "Interactive task app with add, edit, and delete flows using modern React hooks.",
    link: "https://react-todo-app-six-lime-28.vercel.app/",
    github: "https://github.com/SkAbuTahir/react-todo-app",
  },
  {
    title: "Be My Valentine",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A playful Valentine's Day card experience.",
    github:
      "https://github.com/SkAbuTahir/usingExpress-willYouBeMyValentine/tree/main",
    link: "https://using-express-will-you-be-my-valent.vercel.app/",
  },
];
