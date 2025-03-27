import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gestion des Caisses",
      description: "Application java console pour la gestion d une banque",
      technologies: ["Java"],
      github: "https://github.com/Tsiemi-eude/gestioncaisse",
      demo: "#"
    },
    {
      id: 2,
      title: "Gestion des Emprunts",
      description: "gestion des emprunts dans une bibliotheque",
      technologies: ["C#"],
      github: "https://github.com/Tsiemi-eude/16-gestEmprunt",
      demo: "#"
    },
    {
      id: 4,
      title: "E-commerce App",
      description: "Une application e-commerce complète avec panier, paiement et gestion des utilisateurs.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Gestion des Presence",
      description: "Gestion des presences dans une universite privee",
      technologies: ["HTML", "JavaScript","PHP", "CSS"],
      github: "https://github.com/Tsiemi-eude/gestion_presence",
      demo: "#"
    },
    {
      id: 5,
      title: "Task Manager",
      description: "Application de gestion de tâches avec drag-and-drop et notifications.",
      technologies: ["React", "Redux", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Ce portfolio créé avec React et Vite.",
      technologies: ["React", "Vite", "CSS"],
      github: "#",
      demo: "#"
    }
      
  ];

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Démo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;