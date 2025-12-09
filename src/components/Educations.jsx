import "../App.css";
import { GraduationCap } from "lucide-react";

export default function Educations() {
  const education = [
    {
      degree: "Bachelor of Science degree in Earth and Universe Sciences",
      institution: "Faculty of Sciences , Ibn Zohr University",
      year: "2014 - 2017",
      description: "Option: Water resources",
    },
    {
      degree: "Baccalaureate in Experimental Sciences",
      institution: "Anoual High School",
      year: "2014",
      description:
        "Option: Biology and Earth Sciences",
    },
  ];

  return (
    <>
      <div id="educations">
        <div className="educations-header">
          <GraduationCap className="educations-icon" />
          <h3 className="educations-title">Education</h3>
        </div>

        <div className="educations-content">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <h4 className="education-degree">{edu.degree}</h4>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
