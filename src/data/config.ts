import { Toptal, Fujitsu, Github, Linkedin, Stackoverflow } from "simple-icons-astro";
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
    {title: "Education", history: [
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
    ] },
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
    }
  ],
  projects: [
    {
      title: "Encryptify - Encrupt and Decrypt Messages",
      description: "This is a project description for Encryptify. Encryptify is a web application that allows users to encrypt and decrypt their messages. It uses the Caesar cipher algorithm to encrypt and decrypt messages. The application is built using React, Tailwind CSS, and Firebase.",
      image: "/images/blog/post-1.webp",
      name: "Encryptify",
      githubLink: "https://www.google.com",
      demoLink: "https://www.faceit.com",
      tools: ["Python", "cryptohash", "Flask", "SQLite3", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Salesforce - Manage Sales and Customer Relationships",
      description: "Salesforce is a project description for Salesforce. Salesforce is a web application that allows users to manage their sales and customer relationships. The application is built using React, Tailwind CSS, and Firebase. The application is built using React, Tailwind CSS, and Firebase. The application is built using React, Tailwind CSS, and Firebase.",
      image: "/images/blog/post-2.webp",
      name: "Salesforce",
      githubLink: "https://www.google.com",
      tools: ["React", "Tailwind CSS", "Firebase"],
    }
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
  ]
};
