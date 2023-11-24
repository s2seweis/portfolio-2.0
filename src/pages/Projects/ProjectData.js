/* eslint-disable */
import {spotify, airbnb, twitter, reactjs, nextjs, tailwind, framer, typescript, nextauth, mongodb, shop, shop1} from '../../assets/images/index'
import blog1 from './images/blog1.png';
import gmap from './images/gmap.png';
import crwnshop from './images/crwn-shop.png';
import reactrouter from './images/react-router.png';

import { FaReact, FaNextcloud, FaNodeJs, FaSass, FaAws, FaCss3, FaCcStripe, FaCookie, FaFacebook, FaGoogle, FaNode } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiFirebase, SiGatsby, SiStrapi, SiGooglemaps, SiStyledcomponents, SiMongodb, SiExpress } from 'react-icons/si';

export const SliderData = [
  {
    id: 1,
    mainImg: shop1,
    title: "React Shop Advanced",
    secondaryImg: [
      { sId: 11, icon: <FaReact />, name: 'ReactJS' },
      { sId: 12, icon: <SiFirebase />, name: 'Firebase' },
      { sId: 13, icon: <FaNodeJs />, name: 'Node.js' },
      { sId: 14, icon: <FaCss3 />, name: 'Tailwind CSS' },
      { sId: 15, icon: <FaCcStripe />, name: 'Stripe' },
      { sId: 16, icon: <SiRedux />, name: 'Redux' },
    ],
    url: 'https://example.com/project1',
  },
  {
    id: 2,
    mainImg: blog1,
    title: "Blog App/ Gatsby + Strapi",
    secondaryImg: [
      { sId: 21, icon: <FaReact />, name: 'ReactJS' },
      { sId: 22, icon: <SiGatsby />, name: 'Gatsby.js' },
      { sId: 23, icon: <SiStrapi />, name: 'Strapi' },
      { sId: 24, icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { sId: 25, icon: <FaCookie />, name: 'Cookie Banner' },
      { sId: 26, icon: <FaAws />, name: 'AWS S3 Bucket' },
    ],
    url: 'https://example.com/project2',
  },
  {
    id: 3,
    mainImg: gmap,
    title: "React + GMap Api",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiGatsby />, name: 'Gatsby' },
      { sId: 33, icon: <SiGooglemaps />, name: 'GMap Api' },
    ],
    url: 'https://example.com/project3',
  },
  {
    id: 4,
    mainImg: crwnshop,
    title: "React + GMap Api",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <FaCcStripe />, name: 'Stripe' },
      { sId: 33, icon: <SiStyledcomponents />, name: 'Styled Components' },
    ],
    url: 'https://example.com/project3',
  },
  {
    id: 5,
    mainImg: reactrouter,
    title: "React Router + OAuth",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiMongodb />, name: 'MongoDB' },
      { sId: 33, icon: <SiExpress />, name: 'Express' },
      { sId: 33, icon: <FaFacebook />, name: 'Facebook OAuth' },
      { sId: 33, icon: <FaGoogle />, name: 'Google Auth' },
      { sId: 33, icon: <FaNode />, name: 'Node Mailer' },
    ],
    url: 'https://example.com/project3',
  },
  {
    id: 6,
    mainImg: gmap,
    title: "React + GMap Api",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiGatsby />, name: 'Gatsby' },
      { sId: 33, icon: <SiGooglemaps />, name: 'GMap Api' },
    ],
    url: 'https://example.com/project3',
  },
];
