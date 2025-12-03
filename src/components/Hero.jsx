import "../App.css";
import TypewriterEffect from "./TypewriterEffect";
import { HashLink } from "react-router-hash-link";
import { ArrowDownRight  } from 'lucide-react';
import Freelancer from "../assets/Freelancer.svg";



export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="firstBlock">
            <div className="span">
              <span className="span-content">Available for work</span>
            </div>
            <h1 className="heading">
              Hello, I'm a<br />
              <TypewriterEffect text="Creative Developer" delay={150} />
            </h1>
            <p className="text">
              I'm a front-end developer and designer focused on creating
              beautiful, functional web experiences that users love.
            </p>
            <div className="buttons-hero">
              <button className="button-primary">
                <HashLink smooth to="/#projects" className="button-link button-link-primary" end>
                  View Projects <ArrowDownRight  size={18} />
                </HashLink>
              </button>
              <button className="button-secondary">
                <HashLink smooth to="/#contact" className="button-link button-link-secondary" end>
                  Get in Touch <ArrowDownRight  size={18} />
                </HashLink>
              </button>
            </div>
          </div>
          <div className="secondBlock">
                  <img src={Freelancer} alt="Your SVG" />
          </div>
        </div>
      </section>
    </>
  );
}
