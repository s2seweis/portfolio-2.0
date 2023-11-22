import {spotify, airbnb, twitter, reactjs, nextjs, tailwind, framer, typescript, nextauth, mongodb, shop, shop1} from '../../assets/images/index'


import { FaReact, FaNextcloud, FaNodeJs, FaSass, FaAws } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const SliderData = [
  {
    id: 1,
    mainImg: shop1,
    title: "React Shop Advanced",
    secondaryImg: [
      { sId: 11, icon: <FaReact />, name: 'ReactJS' },
      { sId: 12, icon: <SiNextdotjs />, name: 'Next.js' },
      { sId: 13, icon: <FaNodeJs />, name: 'Node.js' },
      { sId: 14, icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
    url: 'https://example.com/project1',
  },
  {
    id: 2,
    mainImg: airbnb,
    title: "Blog App/ Gatsby + Strapi",
    secondaryImg: [
      { sId: 21, icon: <FaReact />, name: 'ReactJS' },
      { sId: 22, icon: <SiNextdotjs />, name: 'Next.js' },
      { sId: 23, icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
    url: 'https://example.com/project2',
  },
  {
    id: 3,
    mainImg: spotify,
    title: "GMap Api",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiNextdotjs />, name: 'Next.js' },
      { sId: 33, icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { sId: 34, icon: <FaSass />, name: 'Sass' },
      { sId: 35, icon: <FaAws />, name: 'AWS' },
    ],
    url: 'https://example.com/project3',
  },
];
