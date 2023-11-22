// data.js
import { 
  FaGithub, 
  FaGit,
  FaHtml5, 
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaAws,
  FaNode 
} from 'react-icons/fa';

import { 
  SiRedux,
  SiGatsby,
  SiNextdotjs,
  SiExpress,
  SiJquery,
  SiMui,
  SiTailwindcss,
  SiNodemon,
  SiPostgresql,
  SiAntdesign,
  SiMongodb,
  SiReactrouter,
  SiStrapi
} from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";

export const skills = [
  { id: 0, type: "Others", name:"Github", icon: <FaGithub /> },
  { id: 1, type: "Others", name:"Git", icon: <FaGit /> },
  { id: 2, type: "Frontend", name:"HTML", icon: <FaHtml5 /> },
  { id: 3, type: "Frontend", name:"ReactJS", icon: <FaReact /> },
  { id: 4, type: "Frontend", name:"Redux", icon: <SiRedux /> },
  { id: 5, type: "Frontend", name:"CSS", icon: <FaCss3Alt /> },
  { id: 6, type: "Frontend", name:"Gatsby", icon: <SiGatsby /> },
  { id: 7, type: "Frontend", name:"Material UI", icon: <SiMui /> },
  { id: 8, type: "Frontend", name:"Sass", icon: <FaSass /> },
  { id: 9, type: "Frontend", name:"React Router", icon: <SiReactrouter /> },
  { id: 10, type: "Framework", name:"Tailwind", icon: <SiTailwindcss /> },
  { id: 11, type: "Framework", name:"Next.js", icon: <SiNextdotjs /> },
  { id: 12, type: "Framework", name:"Bootstrap", icon: <FaBootstrap /> },
  { id: 13, type: "Framework", name:"Gatsby", icon: <SiGatsby /> },
  { id: 14, type: "Framework", name:"Antd", icon: <SiAntdesign /> },
  { id: 15, type: "Framework", name:"Express.js", icon: <SiExpress /> },
  { id: 16, type: "Framework", name:"jQuery", icon: <SiJquery /> },
  { id: 17, type: "Framework", name:"Node.js", icon: <FaNode /> },
  { id: 18, type: "Backend", name:"Nodemon", icon: <SiNodemon /> },
  { id: 19, type: "Backend", name:"Postgres SQL", icon: <SiPostgresql /> },
  { id: 20, type: "Backend", name:"Firestore", icon: <IoLogoFirebase /> },
  { id: 21, type: "Backend", name:"MongoDB", icon: <SiMongodb /> },
  { id: 22, type: "Backend", name:"AWS", icon: <FaAws /> },
  { id: 23, type: "Backend", name:"Strapi", icon: <SiStrapi /> },
];