/* eslint-disable */
import React from 'react'
import './About.css'
import cv from '../../assets/cv2.pdf'
// import Lottie from 'lottie-react'
// import data from '../../images/data.json'

function About({ scrollValue }) {

  return (
      <div className="About" id="About">
        <div
          className={scrollValue ? "about__container animation": "about__container animation__out"}>
          <div
            className="about_iconcontainer">
              {/* <Lottie animationData={data}  loop={true}/> */}
              <div className='circle'></div>
          </div>
          <div 
            className="about__row">
            <div className="about__section">
              <h1 className="about__me">About Me</h1>
            </div>
            <div className="detail__container">
              <h1 className="about__greetings">Hi, I'm <span className="about__name">Sebastian Weissenborn</span> </h1>
              <p className="about__text">Looking for a job opportunity for a ReactJS Developer position to start my career in Web Development. My passion is focused on developing applications with the use of Modern Javascript Library and Frameworks.</p>
            </div>
            <a style={{margin:"20px auto", padding:"15px", width:"auto", fontSize:"15px"}} href={cv} download className='download__cv'>Download CV</a>
          </div>      
        </div>
      </div>
  )
}

export default React.memo(About)

