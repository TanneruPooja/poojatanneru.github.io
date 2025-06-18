import React from "react";

const projects = [
  {
    title: "AI Model for Recognizing Chicken Sounds",
    description:
      "Developed a deep learning model to classify chicken sounds using TensorFlow and MFCC features.",
    tech: ["Python", "TensorFlow", "Librosa"],
    github: "https://github.com/yourusername/chicken-sound-model",
  },
  {
    title: "Customer Churn Analysis Dashboard",
    description:
      "Built an interactive Power BI dashboard and ML model to predict customer churn and support marketing campaigns.",
    tech: ["Power BI", "Python", "scikit-learn"],
    github: "https://github.com/yourusername/churn-analysis",
  },
  // Add more projects here as needed
];

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Pooja Tanneru</h1>
        <p>Software Engineer</p>
        <nav>
          <a href="#about" style={styles.navLink}>
            About Me
          </a>
          <a href="#projects" style={styles.navLink}>
            Projects
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>
          Master’s graduate in Computer Science from Chicago State University,
          passionate about AI, DevOps, and building real-world applications.
        </p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        {projects.map((project, idx) => (
          <article key={idx} style={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <p>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </p>
          </article>
        ))}
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:tannerupooja@gmail.com">tannerupooja@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/pooja-tanneru-87473b262/"
            target="_blank"
            rel="noreferrer"
          >
            pooja-tanneru
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Pooja Tanneru</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
  },
  navLink: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#0066cc",
  },
  section: {
    marginBottom: 40,
  },
  projectCard: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    marginBottom: 20,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  footer: {
    textAlign: "center",
    marginTop: 50,
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default App;
