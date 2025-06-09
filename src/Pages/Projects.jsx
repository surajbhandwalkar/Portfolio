
import React from 'react';
import '../Styles/Project.css';

const projects = [

  {
    "title": "Real Estate Management",
    "description": "Responsive real estate app with dynamic property filtering, agent contact pages, user reviews, and star ratings.",
    "techStack": ["React.js", "React Router"],
    "link": "http://realestateall.netlify.app"
  },
  {
    "title": "Collage Clone Web App",
    "description": "Interactive collage-style web layout focusing on responsive design and user experience.",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "link": "https://collageclone.netlify.app"
  },
  {
    title: "Subscription-Based System",
    description: "Automated subscription-based platform with user login, active/inactive subscription tracking, and access control.",
    tech: "React.js, Node.js, Express, MongoDB",
    link: "https://subscription-based-system.netlify.app/"
  },
  {
    title: "Laundry-Service",
    description: "Full-stack laundry service platform with user authentication, order tracking, and admin panel.",
    tech: "React, Node.js, MongoDB, Express, MySQL",
    link: "https://github.com/surajbhandwalkar/Laundry-management-system"
  },
  {
    title: "Live Location Tracker",
    description: "Real-time location tracking with Google Maps API and WebSockets.",
    tech: "React, Express, MongoDB, Firebase, Google Maps API",
    link: "https://github.com/surajbhandwalkar/Live-Location-Tracker"
  },
  {
    title: "Text To Speech Converter",
    description: "Converts paragraphs into downloadable MP3 audio.",
    tech: "React, JavaScript, HTML, CSS",
    link: "https://github.com/surajbhandwalkar/TEXT-TO-SPEECH-Converter"
  }
];

const Projects = () => {
  return (
    // <section className="projects-section">
    //   <h2>Projects</h2>
    //   {projects.map((project, index) => (
    //     <div className="project-card" key={index}>
    //       <h3>{project.title}</h3>
    //       <p>{project.description}</p>
    //       <p><strong>Tech Stack:</strong> {project.tech}</p>
    //       <p><strong>Link: </strong> 
    //         <a href={project.link} target="_blank" rel="noopener noreferrer">
    //           {project.link}
    //         </a>
    //       </p>
    //     </div>
    //   ))}
    // </section>
  
  
    <section className="projects-section">
  <h2>Projects</h2>
  <div className="project-grid">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Tech Stack:</strong> {project.tech}</p>
        <p>
          <strong>Link: </strong>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Projects;
