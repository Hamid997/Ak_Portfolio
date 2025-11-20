import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="navbar">
    <div className="navbar-brand">
      <a>My App</a>
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
      <li className="nav-item">☀ </li>
    </ul>
  </nav>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Educations />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
