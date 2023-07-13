import {
  mobile,
  creator,
  back_end,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  postgre,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  graphql_dev,
  shopify,
  tetris,
  puzzlecam,
  io_game,
  project_manager,
  front_end,
  pathfinder,
  react_developer,
  zoryana,
  zoryana_admin,
  graphql,
  diploma,
  feature,
  traits,
  developer,
  heart,
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
    title: "Front-End Developer",
    icon: front_end,
  },
  {
    title: "React Developer",
    icon: react_developer,
  },
  {
    title: "Backend Developer",
    icon: back_end,
  },
  {
    title: "GraphQL Services Developer",
    icon: graphql_dev,
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
    name: "PostgreSQL",
    icon: postgre,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Computer Lover",
    company_name: "",
    icon: heart,
    iconBg: "#383E56",
    date: "",
    points: [
      "Adore everything related to computer technologies.",
      "I've been using them since 5-years old.",
      "I have the desire to improve in this technologies and work with them for life.",
      "I've been trying myself in different computer competencies such as 3D-modeling, game development, photoshopping, cybersecurity and especially web-development.",
    ],
  },
  {
    title: "Programmer",
    company_name: "",
    icon: developer,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I've been programming and enjoying it for over 4 years.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Codding with TypeScript or JavaScript.",
      "Designing API's with the fastest server technologies - Node/Express.",
      "Never frustrated with the endless learning of the latest technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Have some experience with other programming languages such as Python, C++ and Lua.",
    ],
  },
  {
    title: "Character Traits",
    company_name: "",
    icon: traits,
    iconBg: "#FFFFFF",
    date: "",
    points: [
      "Always staying calm, not being conflict-prone, cautious and rational.",
      "Setting clear objectives and remaining dedicated to accomplishing goals.",
      "Known for adhering to strict schedules and self-imposed deadlines, maintaining a high level of accountability, and consistently delivering results.",
      "Proficient in prioritizing tasks, effectively allocating resources, and meeting deadlines, ensuring optimal use of time and resources.",
    ],
  },
  {
    title: "Peculiarities",
    company_name: "",
    icon: feature,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Endlessly self-studying and developing necessary knowledge, skills and traits.",
      "Having willingness to changes.",
      "Being interested in learning new languages. Advanced in English.",
    ],
  },
  {
    title: "Degrees",
    company_name: "",
    icon: diploma,
    iconBg: "#383E56",
    date: "",
    points: [
      "Dragomanov Ukrainian National University (specialization «Digital technologies», Bachelor's degree, finished)",
      "Dragomanov Ukrainian National University (specialization «Digital technologies», Master's degree, on-progress)",
      "National Aviation University (specialization «Software Engineering», Master's degree, on-progress)"
    ]
  }
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
    name: "Zoryana App",
    description:
      "Imagine a seamless online restaurant experience where you can browse and select dishes to your heart's content, add them to your virtual cart, and effortlessly place your order with just a few clicks. That's exactly what you'll get with our Internet restaurant, built with React and Typescript and powered by the secure and reliable Stripe payment system. From savory entrees to decadent desserts, you can easily search and filter our menu to find your favorite flavors. And once you've made your selections, simply head to checkout and let Stripe handle the rest. With our easy-to-use administrative panel, you can keep track of all your orders and ensure a smooth and satisfying experience for all.",
    tags: [
      {
        name: "React",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "styled-components",
        color: "hsl(317deg,70%,73%)",
      },
      {
        name: "redux-toolkit",
        color: "hsl(264deg,46%,50%)",
      },
      {
        name: "api",
        color: "hsl(343deg,84%,52%)",
      },
    ],
    image: zoryana,
    source_code_link: "https://github.com/dimahoncharenko/",
  },
  {
    name: "Zoryana Admin",
    description:
      "The administrative panel of Zoryana app in which the restaurant owner or manager can manage orders, view sales reports, and update menu items. The admin panel requires login credentials and except login, the admin is greeted with a dashboard that displays an overview of recent orders, sales reports, and other relevant data. The admin can view all orders placed through the app and mark them as fulfilled, which updates the order status in real-time for the customer. The admin can also cancel orders if needed. The admin can add, edit, or delete menu items, including their name, description, price, and image. Changes made to the menu are immediately reflected in the app.",
    tags: [
      {
        name: "React",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "redux-toolkit",
        color: "hsl(264deg,46%,50%)",
      },
      {
        name: "Material UI",
        color: "hsl(210deg,100%,50%)",
      },
      {
        name: "api",
        color: "hsl(343deg,84%,52%)",
      },
    ],
    image: zoryana_admin,
    source_code_link: "https://github.com/dimahoncharenko/",
  },
  {
    name: "React Tetris",
    description:
      "The React.js Tetris game is a beautifully designed and functional game that brings the classic Tetris experience to the modern web.  Whether you are a Tetris veteran or a newcomer to the game, this version is sure to provide hours of enjoyment.",
    tags: [
      {
        name: "react",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "styled-components",
        color: "hsl(317deg,70%,73%)",
      },
    ],
    image: tetris,
    source_code_link: "https://github.com/dimahoncharenko/new_tetris",
  },
  {
    name: "IO Canvas Game",
    description:
      "The game's graphics and animations are all created using the Canvas API, giving it an IO arcade game feel. TypeScript is used to add structure and organization to the code, making it easier to maintain and update. Overall, the game is a fun and challenging that will keep you entertained for hours as you blast your way through space and collect as many points as possible!",
    tags: [
      {
        name: "canvas",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "sass",
        color: "hsl(317deg,70%,73%)",
      },
    ],
    image: io_game,
    source_code_link: "https://github.com/dimahoncharenko/new_tetris",
  },
  {
    name: "Visualizer of Pathfinder",
    description:
      "A functional visualizer of graph algorithms built on React.js can provide an interactive and engaging way for users to understand and learn about these complex algorithms. The visualizer includes various customization options. For instance, the user could change the algorithm, change the size of the matrix and add obstacles to the path.",
    tags: [
      {
        name: "react",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "styled-components",
        color: "hsl(317deg,70%,73%)",
      },
    ],
    image: pathfinder,
    source_code_link: "https://github.com/dimahoncharenko/visualizer",
  },
  {
    name: "PuzzleCam Game",
    description:
      "A puzzle game built on React.js that uses web-cam and saves scores in a database could be a fun and engaging way for users to challenge themselves. The game would work by using the user's webcam to capture an image of the user, which would then be used as the basis for a puzzle. The user would be presented with a scrambled image, and would have to drag and drop the pieces into the correct position to solve the puzzle.",
    tags: [
      {
        name: "react",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "postgre",
        color: "hsl(206deg,48%,37%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "node",
        color: "hsl(109deg,40%,46%)",
      },
    ],
    image: puzzlecam,
    source_code_link: "https://github.com/dimahoncharenko/puzzle-cam-game",
  },
  {
    name: "Project Manager",
    description:
      "The project manager is the web application designed to help users manage their projects. It allows users to create new projects, add tasks and assign them to team members, set status, and get details of projects. The application is built using React.js and TypeScript, which provide a robust and efficient development environment. To handle data fetching and management, Apollo Client was used, which simplifies the process of working with GraphQL. The GraphQL API was built on top of Express.js, a popular web framework for Node.js. Express.js was chosen for its simplicity and flexibility, making it easy to build a robust API that can handle complex queries and mutations.",
    tags: [
      {
        name: "react",
        color: "hsl(192deg,95%,68%)",
      },
      {
        name: "typescript",
        color: "hsl(211deg,60%,48%)",
      },
      {
        name: "Material UI",
        color: "hsl(210deg,100%,50%)",
      },
      {
        name: "GraphQL",
        color: "hsl(325deg, 62%, 55%)",
      },
      {
        name: "api",
        color: "hsl(343deg,84%,52%)",
      },
    ],
    image: project_manager,
    source_code_link: "https://github.com/dimahoncharenko/",
  },
];

export { services, technologies, experiences, testimonials, projects };
