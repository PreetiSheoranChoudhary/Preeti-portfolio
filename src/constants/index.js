import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Inter Full Stack Developer",
    company: "Hausvalley.com.",
    description: `As a front-end developer at Hausvally.com, I contributed
 to designing and implementing user-friendly web
 interfaces. My role involved translating design mockups
 (Figma) into responsive and interactive websites (React,
 TailwindCSS), ensuring an excellent user experience.
 Seeded dummy data into the database for accurate
 mockups and APIs. Used NextJS framework to manage
 the routing and APIs.
`,
    technologies: ["Javascript","TypeScript", "React.js", "Next.js", "Tailwindcss", "Node.js", "MongoDB","Svelte5.js"],
  },
 
  
];

export const PROJECTS = [
  {
    title: "Dashboard ",
    image: project1,
    description:
      "I have experience creating a dashboard using Next.js and Tailwind CSS. This project involved designing a responsive, dynamic user interface with a focus on clean code. I utilized JSON files to store data and developed APIs to fetch and display the data. I used NodeJS in this project",
    technologies: ["Next.js", "Tailwind CSS", "JSON", "ShadCN UI", "Node.js"],
  },
  {
    title: "Todo list",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Next.js", "Tailwind CSS", "typeScript", "JSON"],
  },
  {
    title: "Svelte Website",
    image: project3,
    description:
      " I have experience building a basic website using Svelte as part of my learning journey. This project helped me understand Svelte's core concepts, including its reactivity and lightweight framework structure, while enhancing my front-end development skills",
    technologies: ["Svelte.js", "Tailwind CSS", "TypeScript"],
  },
];

export const CONTACT = {
  address: "503 viman ,sector 9A ,Gurgaon ",
  phoneNo: "+91 93106 15275 ",
  email: "preetisheoran0105@gmail.com",
};
