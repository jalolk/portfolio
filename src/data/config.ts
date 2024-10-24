import {
  Toptal,
  Fujitsu,
  Github,
  Linkedin,
  Stackoverflow,
} from "simple-icons-astro";
import { University, GraduationCap } from "lucide-astro";
import {
  React,
  Typescript,
  Python,
  Html5,
  Css3,
  Tailwindcss,
  Mongodb,
  Postgresql,
  Git,
  Jest,
  Nextdotjs,
  Googlecloud,
  Docker,
  Cypress,
  Selenium,
  Githubactions,
  Graphql,
  Postman,
} from "simple-icons-astro";

export const config = {
  siteName: "Jalol Khamroev | Portfolio",
  siteDescription:
    "Jalol Khamroev is a full stack engineer specializing in building scalable web applications.",
  name: "Jalol Khamroev",
  tagline: "Full Stack Engineer / QA Engineer",
  siteUrl: "https://www.codpud.xyz",
  email: "jalol.khamroev@codpud.xyz",
  defaultOgImage: "/images/avatar.webp",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/jalolk",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jalol-khamroev-2771351a0",
      Icon: Linkedin,
    },
    {
      name: "Stackoverflow",
      url: "https://stackoverflow.com/users/14634521/codpud",
      Icon: Stackoverflow,
    },
  ],
  profile: [
    {
      title: "Education",
      history: [
        {
          title: "M.S. Computer Science",
          establishment: "University of Lodz",
          startYear: "2019",
          endYear: "2022",
          Logo: University,
        },
        {
          title: "B.S. Computer Science",
          establishment: "University of Lodz",
          startYear: "2023",
          endYear: "2025",
          Logo: GraduationCap,
        },
      ],
    },
    {
      title: "Experience",
      history: [
        {
          title: "Software Engineer in Test",
          establishment: "Toptal",
          startYear: "2021",
          endYear: "Present",
          Logo: Toptal,
        },
        {
          title: "IT Service Desk Agent",
          establishment: "Fujitsu",
          startYear: "Jul 2021",
          endYear: "Oct 2021",
          Logo: Fujitsu,
        },
      ],
    },
  ],
  projects: [
    {
      title:
        "Play2do: Comprehensive QA & Testing Automation for Task Manager App",
      description:
        "Play2do is a task management app showcasing best practices in QA automation and testing. Built with NestJS, React, Vite, and MongoDB, it demonstrates unit, integration, and end-to-end testing using Jest, Playwright, and Bruno for API testing. Ideal for QA engineers and developers looking to implement comprehensive testing strategies in modern web apps.",
      image: "/images/project/play2do.webp",
      name: "Play2Do",
      githubLink: "https://github.com/jalolk/play2do",
      tools: ["NestJS", "Vite", "MongoDB", "Jest", "Playwright", "Bruno"],
    },
    {
      title: "ClimQA: Frontend Testing Template with CI/CD & Automation",
      description:
        "A comprehensive QA-focused template demonstrating industry best practices for frontend testing architecture. Uses a weather dashboard as a practical example to showcase various testing strategies and CI/CD implementation.",
      image: "/images/project/climqa.webp",
      name: "ClimQA",
      githubLink: "https://github.com/jalolk/climqa",
      demoLink: "https://climqa-cfcysydrr-jalolks-projects.vercel.app/",
      tools: ["Vite", "Playwright", "GitHub Actions"],
    },
    {
      title: "Astro-Powered SEO-Optimized Portfolio",
      description:
        "Built a lightning-fast portfolio website using Astro, TypeScript, and TailwindCSS, showcasing the power of static site generation with modern web technologies. The site features blazing fast load times, an SEO-optimized structure, responsive design, an integrated Markdown-supported blog, and a dynamic project showcase, all optimized for performance and user experience. This project demonstrates proficiency in modern web development, emphasizing speed, SEO, and maintainability, serving as both a personal showcase and a high-performance template for developers.",
      image: "/images/project/portfolio.webp",
      name: "Portfolio",
      githubLink: "https://github.com/jalolk/portfolio",
      demoLink: "https://codpud.xyz/",
      tools: ["Astro", "Tailwind CSS", "DaisyUI"],
    },
  ],
  skills: [
    React,
    Typescript,
    Python,
    Html5,
    Css3,
    Tailwindcss,
    Mongodb,
    Postgresql,
    Git,
    Jest,
    Nextdotjs,
    Googlecloud,
    Docker,
    Cypress,
    Selenium,
    Githubactions,
    Graphql,
    Postman,
  ],
};
