import "../App.css";
import { Code, Palette, Zap, MapPinned } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["HTML / CSS", "JavaScript / jQuery", "JSON / AJAX", "React / Next.js", "Bootstrap / Tailwind CSS"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      items: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    },
    {
      name: "Backend Development",
      icon: Zap,
      items: ["PHP / Wordpress", "SQL / MySQL", "Git / GitHub", "Node.js / Express.js / MongoDB", "Python / Django / Django REST", "Cloud Native App with IBM Cloud"],
    },
    {
      name: "Geospatial Tools",
      icon: MapPinned,
      items: ["QGIS", "ArcGIS / ArcGIS Online", "Leaflet", "React-Leaflet"],
    },
  ];

  return (
    <>
      <section id="Skills">
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
