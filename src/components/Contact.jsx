import "../App.css";
import { Github, Linkedin, Mail, Send} from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <h2 className="contact-heading">Let's Work Together</h2>
          <p className="contact-description"> I'm always interested in hearing about new projects and opportunities.</p>

          <div className="contact-section">
            <div className="contact-info">
              <div className="contact-card-container">
                <div className="contact-card">
                  <div className="contact-icon-div">
                    <Mail className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="contact-name">Email</h3>
                    <a href="" className="contact-link">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-card-container">
                <div className="contact-card">
                  <div className="contact-icon-div">
                    <Github className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="contact-name">Github</h3>
                    <a href="" className="contact-link">
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-card-container">
                <div className="contact-card">
                  <div className="contact-icon-div">
                    <Linkedin className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="contact-name">LinkedIn</h3>
                    <a href="" className="contact-link">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3 className="form-title">Send a Message</h3>
              <div className="form-container">
                <div>
                  <label className="form-label">Name</label>
                  <input className="input-form" placeholder="Your name" type="text" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input className="input-form" placeholder="your.email@example.com" type="email" />
                </div>
                <div>
                  <label className="form-label">Message</label>
                <textarea rows="6" className="input-form" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="form-button">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
