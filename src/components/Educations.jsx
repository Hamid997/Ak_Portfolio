import "../App.css";
import { GraduationCap } from "lucide-react";

export default function Educations() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2020 - 2022",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      year: "2016 - 2020",
      description: "Focus on Full-Stack Development and UI Design",
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
