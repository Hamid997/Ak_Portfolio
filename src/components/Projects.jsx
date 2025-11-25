import "../App.css";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app with AI-powered prioritization and scheduling recommendations.",
      tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Design System",
      description:
        "Comprehensive UI component library with accessibility features and dark mode support.",
      tags: ["React", "Tailwind", "Storybook", "Figma"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics platform with interactive charts and customizable metrics.",
      tags: ["Vue.js", "D3.js", "Firebase", "Charts"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking solution with biometric authentication and instant transfers.",
      tags: ["React Native", "Redux", "Node.js", "AWS"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "Real-time social networking platform with messaging, stories, and content sharing.",
      tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      link: "#",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Featured Projects</h2>
            <a href="" className="view-all-link">
              View All <ArrowRight size={16} />
            </a>
          </div>

          <div className="projects-content">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overly" />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
