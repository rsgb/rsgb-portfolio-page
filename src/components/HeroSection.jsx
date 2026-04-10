import { FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa6'

function HeroSection({ profileImage }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Available for New Projects
          </p>
          <h1>Rui Braga</h1>
          <p className="hero-lead">
            I build websites and automations that help people and projects work better.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See My Work
            </a>
          </div>

          <div className="social-row">
            <a
              href="https://github.com/rsgb"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/351914375525"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a href="#contact" className="social-btn" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-photo-ring">
            <img src={profileImage} alt="Rui Braga" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
