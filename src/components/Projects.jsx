import "../App.css";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import Countries from "../assets/projects/MRLzwnZj.jpg";
import IP from "../assets/projects/R815wQEh.jpg";
import Shortening from "../assets/projects/Pyu_3ou-.jpg";
import Advices from "../assets/projects/cCW0sG6g.jpg";
import Blogr from "../assets/projects/Um1LxInU.jpg";
import Insure from "../assets/projects/empVuIiM.jpg";
import Sunnyside from "../assets/projects/jRMEmsfb.jpg";
import Fylo from "../assets/projects/GR02jIrR.jpg";
import Clipboard from "../assets/projects/UbcicZGP.jpg";
import Ping from "../assets/projects/TK_hWCaC.jpg";
import Apparel from "../assets/projects/HdNlU8Gt.jpg";
import Intro from "../assets/projects/mkTLs1ar.jpg";

import FAQ from "../assets/projects/KC6L_qUP.jpg";
import Article from "../assets/projects/I4oaBdw9.jpg";
import Rating from "../assets/projects/XS_aApTP.jpg";
import Social from "../assets/projects/ZXL-mQqr.jpg";
import Results from "../assets/projects/_xdjk2sh.jpg";
import Four from "../assets/projects/4MOmhPdW.jpg";
import Order from "../assets/projects/m-h8D5b9.jpg";
import Profile from "../assets/projects/xiTfgIL5.jpg";
import Stats from "../assets/projects/ArBJT8Kb.jpg";
import Price from "../assets/projects/9GaXqbaJ.jpg";
import Huddle from "../assets/projects/XyD7FR5v.jpg";
import Columns from "../assets/projects/yZZc3wac.jpg";
import Product from "../assets/projects/BadPQjYR.jpg";
import NFT from "../assets/projects/ny5l3Rcg.jpg";
import QR from "../assets/projects/tt6ilPRM.jpg";

export default function Projects() {
  const projects = [
    {
      title: "REST Countries API web app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Vite", "CSS", "JSON"],
      image: Countries,
      repo: "https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher",
      demo: "https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/",
    },
    {
      title: "IP Address Tracker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Axios", "Leaflet js", "Vite", "CSS"],
      image: IP,
      repo: "https://github.com/Hamid997/IP-Address-Tracker",
      demo: "https://ip-address-tracker-dusky-six.vercel.app",
    },
    {
      title: "URL shortening API landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Vite", "CSS"],
      image: Shortening,
      repo: "https://github.com/Hamid997/URL-shortening-API-landing-page",
      demo: "https://url-shortening-api-landing-page-theta.vercel.app/",
    },
    {
      title: "Advice generator app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Vite", "Axios", "CSS"],
      image: Advices,
      repo: "https://github.com/Hamid997/Advice-generator-app",
      demo: "https://advice-generator-app-ten-omega.vercel.app/",
    },
    {
      title: "Blogr landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Blogr,
      repo: "https://github.com/Hamid997/Blogr-landing-page",
      demo: "https://hamid997.github.io/Blogr-landing-page/",
    },
    {
      title: "Insure landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Insure,
      repo: "https://github.com/Hamid997/Insure-landing-page",
      demo: "https://hamid997.github.io/Insure-landing-page/",
    },
    {
      title: "Sunnyside agency landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Sunnyside,
      repo: "https://github.com/Hamid997/Sunnyside-agency-landing-page",
      demo: "https://hamid997.github.io/Sunnyside-agency-landing-page/",
    },
    {
      title: "Fylo landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Fylo,
      repo: "https://github.com/Hamid997/Fylo-landing-page-with-two-column-layout",
      demo: "https://hamid997.github.io/Fylo-landing-page-with-two-column-layout/",
    },
    {
      title: "Clipboard landing page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Clipboard,
      repo: "https://github.com/Hamid997/Clipboard-landing-page",
      demo: "https://hamid997.github.io/Clipboard-landing-page/",
    },
    {
      title: "Ping coming soon page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Ping,
      repo: "https://github.com/Hamid997/Ping-single-column-coming-soon-page",
      demo: "https://github.com/Hamid997/Ping-single-column-coming-soon-page/deployments/github-pagesv",
    },
    {
      title: "Base Apparel coming soon page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Apparel,
      repo: "https://github.com/Hamid997/Base-Apparel-coming-soon-page",
      demo: "https://hamid997.github.io/Base-Apparel-coming-soon-page/",
    },
    {
      title: "Intro component with sign-up form",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Intro,
      repo: "https://github.com/Hamid997/Intro-component-with-sign-up-form",
      demo: "https://hamid997.github.io/Intro-component-with-sign-up-form/",
    },
    {
      title: "FAQ accordion card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: FAQ,
      repo: "https://github.com/Hamid997/FAQ-accordion-card",
      demo: "https://hamid997.github.io/FAQ-accordion-card/",
    },
    {
      title: "Article preview component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Article,
      repo: "https://github.com/Hamid997/Article-preview-component",
      demo: "https://hamid997.github.io/Article-preview-component/",
    },
    {
      title: "Interactive rating component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS", "Javascript"],
      image: Rating,
      repo: "https://github.com/Hamid997/Interactive-rating-component",
      demo: "https://hamid997.github.io/Interactive-rating-component/",
    },
    {
      title: "Social proof section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Social,
      repo: "https://github.com/Hamid997/Social-Proof-Section",
      demo: "https://hamid997.github.io/Social-Proof-Section/",
    },
    {
      title: "Results summary component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Results,
      repo: "https://github.com/Hamid997/Results-summary-component",
      demo: "https://hamid997.github.io/Results-summary-component/",
    },
    {
      title: "Four card feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Four,
      repo: "https://github.com/Hamid997/Four-card-feature-section",
      demo: "https://hamid997.github.io/Four-card-feature-section/",
    },
    {
      title: "Order summary component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Order,
      repo: "https://github.com/Hamid997/Order-summary-component",
      demo: "https://hamid997.github.io/Order-summary-component/",
    },
    {
      title: "Profile card component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Profile,
      repo: "https://github.com/Hamid997/Profile-card-component",
      demo: "https://hamid997.github.io/Profile-card-component/",
    },
    {
      title: "Stats preview card component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Stats,
      repo: "https://github.com/Hamid997/Stats-preview-card-component",
      demo: "https://hamid997.github.io/Stats-preview-card-component/",
    },
    {
      title: "Single price grid component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Price,
      repo: "https://github.com/Hamid997/Single-price-grid-component",
      demo: "https://hamid997.github.io/Single-price-grid-component/",
    },
    {
      title: "Huddle landing page section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Huddle,
      repo: "https://github.com/Hamid997/Huddle-landing-page-with-a-single-introductory-section",
      demo: "https://hamid997.github.io/Huddle-landing-page-with-a-single-introductory-section/",
    },
    {
      title: "3-column preview card component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Columns,
      repo: "https://github.com/Hamid997/3-column-preview-card-component",
      demo: "https://hamid997.github.io/3-column-preview-card-component/",
    },
    {
      title: "Product preview card component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: Product,
      repo: "https://github.com/Hamid997/Product-preview-card-component",
      demo: "https://hamid997.github.io/Product-preview-card-component/",
    },
    {
      title: "NFT preview card component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: NFT,
      repo: "https://github.com/Hamid997/NFT-preview-card-component",
      demo: "https://hamid997.github.io/NFT-preview-card-component/",
    },
    {
      title: "QR code component",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["HTML", "CSS"],
      image: QR,
      repo: "https://github.com/Hamid997/QR-code-component",
      demo: "https://hamid997.github.io/QR-code-component/index.html",
    },
  ];

  const [visibleItemCount, setVisibleItemCount] = useState(6);

  const displayedData = projects.slice(0, visibleItemCount);

  const handleLoadMore = () => {
    if (visibleItemCount >= projects.length) {
      setVisibleItemCount(6); // Show Less
    } else {
      setVisibleItemCount((prev) => prev + 6); // Load More
    }
  };

  return (
    <>
      <section id="Projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Projects</h2>
          </div>

          <div className="projects-content">
            {displayedData.map((project, idx) => (
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
                  <a href={project.repo} className="repo-link" target="_blank">
                    Repo <ArrowUpRight size={16} />
                  </a>
                  <a href={project.demo} className="demo-link" target="_blank">
                    Demo <ArrowUpRight size={16} />
                  </a>
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
          <div className="load-button-div">
            <button onClick={handleLoadMore} className="load-button">
              {visibleItemCount >= projects.length ? "Show Less" : "Load More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
