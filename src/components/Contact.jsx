import "../App.css";
import { Github, Linkedin, Mail, Youtube, Send } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Contact() {
  // --- React Hook Form Setup ---
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RECIPIENT_EMAIL = "hello@example.com"; // Use the email from your links!

  // 1. Function that executes when validation passes
  const onSubmit = (data) => {
    // 2. Encode form data for the mailto link
    const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `
        Sender Name: ${data.name}
        Sender Email: ${data.email}
        ---------------------------
        Message:
        ${data.message}
        `
    );

    // 3. Construct and execute the mailto URL
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };
  // ---------------------------------

  const ContactData = [
    {
      name: "Email",
      icon: Mail,
      link: "hello@example.com",
    },
    {
      name: "Github",
      icon: Github,
      link: "github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "linkedin.com/in/yourprofile",
    },
    {
      name: "Youtube",
      icon: Youtube,
      link: "youtube.com/profile",
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
                <div className="contact-card">
                  <div className="contact-icon-div">
                    <cont.icon className="contact-icon" />
                  </div>
                  <div>
                    <h3 className="contact-name">{cont.name}</h3>
                    <a href="" className="contact-link">
                      {cont.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-container">
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="input-form"
                  placeholder="Your name"
                  type="text"
                  // RHF registration with required rule
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 8, // Minimum 8 characters
                      message: "Please enter at least 8 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input-form"
                  placeholder="your.email@example.com"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="input-form"
                  placeholder="Tell me about your project..."
                  {...register("message", {
                    required: "A message is required",
                    minLength: {
                      value: 20, // Minimum 10 characters
                      message: "Please enter at least 20 characters",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message.message}</p>
                )}
              </div>

              <button className="form-button" type="submit">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
