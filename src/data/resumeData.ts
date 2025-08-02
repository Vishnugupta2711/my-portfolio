import { Github, Linkedin, Mail } from 'lucide-react';

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

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  socials: {
    icon: typeof Github | typeof Linkedin | typeof Mail | typeof Phone;
    url: string;
    label: string;
  }[];
  about: string;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  organizations: Organization[];
}

const resumeData: ResumeData = {
  name: "Vishnu Gupta",
  title: "Computer Science Engineering Student",
  email: "guptavishnu2711@gmail.com",
  location: "Kanpur, Uttar Pradesh",
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
    "CSE undergraduate at SRM University with a strong passion for web development and emerging technologies. Enthusiastic about solving real-world challenges, contributing to open-source projects, and collaborating on innovative solutions to drive meaningful impact.",
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "C++", "C", "Java", "Python"],
    },
    {
      category: "Frameworks",
      items: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Cloud Services",
      items: ["Github"],
    },
    {
      category: "Miscellaneous",
      items: ["MongoDB", "MySQL", "Figma", "Canva"],
    },
    {
      category: "Backend Tools",
      items: ["Express.js", "Node.js"],
    },
  ],
  projects: [
    {
      title: "Ecosystem-360 (Smart Waste Segregation System)",
      description:
        "Developed an AI-powered smart bin with four compartments—Recycle, Reusable, Compost, and Non-Recyclable—for efficient waste segregation. Integrated Raspberry Pi 4B with a camera module to classify waste in real time using computer vision and machine learning.",
      technologies: [
        "TensorFlow Lite",
        "Computer Vision",
        "Raspberry Pi",
        "Machine Learning",
      ],
      imageUrl:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a user-friendly platform for browsing and purchasing products online. Features include product listings, a shopping cart, and secure payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Biometric Face Authentication",
      description:
        "This project enables users to log in by scanning their faces. It captures facial features via camera and verifies identity against stored data.",
      technologies: ["React", "Node.js", "Express", "TensorFlow.js"],
      imageUrl:
        "https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Aura+ Mental Health",
      description:
        "Voice-Enabled Mental Health Platform for Individuals with Disabilities. Developed an inclusive, accessible mental health platform specifically designed for the disabled community.",
      technologies: ["Voice Recognition", "React", "Node.js", "Accessibility"],
      imageUrl:
        "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Smart Helmet",
      description:
        "The smart helmet IoT project enhances safety by detecting helmet wear, alcohol consumption, and accidents in real-time. It provides timely alerts to users and emergency services.",
      technologies: ["IoT", "Sensors", "Real-time Monitoring", "Alert System"],
      imageUrl:
        "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "AgriScan – Potato and Tomato Leaf Disease Classification System",
      description:
        "Developed an AI-powered crop disease detection system—AgriScan—for potato and tomato plants, capable of classifying leaf diseases and providing actionable treatment suggestions. Integrated a deep learning model trained using TensorFlow and Keras. The system uses OpenCV to preprocess images and offers a web interface via Flask or Streamlit for real-time diagnosis.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Flask", "Streamlit"],
      imageUrl:
        "https://images.pexels.com/photos/6195210/pexels-photo-6195210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  education: [
    {
      institution: "S.R.M Institute of Science and Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023/08 – present",
      location: "Chennai, India",
      
    },
    {
      institution: "Army Public School, Cantt Kanpur",
      degree: "XII(PCM & CS)",
      duration: "2009/04 – 2022/06",
      location: "Kanpur, India",
      
    },
  ],
  achievements: [
    {
      title: "Winner at Tem-E-Thon",
      organization: "TEMENOS at Anna University",
      description:
        "Winner at a 24-hour national-level hackathon on February 8-9, 2025.",
    },
    {
      title: "Finalist (Top 8) in KIRIT 5.0 Case Analysis Competition",
      organization: "Kirloskar Institute of Management",
      description: "Selected as a finalist in the case analysis competition.",
    },
    {
      title: "1st Runner-up at HackZ'24",
      organization: "CSEA, Anna University",
      description:
        "First runner-up at a 24-hour national-level hackathon on Nov 23-24, 2024.",
    },
    {
      title: "2nd Runner-up in Hack of Duty Hackathon",
      organization: "ACM-SIGKDD",
      description: "Secured second runner-up position in the hackathon.",
    },
    {
      title: "Best User Experience track winner in Hack Summit 5.0",
      organization: "Aaruush'24",
      description: "Recognized for the best user experience in the hackathon.",
    },
    {
      title: "Certificate of Merit for Smart Patient Monitoring Alert System",
      organization: "Technknow 2023-2024",
      description:
        "Recognized for demonstrating the best project during the event.",
    },
    {
      title: "Finalist (Top 8) in Hack-O-Hire'25 Hackathon",
      organization: "Barclays",
      description:
        "Selected as a finalist in the hackathon organized by Barclays.",
    },
  ],
  organizations: [
    {
      name: "Coding Ninja Club SRM",
      role: "Technical Member",
      duration: "2024/09 – present",
      location: "Chennai, India",
    },
    {
      name: "The Institution of Engineers (India) [IEI]",
      role: "Member",
      duration: "2024/01 – present",
      location: "Chennai, India",
    },
    {
      name: "National Service Scheme",
      role: "Volunteer",
      duration: "2024/01 – 2024/08",
      location: "Chennai, India",
    },
  ],
};

export default resumeData;