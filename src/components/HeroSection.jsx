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
            I build websites and automations that help small businesses work better.
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
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.84.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.35 9.35 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.95.68 1.93 0 1.4-.01 2.52-.01 2.86 0 .28.18.61.69.5A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/351914375525"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.42 0 .04 5.37.04 12a11.9 11.9 0 0 0 1.62 6L0 24l6.17-1.62a11.99 11.99 0 0 0 5.88 1.5h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.54-8.4ZM12.06 21.82h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.66.96.98-3.58-.23-.37a9.88 9.88 0 0 1-1.53-5.24c0-5.45 4.43-9.88 9.88-9.88a9.82 9.82 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.39c-.3-.15-1.78-.88-2.05-.98-.27-.1-.46-.15-.65.15-.2.3-.75.98-.92 1.18-.17.2-.34.23-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.48h-.56c-.2 0-.5.08-.76.38-.26.3-1 1-.1 2.43.9 1.43 2.57 2.81 2.92 3.05.35.24 4.05 1.86 5 1.89.95.03.86.81 1.35.08.5-.74.5-1.37.35-1.5-.15-.13-.35-.2-.64-.35Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#contact" className="social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" focusable="false">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m4 7 8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
