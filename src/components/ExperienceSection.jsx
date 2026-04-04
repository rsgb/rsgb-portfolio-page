import SectionTitle from './SectionTitle'

function ExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionTitle
          title="Experience"
          subtitle="Client work, open-source contribution, and real-world automation projects."
        />
        <div className="stack experience-stack">
          {experienceItems.map((item) => (
            <article key={item.role} className="card">
              <div className="row-between">
                <h3 className="experience-title">
                  <span className="experience-title-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path
                        d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3"
                        y="7"
                        width="18"
                        height="13"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>
                  {item.role}
                </h3>
              </div>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
