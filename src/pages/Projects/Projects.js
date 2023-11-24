/* eslint-disable */
import React, { useState } from 'react';
import './Projects.css';
import { FaArrowCircleUp, FaArrowDown, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SliderData } from './ProjectData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Projects({ scrollValue }) {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const currentSlideData = SliderData.filter((data, index) => index === current)[0];

  return (
    <div className="Projects" id="Projects">
      <div className="projects__container">
        <div className="projects__title">
          <h3 className={scrollValue ? "featured__project animation__fromLeft" : "featured__project"}>
            Featured Projects
          </h3>
          <div className="title__section">
            <h1 className={scrollValue ? "title__animation animation__fromRight" : "title__animation"}>
              Project
            </h1>
          </div>
        </div>
        <div className='projects__title'>
          <h3 className={scrollValue ? "featured__project animation__fromLeft" : "featured__project"} style={{ margin: "auto", fontSize: "25px" }}>{currentSlideData.title}</h3>
        </div>
        <div className="project__contents">
          <motion.div
            key={currentSlideData.id}
            className="project__row"
            initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 110 }}
          >
            <LazyLoadImage
              src={currentSlideData.mainImg}
              className="project__photo"
              alt="logo"
              effect='blur'
              placeholderSrc={currentSlideData.mainImg}
            />
            <div className='image__details'>
              {currentSlideData.secondaryImg.map(slide =>
                <div
                  key={slide.sId}
                  className="small__container">
                  {slide.icon}
                  <h1 className="small__text">{slide.name}</h1>
                </div>
              )}
            </div>
            <div className='lower__button'>
              <a target='_blank' href={currentSlideData.url} className='image__title'>
                <h1 className='text_icon'>Visit Page</h1>
                <FaArrowCircleUp fontSize='large' className='projects__icon' />
              </a>
            </div>
            <div className='lower__button'>
              <a style={{color:"black"}} href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Github
              </a>
            </div>

          </motion.div>
          <div className="direction__buttonContainer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}>
              <FaArrowDown
                fontSize='large'
                className='prev__button' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}>
              <FaArrowDown
                fontSize='large'
                className='next__button' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Projects);
