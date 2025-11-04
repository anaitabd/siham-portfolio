import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Siham Demami — Data Science & Web Developer",
  author: "Siham Demami",
  description:
    "Master's student in Data Science and Intelligent Systems with expertise in web development, data analytics, and machine learning. Based in Fès, Morocco.",
  lang: "en",
  siteLogo: "/me.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/sihamdemami" },
    { text: "Email", href: "mailto:siham.demami1@gmail.com" },
    { text: "Github", href: "https://github.com/sihamdemami" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://siham-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Siham Demami",
    specialty: "Data Science & Web Developer",
    tagline: "Turning data into intelligent web experiences",
    summary:
      "Master's student in Data Science and Intelligent Systems based in Fès, Morocco. Specializing in web development, data analytics, and machine learning with experience in Python, Java, SpringBoot, and React.",
    email: "siham.demami1@gmail.com",
  },
  experience: [
    {
      company: "MG2 Engineering - Capgemini Engineering",
      position: "End-of-Study Intern - Smart Web Application Development",
      startDate: "Feb 2025",
      endDate: "Jul 2025",
      summary: [
        "Developed a smart chatbot web application using LangChain and Microsoft Graph API — streamlined document retrieval and task management, reducing internal search time by 60%",
        "Implemented secure OAuth authentication, interactive KPI dashboards, and personalized user interfaces, improving user engagement by 45%",
        "Built with Python, Django, React, and HuggingFace models for intelligent document understanding",
      ],
    },
    {
      company: "Educational Center Mobdie",
      position: "Full-Stack Developer Intern",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      summary: [
        "Architected and delivered a comprehensive web application for syndicate and resident management, serving 500+ users",
        "Designed responsive UI components with React and implemented efficient Laravel backend APIs, reducing data processing time by 40%",
        "Deployed with automated testing, achieving 95% code coverage and zero critical bugs post-launch",
      ],
    },
    {
      company: "Faculty of Sciences and Techniques, Fès",
      position: "Student Developer - Academic Projects",
      startDate: "2023",
      endDate: "2024",
      summary:
        "Led development of 6+ academic projects including ML applications for traffic sign recognition (92% accuracy), heart disease prediction models (88% precision), and full-stack management systems using modern frameworks",
    },
  ],
  projects: [
    {
      name: "Smart Chatbot Web Application",
      summary: "Enterprise chatbot built with LangChain and Microsoft Graph API — reduced internal search time by 60% through intelligent document retrieval and task automation. Features OAuth authentication and real-time KPI dashboards.",
      linkPreview: "https://github.com/sihamdemami",
      linkSource: "https://github.com/sihamdemami",
      image: "/spotifu.png",
      category: "AI",
    },
    {
      name: "Traffic Sign Recognition System",
      summary: "Deep learning application achieving 92% accuracy on real-time traffic sign detection using CNN architectures. Deployed model processes 30 frames per second for autonomous vehicle assistance.",
      linkPreview: "https://github.com/sihamdemami/Traffic-Sign-Recognition-Main-App",
      linkSource: "https://github.com/sihamdemami/Traffic-Sign-Recognition-Main-App",
      image: "/spotifu.png",
      category: "AI",
    },
    {
      name: "Coronary Heart Disease Predictor",
      summary: "PySpark-powered ML application predicting 10-year CHD risk with 88% precision. Processes large-scale health datasets using distributed computing, enabling early intervention for at-risk patients.",
      linkPreview: "https://github.com/sihamdemami/Coronary-Heart-Disease-Prediction-PySpark",
      linkSource: "https://github.com/sihamdemami/Coronary-Heart-Disease-Prediction-PySpark",
      image: "/shopify-clon.png",
      category: "Data Science",
    },
    {
      name: "Syndicate Management Platform",
      summary: "Full-stack web app serving 500+ residents with React frontend and PHP backend. Features include payment tracking, maintenance requests, and automated reporting — reducing admin workload by 70%.",
      linkPreview: "https://github.com/sihamdemami/Syndicat_react",
      linkSource: "https://github.com/sihamdemami/Syndicat_react",
      image: "/clone-ig.png",
      category: "Web",
    },
    {
      name: "Audio-Image Multimodal Classifier",
      summary: "Advanced deep learning project combining audio and visual data streams for classification. Implemented fusion techniques achieving 15% higher accuracy than single-modality approaches.",
      linkPreview: "https://github.com/sihamdemami/Audio-Image-multimodal-Classification---Deep-Learning",
      linkSource: "https://github.com/sihamdemami/Audio-Image-multimodal-Classification---Deep-Learning",
      image: "/raja.png",
      category: "AI",
    },
    {
      name: "Molecular Graph Classification",
      summary: "Graph Neural Network implementation for MUTAG dataset classification. Explored GNN and GCN architectures for molecular property prediction in drug discovery applications.",
      linkPreview: "https://github.com/sihamdemami/Graphe-Classification-MUTAG-GNN---GCN-",
      linkSource: "https://github.com/sihamdemami/Graphe-Classification-MUTAG-GNN---GCN-",
      image: "/spotifu.png",
      category: "Data Science",
    },
  ],
  about: {
    description: `Hi, I'm Siham Demami — a passionate Master's student in Data Science and Intelligent Systems with a mission to build data-driven web applications that bridge AI and exceptional user experiences.

With hands-on experience spanning web development, machine learning, and data analytics, I thrive on transforming complex challenges into elegant, scalable solutions. From developing smart chatbots that slash search times by 60% to architecting full-stack platforms serving hundreds of users, I'm driven by measurable impact.

My toolkit includes Python, Java, React, SpringBoot, and cutting-edge ML frameworks like LangChain and HuggingFace. Whether it's deep learning models for healthcare prediction or enterprise web applications with real-time dashboards, I combine technical rigor with creative problem-solving to deliver solutions that matter.

Currently seeking opportunities where I can leverage my dual expertise in data science and web development to create intelligent, user-centric applications.`,
    image: "/me.jpg",
  },
};

// #5755ff
