import "../App.css";
import { Award, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import Meta from '../assets/learnings/meta.png'
import IBM from '../assets/learnings/ibm.png'
import Michigan from '../assets/learnings/michigan.png'
import HKUST from '../assets/learnings/HKUST.png'
import Stanford from '../assets/learnings/Stanford.png'
import LinkedIn from '../assets/learnings/linkedin.png'
import Udemy from '../assets/learnings/Udemy.png'
import JHU from '../assets/learnings/JHU.png'
import Minnesota from '../assets/learnings/minnesota.png'
import Toronto from '../assets/learnings/toronto.png'
import UCDavis from '../assets/learnings/ucdavis.png'
import Yonsei from '../assets/learnings/yonsei.png'
import Australia from '../assets/learnings/Australia.png'
import NASA from '../assets/learnings/nasa.png'
import Google from '../assets/learnings/google.png'

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
      name: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "#",
      img: IBM
    },    
    {
      name: "Intermediate Web and Front-End Development",
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
      name: "HTML, CSS, and Javascript for Web Developers Course",
      issuer: "Johns Hopkins University - Coursera",
      year: "2020",
      link: "#",
      img: JHU,
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
    },
    {
      name: "Fundamentals of Remote Sensing",
      issuer: "NASA - ARSET",
      year: "2025",
      link: "#",
      img: NASA,
    }, 
    {
      name: "QGIS Mega Course: GIS and Remote Sensing- Beginner to Expert",
      issuer: "Udemy",
      year: "2025",
      link: "#",
      img: Udemy,
    }, 
    {
      name: "Remote Sensing Image Acquisition, Analysis and Applications",
      issuer: "UNSW Sydney & IEEE GRSS - Coursera",
      year: "2023",
      link: "#",
      img: Australia,
    },    
    {
      name: "Spatial Data Science and Applications",
      issuer: "Yonsei University - Coursera",
      year: "2022",
      link: "#",
      img: Yonsei,
    },
    {
      name: "Learn User Experience Design from A-Z: Adobe XD UI UX Design",
      issuer: "Udemy",
      year: "2021",
      link: "#",
      img: Udemy,
    },  
    {
      name: "Introduction to GIS Mapping",
      issuer: "University of Toronto - Coursera",
      year: "2021",
      link: "#",
      img: Toronto,
    },
    {
      name: "Geospatial and Environmental Analysis",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "#",
      img: UCDavis,
    },
    {
      name: "GIS Data Formats, Design and Quality",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "#",
      img: UCDavis,
    },
    {
      name: "Fundamentals of GIS",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "#",
      img: UCDavis,
    },
    {
      name: "UI/UX with Adobe XD",
      issuer: "Udemy",
      year: "2020",
      link: "#",
      img: Udemy,
    },
    {
      name: "Introduction to UI Design",
      issuer: "University of Minnesota - Coursera",
      year: "2019",
      link: "#",
      img: Minnesota,
    },
    {
      name: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2019",
      link: "#",
      img: Google,
    }, 
  ]

  const [visibleItemCount, setVisibleItemCount] = useState(8);

  const displayedDataCertifications = certifications.slice(0, visibleItemCount);

  const handleLoadMore = () => {
    if (visibleItemCount >= certifications.length) {
      setVisibleItemCount(8); // Show Less
    } else {
      setVisibleItemCount((prev) => prev + 4); // Load More
    }
  };

  return (
    <>
      <div id="certifications">
        <div className="certifications-header">
          <Award className="certifications-icon" />
          <h3 className="certifications-title">Certifications</h3>
        </div>

        <div className="certifications-content">
          {displayedDataCertifications.map((certification, idx) => (
            <div key={idx} className="certification-card">
              <h4 className="certification-name">{certification.name}</h4>
              <div className="certification-details">
                <div className="certification-content">
                  <p className="certification-description">{certification.issuer}</p>
                  <p className="certification-year">{certification.year}</p>
                  <a
                    href={certification.link}
                    className="certification-link"
                    target="_blank"
                  >
                    Link <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="certification-img">
                  <img src={certification.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-button-div">
            <button onClick={handleLoadMore} className="load-button">
              {visibleItemCount >= certifications.length ? "Show Less" : "Load More"}
            </button>
          </div>
      </div>
    </>
  );
}
