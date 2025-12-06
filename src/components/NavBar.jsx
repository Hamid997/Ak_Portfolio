import "../App.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navigation = ["About", "Skills", "Projects", "Educations", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <HashLink to="/" className="portfolio-logo" end>
            {"<Ak />"}
          </HashLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          {Navigation.map(
            (item) => (
              <li
                key={item}
                className="nav-item"
              >
                <HashLink smooth to={`/#${item}`} className="nav-link" end>
                  {item}
                </HashLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile Navigation */}
        <div className="mobile-menu-button-div">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="navbar-nav-mobile">
          {Navigation.map(
            (item) => (
              <li
                key={item}
                className="nav-item-mobile"
              >
                <HashLink smooth to={`/#${item}`} className="nav-link" end>
                  {item}
                </HashLink>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
