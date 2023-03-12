import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Intern",
    company_name: "Krixi Corporations",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2021 - April 2022",
    points: [
      "Developed a project to automatically convert React class-based components to functional components by manipulating the Abstract Syntax Tree and ASTExplorer.",
      "Wrote a research paper with my team and published it on reputed international platforms.",
      "Worked as a backend developer to write React-Codemod, which facilitates automated refactoring of class-based React code to equivalent function-based React code.",
    ],
  },
  {
    title: "SOFTWARE DEVELOPER INTERN",
    company_name: "INNOTHOUGHTS SYSTEMS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2022",
    points: [
      "Led a team of 4 developers to successfully develop the Guidemedoc project, showcasing strong leadership and communication skills while managing a foreign client.",
      "Worked as a full-stack developer, contributing to the development of various components of the project.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Improved page loading time from 27 seconds to 2.3 seconds by implementing Lazy Loading, resulting in a rich user experience.",
      "Actively participated in client meetings, providing valuable inputs in project flow and management.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CARE.FI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "As a member of the founding team, I played a key role in the development and implementation of a loan origination system (LOS) that streamlined the loan application process and increased efficiency.",
      "Responsible for the design and management of internal tools, including a Loan Management System (LMS) and a sales dashboard, which provided valuable data insights and enhanced team productivity",
      "Collaborated closely with the design team, product team, and business stakeholders to bring innovative products from concept to reality by effectively communicating requirements and managing timelines",
      "Demonstrated strong leadership skills by successfully hiring and managing a front-end intern team, providing mentorship and guidance to ensure their professional development and success.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
