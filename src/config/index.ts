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
        "Developed a smart web application integrating a chatbot for document and task retrieval using Microsoft 365 tools.",
        "Implemented authentication systems, KPI dashboards, and personalized user interfaces.",
        "Technologies used: Python, Django, React, Microsoft Graph API, LangChain, HuggingFace, OAuth.",
      ],
    },
    {
      company: "Educational Center Mobdie",
      position: "End-of-Study Project Intern",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      summary: [
        "Developed a comprehensive web application for managing syndicates and residents using modern web technologies.",
        "Built responsive user interfaces and implemented efficient backend systems for data management.",
        "Technologies used: Laravel, React.",
      ],
    },
    {
      company: "Faculty of Sciences and Techniques, Fès",
      position: "Student Developer - Academic Projects",
      startDate: "2023",
      endDate: "2024",
      summary:
        "Completed multiple academic projects including task management systems, employee management applications, resource management platforms, and machine learning applications for traffic sign recognition and heart disease prediction.",
    },
  ],
  projects: [
    {
      name: "Traffic Sign Recognition App",
      summary: "Machine learning application for real-time traffic sign detection and classification using deep learning techniques.",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Traffic-Sign-Recognition-Main-App",
      image: "/spotifu.png",
    },
    {
      name: "Coronary Heart Disease Prediction",
      summary: "PySpark-based data science application predicting 10-year coronary heart disease risk using advanced ML algorithms.",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Coronary-Heart-Disease-Prediction-PySpark",
      image: "/shopify-clon.png",
    },
    {
      name: "Syndicate Management System",
      summary: "Full-stack web application for managing syndicates and residents with React frontend and PHP backend.",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Syndicat_react",
      image: "/clone-ig.png",
    },
    {
      name: "Audio-Image Multimodal Classification",
      summary: "Deep learning project combining audio and image data for advanced multimodal classification tasks.",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Audio-Image-multimodal-Classification---Deep-Learning",
      image: "/raja.png",
    },
    {
      name: "Graph Neural Networks for Molecular Classification",
      summary: "GNN and GCN implementation for MUTAG dataset classification, exploring graph-based deep learning approaches.",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Graphe-Classification-MUTAG-GNN---GCN-",
      image: "/spotifu.png",
    },
    {
      name: "Speech Recognition System",
      summary: "Language and speech recognition system using MFCC features and Hidden Markov Models (HMM).",
      linkPreview: "/",
      linkSource: "https://github.com/sihamdemami/Langue-Parole-recognition-Mfcc-HMM-",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Siham Demami, a passionate Master’s student in Data Science and Intelligent Systems with a strong interest in blending data-driven insights with intelligent applications. With experience in web development, data analytics, and machine learning, I thrive on turning complex challenges into practical, scalable solutions.

      Over the past years, I’ve worked on projects ranging from smart web applications with integrated chatbots to machine learning models for healthcare and traffic sign recognition. Skilled in Python, Java, React, and SpringBoot, I enjoy building solutions that are not only technically robust but also impactful for users.
    `,
    image: "/me.jpg",
  },
};

// #5755ff
