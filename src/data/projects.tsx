import {
  dermatify,
  vlecture,
  todolist,
  pomodoro,
  invite,
  nubengine,
  portfolioOld,
  portfolioFahd,
  blogApi,
  todolistAPI,
  portfolioNew,
} from "../../public";

import {
  BLOG_API_LINK,
  CURR_PORTFOLIO_LINK,
  JWT_TEMPLATE_LINK,
  OLD_PORTFOLIO_LINK,
  POMODORO_LINK,
  TODOLIST_API_LINK,
  TODOLIST_LINK,
  VLECTURE_LINK,
} from "./links";

export const projects = [
  {
    title: "Dermatify",
    description:
      "A capstone project for Bangkit Academy 2024 that aims to increase awareness regarding skin issues and its treatments.",
    link: "",
    image: dermatify,
    technologies: [
      "HapiJS",
      "FastAPI",
      "Firestore",
      "Cloud Bucket",
      "Terraform",
      "GCP",
    ],
  },
  {
    title: "Vlecture",
    description:
      "A PWA that helps students record lectures and transforms them into notes, flashcards, and quizzes.",
    link: VLECTURE_LINK,
    image: vlecture,
    technologies: [
      "FastAPI",
      "NextJS",
      "OpenAI",
      "PostgreSQL",
      "TailwindCSS",
      "AWS",
    ],
  },
  {
    title: "Todolist",
    description:
      "A full stack web application featuring JWT authentication, priority flags, and task manipulation capabilities.",
    link: TODOLIST_LINK,
    image: todolist,
    technologies: [
      "NextJS",
      "ExpressJS",
      "MongoDB",
      "TailwindCSS",
      "GCP",
      "Netlify",
    ],
  },
  {
    title: "Pomodoro",
    description:
      "A productivity tool utilizing the pomodoro technique featuring a soothing alarm to keep you focused.",
    link: POMODORO_LINK,
    image: pomodoro,
    technologies: ["ViteJS", "TailwindCSS", "Netlify"],
  },
  {
    title: "Invite",
    description:
      "A team-matcher project for the Software Engineering class for students to find teams to participate in a competition.",
    link: "",
    image: invite,
    technologies: ["Django", "PostgreSQL", "TailwindCSS", "Docker", "GCP"],
  },
  {
    title: "Nubengine",
    description:
      "A project for the Information Retrieval class utilizing TF-IDF for indexing and uses medical datasets from ir-datasets.",
    link: "",
    image: nubengine,
    technologies: ["Django", "TailwindCSS", "GCP"],
  },
  {
    title: "Daffa's Old Portfolio",
    description:
      "My first iteration of a portfolio website featuring finished projects, experiences, technologies, and socials.",
    link: OLD_PORTFOLIO_LINK,
    image: portfolioOld,
    technologies: ["ViteJS", "TailwindCSS", "Netlify"],
  },
  {
    title: "Fahd's Portfolio",
    description:
      "For my brother, a website to share his experiences, achievements, and opinions.",
    link: "",
    image: portfolioFahd,
    technologies: ["NextJS", "TailwindCSS", "Netlify"],
  },
  {
    title: "Blog API",
    description:
      "The back end REST API for my portfolio's blog section utilizing gin.",
    link: BLOG_API_LINK,
    image: blogApi,
    technologies: ["Gin", "MongoDB", "Atlas", "Koyeb"],
  },
  {
    title: "Todolist API",
    description:
      "The back end REST API for my todolist app that utilizes ExpressJS features JWT authentication.",
    link: TODOLIST_API_LINK,
    image: todolistAPI,
    technologies: ["ExpressJS", "PostgreSQL", "ElephantSQL", "GCP"],
  },
  {
    title: "Daffa's New Portfolio",
    description: "My current portfolio website.",
    link: CURR_PORTFOLIO_LINK,
    image: portfolioNew,
    technologies: ["NextJS", "TailwindCSS", "Netlify"],
  },
  {
    title: "JWT Template",
    description:
      "A public ExpressJS template for JWT authentication and authorization featuring basic user management.",
    link: JWT_TEMPLATE_LINK,
    technologies: ["ExpressJS"],
  },
];
