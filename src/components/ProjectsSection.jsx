import { useEffect, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
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
          title="Selected Work"
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
                    <FaGithub />
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
