import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import ContactIcon from '../components/ContactIcon/ContactIcon';
import ScrollToTop from 'react-scroll-to-top'
import Adobe from './Adobe/Adobe'
import ParallaxEffect from '../components/ParallaxEffect/ParallaxEffect'

import poster1 from '../components/ParallaxEffect/assets/poster1.jpg';
import poster2 from '../components/ParallaxEffect/assets/poster2.jpg';

function Layout() {
  const [project, setProject] = useState()
  const [about, setAbout] = useState()
  const [skills, setSkills] = useState()
  const [iconColor, setIconColor] = useState()
  const [iconFadeIn, setIconFadeIn] = useState()

  // For scrolling & Animation
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const titleScrolled = yPos > 200;
      const firstScrolled = yPos > 480;
      const secondScrolled = yPos > 1190;
      const thirdScrolled = yPos > 1828;
      const fourthScrolled = yPos > 300 && yPos > 2000;

      setIconColor(titleScrolled)
      setProject(firstScrolled)
      setAbout(secondScrolled)
      setSkills(thirdScrolled)
      setIconFadeIn(fourthScrolled)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  })

   const backgroundUrls1 = [
    { imageUrl: poster2, imageText: 'Before' },
    { imageUrl: poster1, imageText: 'After' },
    // Add more images as needed
  ];

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ContactIcon iconColor={iconColor} iconFadeIn={iconFadeIn} />
      <Switch>
        <Route path="/">
          <Home />
          <Projects scrollValue={project} />
          <About scrollValue={about} />
          <Skills scrollValue={skills} />
          <Adobe />
          <div>
        {backgroundUrls1.map((item, index) => (
          <ParallaxEffect key={index} backgroundImage={item.imageUrl}>
            <h1>Adobe</h1>
            <p>{item.imageText}</p>
            {/* <button className='cta-button'>Get Started</button> */}
          </ParallaxEffect>
        ))}
      </div>
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default React.memo(Layout)