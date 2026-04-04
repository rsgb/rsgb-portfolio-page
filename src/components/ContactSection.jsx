import SectionTitle from './SectionTitle'

function ContactSection() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-heading">
          <SectionTitle
            title="Get in Touch"
            subtitle="Have a project in mind? I'd like to hear about it."
          />
        </div>

        <div className="contact-grid">
          <div className="contact-info-cards">
            <article className="card contact-info-card">
              <div className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.16 21 3 12.84 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a
                  className="contact-line contact-link"
                  href="https://wa.me/351914375525"
                  target="_blank"
                  rel="noreferrer"
                >
                  +351 914 375 525
                </a>
              </div>
            </article>

            <article className="card contact-info-card">
              <div className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.84.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.35 9.35 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.95.68 1.93 0 1.4-.01 2.52-.01 2.86 0 .28.18.61.69.5A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h4>GitHub</h4>
                <a
                  className="contact-line contact-link"
                  href="https://github.com/rsgb"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/rsgb
                </a>
              </div>
            </article>

            <article className="card contact-info-card">
              <div className="info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M12 21s-6-5.43-6-10a6 6 0 1 1 12 0c0 4.57-6 10-6 10Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p className="contact-line">Available for Remote Work</p>
              </div>
            </article>
          </div>

          <form
            className="card form contact-form-card"
            action="mailto:rui.bbb@gmail.com"
            method="post"
            encType="text/plain"
          >
            <h3 className="contact-form-title">Send a Message</h3>
            <label>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <input type="email" name="email" placeholder="Your email" />
            </label>
            <label>
              <textarea name="message" rows="5" placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
