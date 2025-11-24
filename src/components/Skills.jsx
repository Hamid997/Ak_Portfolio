import "../App.css";
import { Code, Palette, Zap } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      items: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      name: "Performance",
      icon: Zap,
      items: ["Web Vitals", "Optimization", "Accessibility", "SEO"],
    },
  ];

  return (
    <>
      <section id="skills">
        <div className="skills-container">
          <h2 className="skills-heading">Skills & Expertise</h2>
          <div id="skills-block">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <skill.icon className="skill-icon" />
                <h3 className="skill-name">{skill.name}</h3>
                <div id="items">
                  {skill.items.map((item, i) => (
                    <div key={i} className="items-container">
                      <div className="bullet"></div>
                      <span className="item-name">{item}</span>
                    </div>
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
