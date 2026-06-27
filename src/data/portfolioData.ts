export interface Project {
  title: string;
  tech: string[];
  description: string;
  github: string;
  demo: string;
  features?: string[];
  architecture?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa: string;
}

export interface Experience {
  company: string;
  companyLink: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export const portfolioData = {
  profile: {
    name: "Thejaswini P",
    title: "Full Stack Developer Intern",
    email: "thejaswinip.171@gmail.com",
    phone: "+91 8296179514",
    location: "Bangalore, Karnataka, India",
    linkedin: "https://www.linkedin.com/in/thejaswini-p/",
    github: "https://github.com/ThejaswiniP17",
    summary: "Results-driven Master of Computer Applications (MCA) graduate with hands-on experience in Python, Django, REST APIs, React.js, and SQL. Skilled in performance engineering (Load, Stress & JMeter-based testing), observability (OpenTelemetry, ClickHouse), BPMN workflow automation, and Docker deployments. Proven Agile contributor delivering scalable, production-grade, business-focused solutions."
  } as Profile,
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python"]
    },
    {
      category: "Frontend Development",
      items: ["CSS3", "HTML5", "React.js"]
    },
    {
      category: "Backend Development",
      items: ["Django", "MVC/MVT Architecture", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["ClickHouse", "Django ORM", "SQL", "SQLite"]
    },
    {
      category: "Tools & Deployments",
      items: ["Apache JMeter", "BPMN Workflow", "Docker", "Git & GitHub", "OpenTelemetry"]
    },
    {
      category: "Methodologies & Systems",
      items: ["Agile Sprint cycles", "CI/CD Workflows", "Load & Stress Testing", "Performance Testing", "SDLC Principles"]
    }
  ],
  experience: [
    {
      company: "LeMiCi IQ",
      companyLink: "https://www.linkedin.com/company/lemici-ai/",
      role: "Full Stack Developer Intern",
      duration: "March 2026 - Present",
      location: "Bangalore, Karnataka, India",
      bullets: [
        "Engineered REST API endpoints using Python and Django, accelerating feature delivery within Agile sprint cycles.",
        "Implemented OpenTelemetry observability pipelines integrated with ClickHouse for real-time system monitoring.",
        "Optimized BPMN workflows, improving cross-team task visibility and reducing manual coordination overhead.",
        "Executed Load, Stress, and Spike performance tests using Apache JMeter, ensuring system reliability pre-production.",
        "Collaborated on Dockerized deployment pipelines and CI/CD workflows for scalable application delivery."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "OpsFlow",
      tech: ["Django", "React.js", "BPMN", "REST APIs", "Docker"],
      description: "Workflow & Operations Management Platform. Architected a full-stack workflow platform using Django and React.js with BPMN-driven automation and real-task coordination. Designed RESTful API layer managing end-to-end workflow state transitions, improving operational visibility and reducing process latency. Containerized with Docker for consistent and reproducible deployments across development and staging environments.",
      github: "https://github.com/ThejaswiniP17/OpsFlow",
      demo: "https://github.com/ThejaswiniP17/OpsFlow",
      features: [
        "Dynamic workflow design and state machines based on BPMN standard.",
        "Secure JSON Web Token (JWT) user authentication.",
        "Real-time event logging and observability reporting dashboards.",
        "Multi-container environment managed with Docker Compose."
      ],
      architecture: "React Client -> Django REST API -> Camunda BPMN / Celery Worker -> PostgreSQL / SQLite"
    },
    {
      title: "Django CRUD Web Application",
      tech: ["Django", "Python", "HTML", "CSS", "SQLite"],
      description: "Developed a scalable Django application with full CRUD operations, SQLite integration, and ORM-optimized queries. Implemented secure authentication and modular MVC architecture as a reusable backend foundation for production-grade apps.",
      github: "https://github.com/ThejaswiniP17/Django_CRUD",
      demo: "https://github.com/ThejaswiniP17/Django_CRUD",
      features: [
        "Model-View-Template layout with custom search indices.",
        "Comprehensive dashboard panel for record administration.",
        "Input validation widgets with anti-CSRF defenses."
      ],
      architecture: "HTML templates -> Django Views -> SQLite DB"
    },
    {
      title: "Weather Dashboard",
      tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: "Redesigned and rebuilt into a production-grade full-stack Weather & Air Quality Dashboard. Integrates an Express.js API proxy backend with automatic mock fallbacks and a Next.js App Router client featuring responsive glassmorphic cards, geolocation lookups, and custom SVG line charts mapping forecast temperatures.",
      github: "https://github.com/ThejaswiniP17/Premium-Weather-Dashboard",
      demo: "http://localhost:3001",
      features: [
        "Advanced Express.js proxy API backend with rate-limiting and automatic mock data failover.",
        "Interactive SVG temperature line charts and 24-hour horizontal hourly forecasts.",
        "Comprehensive weather metrics tracking Air Quality Index (AQI), UV Index, Wind, Sunset/Sunrise, and Humidity.",
        "User favorite location pinning system synced dynamically to LocalStorage."
      ],
      architecture: "React Client -> Express API Proxy Server -> OpenWeather & Air Quality APIs"
    },
    {
      title: "Fake Account Detection System",
      tech: ["Python", "Machine Learning", "scikit-learn", "Tkinter"],
      description: "Engineered a machine learning-based classification program that analyzes user profile features to predict account authenticity. Built a desktop dashboard utilizing Python, scikit-learn, and Tkinter for real-time risk scoring and audits.",
      github: "https://github.com/ThejaswiniP17/Fake-Account-Detection",
      demo: "https://github.com/ThejaswiniP17/Fake-Account-Detection",
      features: [
        "Random Forest Classifier with 94%+ accuracy.",
        "Feature engineering pipeline evaluating follower/following ratios, bio descriptions, and activity rates.",
        "Graphical user interface built in Tkinter for immediate testing."
      ],
      architecture: "scikit-learn Pipeline -> Random Forest Model -> Tkinter GUI"
    }
  ] as Project[],
  certifications: [
    {
      title: "Python Full Stack",
      issuer: "Pentagon Space",
      date: "February 2025",
      link: "media/certifications/python_full_stack_certificate.pdf",
      bullets: [
        "Mastered Python syntax, core data types, OOP structures, and file operations.",
        "Completed advanced training in Web Technologies: CSS3, HTML5, Vanilla JavaScript, and Bootstrap frameworks.",
        "Completed comprehensive training in Relational Database Management Systems and SQL."
      ]
    },
    {
      title: "Python Full Stack Program",
      issuer: "JSpiders",
      date: "January 2025",
      link: "media/certifications/python_full_stack_program_certificate.png",
      bullets: [
        "Mastered Django: models, views, templates, URL routing, and ORM-based database design.",
        "Developed 5+ scalable Django applications with advanced forms, secure authentication, and optimized databases."
      ]
    }
  ] as Certification[],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Global Institute of Management Sciences (GIMS), Bangalore University",
      duration: "2022 - 2024",
      location: "Bangalore, Karnataka, India",
      gpa: "75.30 %"
    },
    {
      degree: "Bachelor of Science (PMCs) - Physics, Mathematics & Computer Science",
      institution: "JSS College for Women (JSSCW), Mysore University",
      duration: "2019 - 2022",
      location: "Mysore, Karnataka, India",
      gpa: "7.62 CGPA"
    }
  ] as Education[],
  achievements: [
    {
      title: "Event Host & Coordinator",
      detail: "Teachers' Day Celebration, JSS College for Women — Hosted and coordinated the Teachers' Day event and received appreciation for communication and leadership."
    },
    {
      title: "Project Lead",
      detail: "MCA Academic Projects — Led the development of multiple academic projects, demonstrating ownership, teamwork, and problem-solving skills."
    }
  ] as Achievement[]
};
