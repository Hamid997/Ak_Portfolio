import React, { useState } from "react";
import { Github, Linkedin, Mail, Youtube, Send } from "lucide-react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const RECIPIENT_EMAIL = "hamid.birouk0597@gmail.com";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 8) {
      newErrors.name = "Please enter at least 8 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) {
      newErrors.message = "A message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Please enter at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n---------------------------\nMessage:\n${formData.message}`
      );

      const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const ContactData = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:hamid.birouk0597@gmail.com",
    },
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/Hamid997",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/abdelhamid-birouk/",
    },
    {
      name: "Youtube",
      icon: Youtube,
      link: "https://www.youtube.com/@CodingWithMido",
    },
  ];

  return (
    <section id="Contact">
      <div className="contact-container">
        <h2 className="contact-heading">Let's Work Together</h2>
        <p className="contact-description">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="contact-section">
          <div className="contact-info">
            {ContactData.map((cont, i) => (
              <div key={i} className="contact-card-container">
                <a 
                  href={cont.link}
                  target={cont.name !== "Email" ? "_blank" : undefined}
                  rel={cont.name !== "Email" ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="contact-card">
                    <div className="contact-icon-div">
                      <cont.icon className="contact-icon" />
                    </div>
                    <div>
                      <h3 className="contact-name">{cont.name}</h3>
                      <span className="contact-link">
                        Click to connect
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <div className="form-container">
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-form"
                  placeholder="Your name"
                  type="text"
                />
                {errors.name && (
                  <p className="form-error">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-form"
                  placeholder="your.email@example.com"
                  type="email"
                />
                {errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-form"
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message}</p>
                )}
              </div>

              <button 
                className="form-button" 
                type="button"
                onClick={handleSubmit}
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}