import "../App.css";
import { Award, ArrowUpRight } from "lucide-react";

import Meta from '../assets/learnings/meta.png'
import IBM from '../assets/learnings/ibm.png'
import Michigan from '../assets/learnings/michigan.png'
import HKUST from '../assets/learnings/HKUST.png'
import Stanford from '../assets/learnings/Stanford.png'
import LinkedIn from '../assets/learnings/linkedin.png'
import Udemy from '../assets/learnings/Udemy.png'

export default function Certifications() {

  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI - Coursera",
      year: "2024",
      link: "#",
      img: Stanford
    },
    {
      name: "Algorithms Specialization",
      issuer: "Stanford University - Coursera",
      year: "2024",
      link: "#",
      img: Stanford
    },
    {
      name: "Meta Back-End Developer Professional Certificate",
      issuer: "Meta - Coursera",
      year: "2024",
      link: "#",
      img: Meta
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta - Coursera",
      year: "2023",
      link: "#",
      img: Meta
    },
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },
    {
      name: "IBM Back-End Development Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },   
    {
      name: "IBM Applied DevOps Engineering Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },    
    {
      name: "IBM DevOps, Cloud, and Agile Foundations Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },    
    {
      name: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },    
    {
      name: "IBM Applied Software Engineering Fundamentals Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },   
    {
      name: "The Web Developer Bootcamp 2022",
      issuer: "Udemy - Colt Steele",
      year: "2022",
      link: "#",
      img: Udemy
    },
    {
      name: "IBM Cloud Application Development Foundations Specialization",
      issuer: "IBM - Coursera",
      year: "2022",
      link: "#",
      img: IBM,
    },
    {
      name: "Full-Stack Web Development with React Specialization",
      issuer: "The Hong Kong University of Science and Technology - Coursera",
      year: "2022",
      link: "#",
      img: HKUST
    }, 
    {
      name: "Become a Software Developer",
      issuer: "LinkedIn Learning",
      year: "2020 - 2021",
      link: "#",
      img: LinkedIn
    },
    {
      name: "Web Applications for Everybody Specialization",
      issuer: "University of Michigan - Coursera",
      year: "2020 - 2022",
      link: "#",
      img: Michigan
    },
    {
      name: "Web Design for Everybody Specialization",
      issuer: "University of Michigan - Coursera",
      year: "2019 - 2022",
      link: "#",
      img: Michigan
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
