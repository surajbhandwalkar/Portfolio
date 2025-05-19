
import React from 'react';
import '../Styles/Project.css';

const projects = [
  {
    title: "Laundry-Service",
    description: "Full-stack laundry service platform with user authentication, order tracking, and admin panel.",
    tech: "React, Node.js, MongoDB, Express, MySQL",
  },
  {
    title: "Live Location Tracker",
    description: "Real-time location tracking with Google Maps API and WebSockets.",
    tech: "React, Express, MongoDB, Firebase, Google Maps API",
  },
  {
    title: "Text To Speech Converter",
    description: "Converts paragraphs into downloadable MP3 audio.",
    tech: "React, JavaScript, HTML, CSS",
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.tech}</p>
          {/* <p><strong>Link: </strong> <a href='www.google.com'>  www.google.com</a></p> */}
        </div>
      ))}
    </section>
  );
};

export default Projects;
