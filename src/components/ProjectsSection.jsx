import { useEffect, useMemo, useState } from 'react'
import SectionTitle from './SectionTitle'

function ProjectsSection({ projects }) {
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState(null)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  const activeProject = useMemo(() => {
    if (lightboxProjectIndex === null) {
      return null
    }

    return projects[lightboxProjectIndex] ?? null
  }, [lightboxProjectIndex, projects])

  const activeImages = useMemo(() => {
    if (!activeProject) {
      return []
    }

    return activeProject.images?.length
      ? activeProject.images
      : activeProject.image
        ? [activeProject.image]
        : []
  }, [activeProject])

  const openLightbox = (projectIndex) => {
    setLightboxProjectIndex(projectIndex)
    setLightboxImageIndex(0)
  }

  const closeLightbox = () => {
    setLightboxProjectIndex(null)
    setLightboxImageIndex(0)
  }

  const showPreviousImage = () => {
    setLightboxImageIndex((currentIndex) => {
      if (!activeImages.length) {
        return currentIndex
      }

      return (currentIndex - 1 + activeImages.length) % activeImages.length
    })
  }

  const showNextImage = () => {
    setLightboxImageIndex((currentIndex) => {
      if (!activeImages.length) {
        return currentIndex
      }

      return (currentIndex + 1) % activeImages.length
    })
  }

  const currentImageSrc = activeImages[lightboxImageIndex] ?? ''
  const isMobileImage = currentImageSrc.toLowerCase().includes('mobile')

  useEffect(() => {
    if (!activeProject || !activeImages.length) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setLightboxImageIndex((currentIndex) => {
          return (currentIndex - 1 + activeImages.length) % activeImages.length
        })
      }

      if (event.key === 'ArrowRight') {
        setLightboxImageIndex((currentIndex) => {
          return (currentIndex + 1) % activeImages.length
        })
      }

      if (event.key === 'Escape') {
        setLightboxProjectIndex(null)
        setLightboxImageIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, activeImages.length])

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Websites I've built for clients in wellness, construction, and real estate."
        />
        <div className="card-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="card project-card">
              <button
                type="button"
                className="project-image-wrap"
                onClick={() => openLightbox(index)}
                aria-label={`Preview ${project.title} images`}
              >
                <img src={project.image} alt={`${project.title} mockup`} />
              </button>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="chip-row">
                {project.tech.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  className="btn btn-outline project-action-btn github-btn"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="github-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path
                        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.84.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.35 9.35 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.95.68 1.93 0 1.4-.01 2.52-.01 2.86 0 .28.18.61.69.5A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Code
                </a>
                <button
                  type="button"
                  className="btn btn-outline preview-btn project-action-btn"
                  onClick={() => openLightbox(index)}
                >
                  Preview
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && activeImages.length > 0 && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} image preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close preview"
              onClick={closeLightbox}
            >
              x
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={currentImageSrc}
                alt={`${activeProject.title} preview ${lightboxImageIndex + 1}`}
                className={
                  isMobileImage
                    ? 'lightbox-image-mobile'
                    : 'lightbox-image-fullwidth'
                }
              />
            </div>

            <div className="lightbox-controls">
              <button type="button" className="btn btn-outline" onClick={showPreviousImage}>
                Previous
              </button>
              <p>
                {lightboxImageIndex + 1} / {activeImages.length}
              </p>
              <button type="button" className="btn btn-primary" onClick={showNextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
