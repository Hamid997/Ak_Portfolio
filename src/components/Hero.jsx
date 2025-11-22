import "../App.css";

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
              <span>Creative Developer</span>
            </h1>
            <p className="text">
              I'm a front-end developer and designer focused on creating
              beautiful, functional web experiences that users love.
            </p>
            <div className="buttons-hero">
              <button className="button-primary">View Projects</button>
              <button className="button-secondary">Get in Touch</button>
            </div>
          </div>
          <div className="secondBlock"></div>
        </div>
      </section>
    </>
  );
}
