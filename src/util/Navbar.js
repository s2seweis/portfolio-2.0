import { useState, useEffect } from 'react'

export default function useCustomScroll() {
  const [bg, setBg] = useState()
  const [home, setHome] = useState(true)
  const [project, setProject] = useState()
  const [about, setAbout] = useState()
  const [skills, setSkills] = useState()
  const [contact, setContact] = useState()

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const bgScrolled = yPos > 500;
      const homeScrolled = yPos > -100 && yPos < 500;
      const projectScrolled = yPos > 500 && yPos < 1210;
      const aboutScrolled = yPos > 1210 && yPos < 1800;
      const skillsScrolled = yPos > 1800 && yPos < 2200;
      const contactScrolled = yPos > 2200
      
      setBg(bgScrolled)
      setHome(homeScrolled)
      setProject(projectScrolled)
      setAbout(aboutScrolled)
      setSkills(skillsScrolled)
      setContact(contactScrolled)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  })
  
  return {
    bg,
    home,
    project,
    about,
    skills,
    contact
  }

}

export const name = [
  {letter: "S", type: "stay"},
  {letter: "E", type: "not"},
  {letter: "B", type: "not"},
  {letter: "A", type: "not"},
  {letter: "S", type: "not"},
  {letter: "T", type: "not"},
  {letter: "I", type: "not"},
  {letter: "A", type: "not"},
  {letter: "N", type: "not"},
]
