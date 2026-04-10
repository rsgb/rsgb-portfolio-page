import SectionTitle from './SectionTitle'

function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          title="Technical Skills"
          subtitle="The tools I use day-to-day to build websites and automations."
        />
        <div className="card-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="card">
              <h3 className="skills-title">
                <span className="skills-title-icon" aria-hidden="true">
                  <SkillIcon icon={group.icon} />
                </span>
                {group.title}
              </h3>
              <div className="chip-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillIcon({ icon }) {
  if (icon === 'code') {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M8 8 4 12l4 4M16 8l4 4-4 4M14 6l-4 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (icon === 'automation') {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <circle
          cx="6"
          cy="12"
          r="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="6"
          r="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="18"
          cy="12"
          r="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="18"
          r="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7.8 10.8 10.2 7.2M13.8 7.2l2.4 3.6M16.2 13.2l-2.4 3.6M10.2 16.8l-2.4-3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        d="M14.5 3.8a4.2 4.2 0 0 0 1.15 4.42l-7.3 7.3a2.2 2.2 0 1 0 3.1 3.1l7.3-7.3a4.2 4.2 0 0 0 4.42-1.15l-3.2-1.07-1.03-3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.55" cy="16.45" r="1.05" fill="currentColor" />
    </svg>
  )
}

export default SkillsSection
