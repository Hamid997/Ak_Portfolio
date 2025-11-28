import "../App.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <div className="description-container">
            <p className="about-p">
                I'm a passionate developer with over 5 years of experience
              building modern web applications. My journey began with a love for
              design, which naturally evolved into coding and bringing digital
              experiences to life.
            </p>
            <p className="about-p">
              I specialize in creating user-centered applications that combine
              beautiful interfaces with robust functionality. My approach
              focuses on performance, accessibility, and delivering exceptional
              user experiences.
            </p>
            <p className="about-p">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              writing and mentoring.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
