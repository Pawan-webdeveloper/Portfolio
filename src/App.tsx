import { useEffect } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

import HeroOne from './components/HeroOne'
import { AnimeNavBar } from './components/AnimeNavBar'
import { navItems } from './components/ui/demo'
import { FeaturesSectionDemo } from './components/Features'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
    <AnimeNavBar items={navItems}/>
    <HeroOne/>
    <div id='features'>
    <FeaturesSectionDemo/>
    </div>
    <div id="projects">
      <Projects/>
    </div>
    <TechStack/>
    <div id="contact">
    <Contact />
    </div>
    <Footer/>
    </>
  )
}

export default App
