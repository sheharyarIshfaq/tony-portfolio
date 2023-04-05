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
} from "../assets";

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
    title: "ReactJS",
    icon: reactjs,
  },
  {
    title: "NodeJS",
    icon: nodejs,
  },
  {
    title: "Python",
    icon: backend,
  },
  {
    title: "Java",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front end Software Developer",
    company_name: "6IX1INMOTION",
    icon: web,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Worked with the React Library in JavaScript to create and maintain complex component trees. Used props to pass data up and down files and implemented hooks such as useState and useEffect to create dynamic and fast web pages as per client needs.",
      "Implemented knowledge of front end design and CSS to create visually appealing, responsive and interactive UIs.",
      "Used APIs such as Twilio to create chat box systems connecting customer service agents to their customers and Stripe to create payment systems to process credit card payments as per client needs. Sent and received HTTP requests to manage data and communicate with the backend.",
      "Collaborated with other developers through Git version control on GitHub to effectively push changes to individual sub branches before being pushed to master/main branch.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "EmChill",
    icon: web,
    iconBg: "#383E56",
    date: "May 2020 - April 2021",
    points: [
      "Worked in Python to aid senior developer in designing and developing RESTful APIs as well as Implementing OAuth2.0 authentication. Documented API endpoints using Swagger and OpenAPI to create fast and efficient requests.",
      "Helped create and manage NoSQL databases using MongoDB and optimized database queries for data fetching efficiency.",
      "Used the Linux Operating system to interact and work with web servers that were currently deployed.",
    ],
  },
  {
    title: "AI text to image generator",
    company_name: "Personal Project",
    icon: web,
    iconBg: "#383E56",
    // date: "date",
    points: [
      "Created a MERN stack web application using OpenAI’s API which generates absolutely any image based on a text input entered by the user who is then able to share and download the generated image.",
      "Created a clean and responsive user interface using components, state management, props, JSX code and more to display a dynamic web page which communicates fast and efficiently with the NodeJS (Express) backend connected to the MongoDB database.",
      "Implemented CRUD functionality where users are able to create, view, update and discard posts based on their liking. Deployed application, view here: <a href='https://ai-image-generation.com/' target='_blank'>https://ai-image-generation.com/</a>",
    ],
  },
  {
    title: "title",
    company_name: "company_name",
    icon: web,
    iconBg: "#383E56",
    date: "date",
    points: ["description"],
  },
  {
    title: "title",
    company_name: "company_name",
    icon: web,
    iconBg: "#383E56",
    date: "date",
    points: ["description"],
  },
  {
    title: "title",
    company_name: "company_name",
    icon: web,
    iconBg: "#383E56",
    date: "date",
    points: ["description"],
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
