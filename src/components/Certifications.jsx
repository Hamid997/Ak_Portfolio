import "../App.css";
import { Award, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import Meta from '../assets/learnings/meta.png'
import IBM from '../assets/learnings/ibm.png'
import Michigan from '../assets/learnings/Michigan.png'
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
import Kaggle from '../assets/learnings/kaggle.png'

export default function Certifications() {

  const certifications = [
    {
      name: "5-Day AI Agents Intensive Course",
      issuer: "Kaggle - Google",
      year: "2025",
      link: "https://www.kaggle.com/certification/badges/abdelhamidbirouk/105",
      img: Kaggle
    },
    {
      name: "5-Day Gen AI Intensive Course",
      issuer: "Kaggle - Google",
      year: "2025",
      link: "https://www.kaggle.com/certification/badges/abdelhamidbirouk/96",
      img: Kaggle
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI - Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/6REBJBYY6ZDM",
      img: Stanford
    },
    {
      name: "Algorithms Specialization",
      issuer: "Stanford University - Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/95LKB02EQL64",
      img: Stanford
    },
    {
      name: "Meta Back-End Developer Professional Certificate",
      issuer: "Meta - Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/99KEVTSF8392",
      img: Meta
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/LSCE772G5KT6",
      img: Meta
    },
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://github.com/Hamid997/Portfolio-v1/blob/main/src/assets/Documents/IBM-Full-Stack.pdf",
      img: IBM
    },
    {
      name: "IBM Back-End Development Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/FXDSUSYAZX6S",
      img: IBM
    },   
    {
      name: "IBM Applied DevOps Engineering Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/PC4PUJUACY7Q",
      img: IBM
    }, 
    {
      name: "IBM DevOps and Software Engineering Professional Certificate",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/AB4GLC6PPYTY",
      img: IBM
    },    
    {
      name: "Intermediate Web and Front-End Development",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/KYJD28UZ3277",
      img: IBM
    },
    {
      name: "IBM DevOps, Cloud, and Agile Foundations Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/E7WJN2BYP845",
      img: IBM
    },       
    {
      name: "IBM Applied Software Engineering Fundamentals Specialization",
      issuer: "IBM - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/JGSQDHVR92JW",
      img: IBM
    },   
    {
      name: "The Web Developer Bootcamp 2022",
      issuer: "Udemy - Colt Steele",
      year: "2022",
      link: "https://www.udemy.com/certificate/UC-7e4f4e7f-2196-4278-aec9-c59e11ad38a7/",
      img: Udemy
    },
    {
      name: "IBM Cloud Application Development Foundations Specialization",
      issuer: "IBM - Coursera",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/H29ZCRTAHKQ5",
      img: IBM,
    },
    {
      name: "Full-Stack Web Development with React Specialization",
      issuer: "The Hong Kong University of Science and Technology - Coursera",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/M8YTQ5A7LCZ7",
      img: HKUST
    }, 
    {
      name: "Become a Software Developer",
      issuer: "LinkedIn Learning",
      year: "2020 - 2021",
      link: "https://www.linkedin.com/learning/certificates/33779fd63aa3cdf3cb5ef885252821d4d9dcb90418480f7fe1726b2fd97ff4b3?trk=share_certificate",
      img: LinkedIn
    },
    {
      name: "HTML, CSS, and Javascript for Web Developers Course",
      issuer: "Johns Hopkins University - Coursera",
      year: "2020",
      link: "https://www.coursera.org/account/accomplishments/verify/SDP6KY75JFTS",
      img: JHU,
    },
    {
      name: "Web Applications for Everybody Specialization",
      issuer: "University of Michigan - Coursera",
      year: "2020 - 2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/XN8B3DCCPLUB",
      img: Michigan
    },
    {
      name: "Web Design for Everybody Specialization",
      issuer: "University of Michigan - Coursera",
      year: "2019 - 2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/LQRAAA9XU5LB",
      img: Michigan
    },
    {
      name: "Hyperspectral Data for Land and Coastal Systems",
      issuer: "NASA - ARSET",
      year: "2025",
      link: "https://arset.unhosting.site/pluginfile.php/1/tool_certificate/issues/1765977412/7547199431AB.pdf",
      img: NASA,
    }, 
    {
      name: "Fundamentals of Remote Sensing",
      issuer: "NASA - ARSET",
      year: "2025",
      link: "https://arset.unhosting.site/pluginfile.php/1/tool_certificate/issues/1765189465/0995697205AB.pdf",
      img: NASA,
    }, 
    {
      name: "QGIS Mega Course: GIS and Remote Sensing- Beginner to Expert",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-5104cb95-7fc0-46a0-8dbe-9fc1ac4bec73/",
      img: Udemy,
    }, 
    {
      name: "Remote Sensing Image Acquisition, Analysis and Applications",
      issuer: "UNSW Sydney & IEEE GRSS - Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/BUVBPB49A24S",
      img: Australia,
    },    
    {
      name: "Spatial Data Science and Applications",
      issuer: "Yonsei University - Coursera",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments/verify/7SCJ3XTTES9E",
      img: Yonsei,
    },
    {
      name: "Learn User Experience Design from A-Z: Adobe XD UI UX Design",
      issuer: "Udemy",
      year: "2021",
      link: "https://www.udemy.com/certificate/UC-485968b1-7b2c-4267-8762-f04677b3d416/",
      img: Udemy,
    },  
    {
      name: "Introduction to GIS Mapping",
      issuer: "University of Toronto - Coursera",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/UQBFXSUN8VU4",
      img: Toronto,
    },
    {
      name: "Geospatial and Environmental Analysis",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/U4T9Y5L4R8P4",
      img: UCDavis,
    },
    {
      name: "GIS Data Formats, Design and Quality",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/W7E4B9D2MNU5",
      img: UCDavis,
    },
    {
      name: "Fundamentals of GIS",
      issuer: "University of California, Davis - Coursera",
      year: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/VXHQH2YQ4XG3",
      img: UCDavis,
    },
    {
      name: "UI/UX with Adobe XD",
      issuer: "Udemy",
      year: "2020",
      link: "https://www.udemy.com/certificate/UC-842c961e-fa36-4465-93e2-db2e5ea04233/",
      img: Udemy,
    },
    {
      name: "Introduction to UI Design",
      issuer: "University of Minnesota - Coursera",
      year: "2019",
      link: "https://www.coursera.org/account/accomplishments/verify/4Q9KLKBUR5UL",
      img: Minnesota,
    },
    {
      name: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2019",
      link: "https://github.com/Hamid997/Portfolio-v1/blob/main/src/assets/Documents/google-eMarketing.pdf",
      img: Google,
    }, 
  ]

  const [visibleItemCount, setVisibleItemCount] = useState(10);

  const displayedDataCertifications = certifications.slice(0, visibleItemCount);

  const handleLoadMore = () => {
    if (visibleItemCount >= certifications.length) {
      setVisibleItemCount(10); // Show Less
    } else {
      setVisibleItemCount((prev) => prev + 6); // Load More
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
              {visibleItemCount >= certifications.length ? "Show Less" : "Show More"}
            </button>
          </div>
      </div>
    </>
  );
}
