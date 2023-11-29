/* eslint-disable */
import {spotify, airbnb, twitter, reactjs, nextjs, tailwind, framer, typescript, nextauth, mongodb, shop, shop1} from '../../assets/images/index'
import blog1 from './images/blog.png';
import gmap from './images/gmap-v1.png';
import crwnshop from './images/crwn-shop.png';
import reactrouter from './images/router1.webp';
import chatapp from './images/chat.webp'
import streamer from './images/streamer.png'
import qrcode from './images/qrcode.png'
import reactnative from './images/second-react-native.webp'; 
import portfolio from './images/portfolio.webp'; 
import bookcar from './images/book-car.webp'; 
import survey from './images/survey-v1.webp';
import typescript1 from './images/typscript.webp';
import postgre from './images/postgre.png';

import { FaReact, FaNextcloud, FaNodeJs, FaSass, FaAws, FaCss3, FaCcStripe, FaCookie, FaFacebook, FaGoogle, FaNode, FaChartBar } from 'react-icons/fa';
import { SiRedux, SiPostgresql, SiSurveymonkey, SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiGatsby, SiStrapi, SiGooglemaps, SiStyledcomponents, SiMongodb, SiExpress, SiSocketdotio, SiAntdesign } from 'react-icons/si';

export const SliderData = [
  {
    id: 1,
    mainImg: shop1,
    title: "1. React Shop (Advanced)",
    secondaryImg: [
      { sId: 11, icon: <FaReact />, name: 'ReactJS' },
      { sId: 12, icon: <SiFirebase />, name: 'Firebase' },
      { sId: 13, icon: <FaNodeJs />, name: 'Node.js' },
      { sId: 14, icon: <FaCss3 />, name: 'Tailwind CSS' },
      { sId: 15, icon: <FaCcStripe />, name: 'Stripe (Customized)' },
      { sId: 16, icon: <SiRedux />, name: 'Redux' },
    ],
    url: 'https://mellow-cheesecake-83fac5.netlify.app/',
    github: 'https://github.com/s2seweis/reactShop-v01-client'
  },
  {
    id: 2,
    mainImg: blog1,
    title: "2. React Blog/Gatsby & Strapi",
    secondaryImg: [
      { sId: 21, icon: <FaReact />, name: 'ReactJS' },
      { sId: 22, icon: <SiGatsby />, name: 'Gatsby.js' },
      { sId: 23, icon: <SiStrapi />, name: 'Strapi' },
      { sId: 24, icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { sId: 25, icon: <FaCookie />, name: 'Cookie Banner' },
      { sId: 26, icon: <FaAws />, name: 'AWS S3 Bucket' },
    ],
    url: 'https://thesolacelife.com/',
    github: 'https://github.com/s2seweis/gatsby4-6-1'
  },
  {
    id: 3,
    mainImg: gmap,
    title: "3. React/Gatsby & GMap Api",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiGatsby />, name: 'Gatsby' },
      { sId: 33, icon: <SiGooglemaps />, name: 'GMap Api' },
    ],
    url: 'https://lively-tarsier-5756e6.netlify.app/',
    github: 'https://github.com/s2seweis/googlemap-gatsby'
  },
  {
    id: 4,
    mainImg: crwnshop,
    title: "4. React - Crwn Shop",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <FaCcStripe />, name: 'Stripe' },
      { sId: 33, icon: <SiStyledcomponents />, name: 'Styled Components' },
      { sId: 34, icon: <SiTypescript />, name: 'Typscript' },
    ],
    url: 'https://magenta-stardust-71ce34.netlify.app/',
    github: 'https://github.com/s2seweis/crwn-pwa-v2.git'
  },
  {
    id: 5,
    mainImg: reactrouter,
    title: "5. React - Router v6 & OAuth",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiMongodb />, name: 'MongoDB' },
      { sId: 33, icon: <SiExpress />, name: 'Express' },
      { sId: 34, icon: <FaFacebook />, name: 'Facebook OAuth' },
      { sId: 35, icon: <FaGoogle />, name: 'Google Auth' },
      { sId: 36, icon: <FaNode />, name: 'Node Mailer' },
    ],
    url: 'https://luxury-flan-610a79.netlify.app/',
    github: 'https://github.com/s2seweis/react-router-v6-client'
  },
  {
    id: 6,
    mainImg: chatapp,
    title: "6. React - Chat with Mongo DB & Websockets (login credentials at the end of the readme.md file)",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiMongodb />, name: 'Mongo DB' },
      { sId: 33, icon: <SiExpress />, name: 'Express' },
      { sId: 34, icon: <SiSocketdotio />, name: 'Socket IO' },
    ],
    url: 'https://fluffy-nasturtium-6d0c81.netlify.app/',
    github: 'https://github.com/s2seweis/chat-app-websockets'
  },
  {
    id: 7,
    mainImg: streamer,
    title: "7. React - Streaming with Mongo DB and Grid FS",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <SiMongodb />, name: 'Mongo DB' },
      { sId: 34, icon: <SiMongodb />, name: 'Grid FS' },
      { sId: 33, icon: <SiExpress />, name: 'Express' },
    ],
    url: 'https://endearing-selkie-adaa73.netlify.app/',
    github: 'https://github.com/s2seweis/streaming-client'
  },
  {
    id: 8,
    mainImg: qrcode,
    title: "8. React - QR Code Generator",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'ReactJS' },
      { sId: 32, icon: <FaReact />, name: 'React-Qr_code' },
    ],
    url: 'https://helpful-starlight-1f9b7f.netlify.app/',
    github: 'https://github.com/s2seweis/react-qr-code-generator'
  },
  {
    id: 9,
    mainImg: reactnative,
    title: "9. React Native & Expo",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React Native' },
      { sId: 32, icon: <SiFirebase />, name: 'Firebase' },
      { sId: 33, icon: <FaCcStripe />, name: 'Stripe' },
      { sId: 34, icon: <SiStyledcomponents />, name: 'Styled Components' }
    ],
    url: 'https://expo.dev/@s2seweis/MealsToGo?serviceType=classic&distribution=expo-go',
    github: 'https://github.com/s2seweis/second-react-native-app'
  },
  {
    id: 10,
    mainImg: portfolio,
    title: "10. React - Portfolio Version 2",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React' },
      { sId: 32, icon: <FaCss3 />, name: 'Css' },
    ],
    url: 'https://idyllic-mooncake-7b63ff.netlify.app/',
    github: 'https://github.com/s2seweis/portfolio-2.0'
  },
  {
    id: 11,
    mainImg: bookcar,
    title: "11. React - Book A Car",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React' },
      { sId: 31, icon: <SiExpress />, name: 'Express' },
      { sId: 32, icon: <SiRedux />, name: 'Redux' },
      { sId: 33, icon: <FaCss3 />, name: 'Mongo DB' },
      { sId: 34, icon: <SiAntdesign />, name: 'Antd' },
    ],
    url: 'https://cool-sawine-707024.netlify.app/',
    github: 'https://github.com/s2seweis/book-a-car'
  },
  {
    id: 12,
    mainImg: survey,
    title: "12. React - Take A Survey with Firebase ",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React' },
      { sId: 31, icon: <SiRedux />, name: 'Redux' },
      { sId: 32, icon: <SiSurveymonkey />, name: 'Survey-React' },
      { sId: 33, icon: <SiFirebase />, name: 'Firebase' },
      { sId: 34, icon: <FaChartBar />, name: 'Chart.js' },
    ],
    url: 'https://jolly-daffodil-b1ab36.netlify.app/',
    github: 'https://github.com/s2seweis/survery-react'
  },
  {
    id: 13,
    mainImg: typescript1,
    title: "13. React - Typscript Playground ",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React' },
      { sId: 32, icon: <SiTypescript />, name: 'Typescript' },
    ],
    url: 'https://elaborate-selkie-8ec85d.netlify.app/',
    github: 'https://github.com/s2seweis/tsc-starter'
  },
  {
    id: 14,
    mainImg: postgre,
    title: "14. React - Postgre Playground ",
    secondaryImg: [
      { sId: 31, icon: <FaReact />, name: 'React' },
      { sId: 32, icon: <SiPostgresql />, name: 'Postgre SQL' },
    ],
    url: 'https://wonderful-salamander-16e629.netlify.app/',
    github: 'https://github.com/s2seweis/sql-starter'
  },
];
