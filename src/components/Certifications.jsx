import "../App.css";
import { Award, ArrowUpRight } from "lucide-react";

export default function Certifications() {
  const certifications = [
    { name: "AWS Certified Solutions Architect",  issuer: "Amazon Web Services",  year: "2024",  link: "#"},
    { name: "Google UX Design Professional", issuer: "Google", year: "2023", link: "#" },
    { name: "Meta Front-End Developer", issuer: "Meta", year: "2023", link: "#"  },
    { name: "Advanced React Patterns",  issuer: "Frontend Masters",  year: "2022", link: "#" },
  ];

  return (
    <>
      <div id="certifications">
        <div className="certifications-header">
          <Award className="certifications-icon" />
          <h3 className="certifications-titl">Certifications</h3>
        </div>

        <div className="certifications-content">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification-card">
              <h4 className="certification-name">{cert.name}</h4>
              <p className="certification-description">{cert.issuer}</p>
              <p className="certification-year">{cert.year}</p>
              <a href={cert.link} className="certification-link" target="_blank">Link <ArrowUpRight size={16} /></a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
