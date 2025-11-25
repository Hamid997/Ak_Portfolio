import "../App.css";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="contents-block">
              <p className="title">Portfolio</p>
              <p className="content">
                Creating digital experiences that matter.
              </p>
            </div>
            <div className="links-block">
              <a className="social-links">
                <Github size={25} />
              </a>
              <a className="social-links">
                <Linkedin size={25} />
              </a>
              <a className="social-links">
                <Mail size={25} />
              </a>
            </div>
          </div>
          <div className="copyright">
            © 2025 All rights reserved. Built with React & CSS.
          </div>
        </div>
      </footer>
    </>
  );
}
