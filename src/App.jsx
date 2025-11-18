import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <>
       <h1>Birko Portfolio</h1>
       <NavBar />
       <Hero />
       <About />
       <Skills />
       <Educations />
       <Projects />
       <Contact />
       <Footer />
    </>
  )
}

export default App
