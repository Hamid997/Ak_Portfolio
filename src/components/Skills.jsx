import "../App.css";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "jQuery", "JSON" ,
    " AJAX", "Bootstrap" , "Tailwind CSS" , "React" , "Next.js", 
    "Figma", "Adobe XD", "Git / GitHub", "PHP" , "Wordpress", "SQL" , "MySQL",  
    "Node.js" , "Express.js" , "MongoDB", "Python" , "Django" , "Django REST", 
    "Cloud Native App" , "IBM Cloud" , "QGIS", "ArcGIS" , 
    "ArcGIS Online", "Leaflet", "React-Leaflet"
  ];

  return (
    <>
      <section id="Skills">
        <div className="skills-container">
          <h2 className="skills-heading">Skills & Expertise</h2>
          <div id="skills-block">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <p className="skill-name">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
