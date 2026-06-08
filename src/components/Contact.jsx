import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Github, Linkedin, Mail, Youtube, Send } from "lucide-react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false); // Added loading state

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 8)
      newErrors.name = "Name must be at least 8 characters";
    if (!formData.email || !/^\S+@\S+$/i.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message || formData.message.length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSending(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error details:", error);
        alert(`Failed to send: ${error.text || "Check console for details"}`);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                  rel={
                    cont.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="contact-card">
                    <div className="contact-icon-div">
                      <cont.icon className="contact-icon" />
                    </div>
                    <div>
                      <h3 className="contact-name">{cont.name}</h3>
                      <span className="contact-link">Click to connect</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-container">
              <div>
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-form"
                  type="text"
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-form"
                  type="email"
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>
              <div>
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-form"
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message}</p>
                )}
              </div>
              <button
                className="form-button"
                type="submit"
                disabled={isSending}
              >
                <Send size={18} />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
