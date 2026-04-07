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

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
