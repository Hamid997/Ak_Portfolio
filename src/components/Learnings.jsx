import "../App.css";
import Educations from "./Educations";
import Certifications from "./Certifications";

export default function Learnings() {
  return (
    <>
      <section id="educations-certifications">
        <div className="edu-container">
          <h2 className="eduTitle">Certifications & Educations</h2>

          <Certifications />
          <Educations />
        </div>
      </section>
    </>
  );
}
