import { Github, Linkedin, Mail } from "lucide-react";

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
}

export interface Organization {
  name: string;
  role: string;
  duration: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    icon: typeof Github | typeof Linkedin | typeof Mail;
    url: string;
    label: string;
  }[];
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  organizations: Organization[];
}

const resumeData: ResumeData = {
  name: "Vishnu Gupta",
  title: "Computer Science Engineering Student | AI & Full-Stack Developer",
  email: "guptavishnu2711@gmail.com",
  phone: "+91 8707664131",
  location: "Kanpur, Uttar Pradesh, India",

  socials: [
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/vishnu-gupta-485910293",
      label: "LinkedIn",
    },
    {
      icon: Github,
      url: "https://github.com/Vishnugupta2711",
      label: "GitHub",
    },
    {
      icon: Mail,
      url: "mailto:guptavishnu2711@gmail.com",
      label: "Email",
    },
  ],

  about:
    "Computer Science Engineering undergraduate at SRM Institute of Science and Technology with a strong focus on Artificial Intelligence, machine learning systems, and full-stack development. Currently a Research Intern at Samsung PRISM, working on GenAI, LLM-based data systems, and intelligent analytics pipelines. Passionate about building scalable, real-world solutions at the intersection of AI, systems, and user experience.",

  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "C++", "C", "Java"],
    },
    {
      category: "AI / Machine Learning",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "OpenCV",
        "Scikit-learn",
        "Computer Vision",
        "NLP",
        "LLMs",
        "RAG",
      ],
    },
    {
      category: "Web & Backend",
      items: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "Flask",
        "Django",
        "FastAPI",
        "Tailwind CSS",
      ],
    },
    {
      category: "Databases & Data",
      items: ["MongoDB", "MySQL", "PostgreSQL", "SQLAlchemy", "Mongoose"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "Docker", "Google Cloud", "Figma", "Canva"],
    },
    {
      category: "Core CS",
      items: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "OOP",
        "Computer Networks",
      ],
    },
  ],

  experience: [
    {
      role: "Research Intern",
      organization: "Samsung PRISM",
      duration: "June 2025 – Present",
      location: "Chennai, India",
      technologies: [
        "GenAI",
        "LLMs",
        "RAG",
        "LangChain",
        "ChromaDB",
        "Streamlit",
        "SQLAlchemy",
        "PyMongo",
      ],
      description: [
        "Designed intelligent investigation and reporting pipelines over structured and unstructured datasets.",
        "Engineered scalable ingestion pipelines to process 10K+ records into relational SQL schemas using semantic similarity.",
        "Built NLP-to-SQL/MongoDB systems enabling analysts to query data using natural language.",
        "Improved query relevance by ~30% using context-aware retrieval and prompt optimization.",
      ],
    },
  ],

  projects: [
  {
    title: "AI-Powered Smart Waste Segregation Bin",
    description:
      "Engineered a real-time smart waste segregation system using Vision Transformers, YOLOv11, EfficientDet-Lite0, and custom CNNs. Achieved up to 98% accuracy and reduced manual sorting by 60% using edge AI deployment on Raspberry Pi.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Vision Transformers",
      "YOLO",
      "Raspberry Pi",
      "Edge AI",
    ],
    imageUrl: "/seg.png",
  },
  {
    title: "AI-Powered Data Drift Monitoring & Risk Detection System",
    description:
      "Built an ML observability platform to detect data, schema, and distribution drift across 50+ features using KS test, Chi-square, and JS divergence. Reduced investigation time by 40% and model degradation incidents by 30%.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "React",
    ],
    imageUrl: "/drift.png",
  },
  {
    title: "AI-Powered API Monitoring & Anomaly Detection System",
    description:
      "Developed an ML-driven API observability platform using LSTM and Isolation Forest. Integrated ELK Stack for real-time log analysis, anomaly prediction, and alerting, reducing incident response time by 60%.",
    technologies: [
      "Python",
      "LSTM",
      "Isolation Forest",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Docker",
      "Flask",
    ],
    imageUrl: "/api.png",
  },
  {
    title: "Aura+ – Mental Health Platform for Disabled Individuals",
    description:
      "Designed an inclusive mental health platform with face & voice authentication, sign language detection, multilingual voice navigation, AI chatbot, IoT vitals monitoring, and VR-based therapy modules.",
    technologies: [
      "MERN Stack",
      "NLP",
      "Google Speech API",
      "FaceAPI",
      "Chart.js",
      "Three.js",
      "Accessibility",
    ],
    imageUrl: "/aura.png",
  },
  {
    title: "E-Commerce Website",
    description:
      "Built a full-stack e-commerce platform with product listings, cart management, authentication, role-based admin access, and secure backend APIs.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    imageUrl: "/ecom.png",
  },
  {
    title: "Biometric Face Authentication System",
    description:
      "Implemented a face-based authentication system using webcam capture and deep learning models. Enabled secure login with real-time face verification against stored embeddings.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "TensorFlow.js",
      "FaceAPI",
    ],
    imageUrl: "/auth.png",
  },
  {
    title: "Smart Helmet – IoT Safety System",
    description:
      "Developed an IoT-based smart helmet to detect helmet usage, alcohol consumption, and accidents. Integrated real-time alerts and emergency notification systems.",
    technologies: [
      "IoT",
      "ESP32",
      "Sensors",
      "Real-time Monitoring",
      "Alert System",
    ],
    imageUrl: "/helemt.jpg",
  },
  {
    title: "AgriScan – Crop Disease Detection System",
    description:
      "Developed an AI-powered crop disease detection system for potato and tomato plants. Used deep learning models with OpenCV preprocessing and deployed via Flask/Streamlit web interface.",
    technologies: [
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Flask",
      "Streamlit",
    ],
    imageUrl: "/agri.png",
  },
],


  education: [
    {
      institution: "S.R.M Institute of Science and Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Aug 2023 – Present",
      location: "Chennai, India",
      details: "CGPA: 9.45",
    },
    {
      institution: "Army Public School, Cantt Kanpur",
      degree: "Senior Secondary (PCM & Computer Science)",
      duration: "Apr 2009 – Jun 2022",
      location: "Kanpur, India",
      details: "XII: 76%, X: 77.2%",
    },
  ],

  achievements: [
  {
    title: "Winner – Tem-E-Thon",
    organization: "Temenos",
    description:
      "Winner of a 24-hour national-level hackathon conducted by Temenos for building an innovative technology solution.",
  },
  {
    title: "1st Runner-Up – HackZ’24",
    organization: "Anna University",
    description:
      "Secured first runner-up position at a 24-hour national-level hackathon organized by CSEA, Anna University.",
  },
  {
    title: "2nd Runner-Up – Hack of Duty",
    organization: "ACM-SIGKDD",
    description:
      "Achieved second runner-up position in a national-level hackathon focused on data-driven and AI-based solutions.",
  },
  {
    title: "Finalist (Top 8) – HACK-O-HIRE 2025",
    organization: "Barclays",
    description:
      "Selected among the top 8 finalist teams nationwide in Barclays HACK-O-HIRE 2025 hackathon.",
  },
  {
    title: "Finalist (Top 8) – KIRIT 5.0 Case Analysis Competition",
    organization: "Kirloskar Institute of Management",
    description:
      "Selected as a finalist in a national-level case analysis competition focused on business and technology strategy.",
  },
  {
    title: "Global Rank 499 – TCS CodeVita Season 12",
    organization: "Tata Consultancy Services (TCS)",
    description:
      "Achieved a global rank of 499 among thousands of participants in TCS CodeVita Season 12 competitive programming contest.",
  },
  {
    title: "Best User Experience Award – Hack Summit 5.0",
    organization: "Aaruush’24, SRM Institute of Science and Technology",
    description:
      "Awarded for delivering the best user experience among all projects presented at Hack Summit 5.0.",
  },
  {
    title: "Certificate of Merit – Smart Patient Monitoring Alert System",
    organization: "Technknow 2023–2024",
    description:
      "Recognized for presenting and demonstrating the best working model during the Technknow 2023–2024 technical event.",
  },
  {
    title: "Solved 300+ DSA Problems",
    organization: "LeetCode, CodeChef, HackerRank, GeeksforGeeks",
    description:
      "Solved over 300+ data structures and algorithms problems across multiple competitive programming platforms.",
  },
],


  organizations: [
    {
      name: "Coding Ninja Club SRM",
      role: "Technical Member",
      duration: "Sep 2024 – Present",
      location: "Chennai, India",
    },
    {
      name: "Institution of Engineers (India)",
      role: "Student Member",
      duration: "Jan 2024 – Present",
      location: "Chennai, India",
    },
    {
      name: "National Service Scheme",
      role: "Volunteer",
      duration: "Jan 2024 – Aug 2024",
      location: "Chennai, India",
    },
  ],
};

export default resumeData;
