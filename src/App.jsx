import { useState } from 'react'
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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <Navbar
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
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
