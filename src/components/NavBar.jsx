import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a>{"{{ ABK }}"}</a>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <i className="nav-link">About</i>
          </li>{" "}
          <li className="nav-item">
            <i className="nav-link">Skills</i>
          </li>{" "}
          <li className="nav-item">
            <i className="nav-link">Education</i>
          </li>{" "}
          <li className="nav-item">
            <i className="nav-link">Projects</i>
          </li>{" "}
          <li className="nav-item">
            <i className="nav-link">Contact</i>
          </li>{" "}
          <li className="nav-item">
            <i className="nav-link nav-icon">☀</i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
