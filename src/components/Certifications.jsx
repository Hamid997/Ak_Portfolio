import "../App.css";
import { Award, ArrowUpRight } from "lucide-react";
import Meta from '../assets/meta.png'
import IBM from '../assets/ibm.png'

export default function Certifications() {

  const certifications = [
    {
      name: "IBM Full Stack Software Developer Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },
    {
      name: "IBM Back-End Development Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },
    {
      name: "Meta Front-End Developer",
      issuer: "Meta - Coursera",
      year: "2023",
      link: "#",
      img: Meta
    },
    {
      name: "Meta Back-End Developer",
      issuer: "Meta - Coursera",
      year: "2024",
      link: "#",
      img: Meta
    },
    {
      name: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2022",
      link: "#",
      img: ''
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "#",
      img: ''
    },
    {
      name: "Google UX Design Professional",
      issuer: "Google",
      year: "2023",
      link: "#",
      img: ''
    }
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
              <div className="certification-details">
                <div className="certification-content">
                  <p className="certification-description">{cert.issuer}</p>
                  <p className="certification-year">{cert.year}</p>
                  <a
                    href={cert.link}
                    className="certification-link"
                    target="_blank"
                  >
                    Link <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="certification-img">
                  <img src={cert.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
