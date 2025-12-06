import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="project-card">
      <div className="carousel">
        <button onClick={prevImg} className="carousel-btn"><ChevronLeft /></button>
        {/* Agregamos una validación por seguridad por si no hay imagen */}
        <img 
          src={project.images && project.images.length > 0 ? project.images[currentImg] : ''} 
          alt={project.title} 
        />
        <button onClick={nextImg} className="carousel-btn"><ChevronRight /></button>
      </div>
      
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="links">
          {/* Solo dejamos el botón de Código */}
          <a href={project.codeUrl} target="_blank" rel="noreferrer">Ver Código en GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;