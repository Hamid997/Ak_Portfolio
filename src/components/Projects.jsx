import "../App.css";
import { ArrowUpRight } from "lucide-react";

import Countries from "../assets/projects/MRLzwnZj.jpg";
import IP from "../assets/projects/R815wQEh.jpg";
import Shortening from "../assets/projects/Pyu_3ou-.jpg";
import Advices from "../assets/projects/cCW0sG6g.jpg";
import Blogr from '../assets/projects/Um1LxInU.jpg';
import Insure from '../assets/projects/empVuIiM.jpg';
import Sunnyside from '../assets/projects/jRMEmsfb.jpg';
import Fylo from '../assets/projects/GR02jIrR.jpg';
import Clipboard from '../assets/projects/UbcicZGP.jpg';
import Ping from '../assets/projects/TK_hWCaC.jpg';
import Apparel from '../assets/projects/HdNlU8Gt.jpg';
import Intro from '../assets/projects/mkTLs1ar.jpg'

export default function Projects() {
  const projects = [
    {
      title: "REST Countries API web app",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["React", "Vite", "CSS" , "JSON"],
      image: Countries,
      repo: "https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher",
      demo: "https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/",
    },
    {
      title: "IP Address Tracker",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["React", "Axios", "Leaflet js", "Vite", "CSS"],
      image: IP,
      repo: "https://github.com/Hamid997/IP-Address-Tracker",
      demo: "https://ip-address-tracker-dusky-six.vercel.app",
    },
    {
      title: "URL shortening API landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: [ "React", "Vite" , "CSS"],
      image: Shortening,
      repo: "https://github.com/Hamid997/URL-shortening-API-landing-page",
      demo: "https://url-shortening-api-landing-page-theta.vercel.app/",
    },
    {
      title: "Advice generator app",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["React", "Vite", "Axios" , "CSS"],
      image: Advices,
      repo: "https://github.com/Hamid997/Advice-generator-app",
      demo: "https://advice-generator-app-ten-omega.vercel.app/",
    },
    {
      title: "Blogr landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Blogr,
      repo: "https://github.com/Hamid997/Blogr-landing-page",
      demo: "https://hamid997.github.io/Blogr-landing-page/",
    },
    {
      title: "Insure landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Insure,
      repo: "https://github.com/Hamid997/Insure-landing-page",
      demo: "https://hamid997.github.io/Insure-landing-page/",
    },
    {
      title: "Sunnyside agency landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Sunnyside,
      repo: "https://github.com/Hamid997/Sunnyside-agency-landing-page",
      demo: "https://hamid997.github.io/Sunnyside-agency-landing-page/",
    },
    {
      title: "Fylo landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Fylo,
      repo: "https://github.com/Hamid997/Fylo-landing-page-with-two-column-layout",
      demo: "https://hamid997.github.io/Fylo-landing-page-with-two-column-layout/",
    },    
    {
      title: "Clipboard landing page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS"],
      image: Clipboard,
      repo: "https://github.com/Hamid997/Clipboard-landing-page",
      demo: "https://hamid997.github.io/Clipboard-landing-page/",
    },
    {
      title: "Ping coming soon page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS"],
      image: Ping,
      repo: "https://github.com/Hamid997/Ping-single-column-coming-soon-page",
      demo: "https://github.com/Hamid997/Ping-single-column-coming-soon-page/deployments/github-pagesv",
    },
    {
      title: "Base Apparel coming soon page",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Apparel,
      repo: "https://github.com/Hamid997/Base-Apparel-coming-soon-page",
      demo: "https://hamid997.github.io/Base-Apparel-coming-soon-page/",
    },
    {
      title: "Intro component with sign-up form",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["HTML", "CSS" , "Javascript"],
      image: Intro,
      repo: "https://github.com/Hamid997/Intro-component-with-sign-up-form",
      demo: "https://hamid997.github.io/Intro-component-with-sign-up-form/",
    }
  ];

  return (
    <>
      <section id="Projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Featured Projects</h2>
          </div>

          <div className="projects-content">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overly" />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="links-div">
                  <a href={project.repo} className="repo-link" target="_blank">Repo <ArrowUpRight size={16} /></a>
                  <a href={project.demo} className="demo-link" target="_blank">Demo <ArrowUpRight size={16} /></a>
                </div>
                <div className="project-stack">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-item">
                      {tag}
                    </span>
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
