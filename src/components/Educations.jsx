import "../App.css";

export default function Educations() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2020 - 2022",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      year: "2016 - 2020",
      description: "Focus on Full-Stack Development and UI Design",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    { name: "Google UX Design Professional", issuer: "Google", year: "2023" },
    { name: "Meta Front-End Developer", issuer: "Meta", year: "2023" },
    {
      name: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2022",
    },
  ];

  return (
    <>
      <section id="educations">
        <div className="edu-container">
            <h2 className="eduTitle">Education & Certifications</h2>
        </div>
      </section>
    </>
  );
}
