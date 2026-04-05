import SectionTitle from './SectionTitle'
import { FaGithub, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { FiSend } from 'react-icons/fi'

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
                <FaWhatsapp />
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
                <FaGithub />
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
                <FaLocationDot />
              </div>
              <div>
                <h4>Location</h4>
                <p className="contact-line">Available for Remote Work</p>
              </div>
            </article>
          </div>

          <form
            className="card form contact-form-card"
            action="https://formsubmit.co/rui.bbb@gmail.com"
            method="post"
          >
            <h3 className="contact-form-title">Send a Message</h3>
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_captcha" value="false" />
            <label>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <input type="email" name="email" placeholder="Your email" required />
            </label>
            <label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project"
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              <span className="contact-submit-icon" aria-hidden="true">
                <FiSend />
              </span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
