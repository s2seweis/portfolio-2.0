import React from 'react';
import './Adobe.css';
import { motion } from 'framer-motion';

function Adobe() {
  return (
    <div className="Adobe" id="Adobe">
      <div className="adobe__container">
        <div className="adobe__title">
          {/* <h1>Adobe</h1> */}
        </div>
        <div className="divider"></div>
        <div className="adobe__details">
          <motion.div className="adobe__card">
            <h2>My Adobe Skills</h2>
            <p>
              I have extensive experience with Adobe Creative Cloud, including Photoshop, Illustrator, and InDesign.
              Whether it's creating stunning visuals, designing logos, or crafting engaging layouts, I bring creativity
              and precision to every project.
            </p>
            <p>
              Let's collaborate and bring  
              <a style={{marginLeft:"5px"}} href="your-portfolio-link" target="_blank" rel="noopener noreferrer">
              your ideas to life!
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Adobe;
