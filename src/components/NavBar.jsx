import "../App.css";
import { HashLink } from 'react-router-hash-link'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <HashLink to="/" className="navbar-brand-logo" end>
            {"<Ak />"}
          </HashLink>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <HashLink smooth to="/#about" className="nav-link" end>
              About
            </HashLink>
          </li>{" "}
          <li className="nav-item">
            <HashLink smooth to="/#skills" className="nav-link" end>
              Skills
            </HashLink>
          </li>{" "}
          <li className="nav-item">
            <HashLink smooth to="/#educations-certifications" className="nav-link" end>
              Education
            </HashLink>
          </li>{" "}
          <li className="nav-item">
            <HashLink smooth to="/#projects" className="nav-link" end>
              Projects
            </HashLink>
          </li>{" "}
          <li className="nav-item">
            <HashLink smooth to="/#contact" className="nav-link" end>
              Contact
            </HashLink>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
