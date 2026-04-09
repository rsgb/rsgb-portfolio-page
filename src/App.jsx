import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import {
  contactLinks,
  experienceItems,
  navItems,
  profileImage,
  projects,
  skillGroups,
} from './data/portfolioData'
import './App.css'

const darkMq = window.matchMedia('(prefers-color-scheme: dark)')

function getOsTheme() {
  return darkMq.matches ? 'dark' : 'light'
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getOsTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const handler = () => setTheme(getOsTheme())
    darkMq.addEventListener('change', handler)
    return () => darkMq.removeEventListener('change', handler)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="site-shell">
      <Navbar
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <HeroSection profileImage={profileImage} />
        <SkillsSection skillGroups={skillGroups} />
        <ExperienceSection experienceItems={experienceItems} />
        <ProjectsSection projects={projects} />
        <ContactSection contactLinks={contactLinks} />
      </main>

      <Footer />
    </div>
  )
}

export default App
