import React, { useState, useRef } from "react";
import "./project-card.css";
import Lightbox from "../Lightbox/Lightbox"//modal imagen
function ProjectCard({ project }) {
  const itemref = useRef(null);

  const [isShowLightbox, toggleLightBox] = useState(false);

  const showLightBox = (e, project) => {
    e.preventDefault();
    toggleLightBox(!isShowLightbox);
    itemref.current = project;
  };
  const onClose = () => {
    toggleLightBox(!isShowLightbox);
    itemref.current = null;
  };
 
  //lo de arriba sirve para mi modal imagen
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"> </i> Github
                 
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag" >{tag}</label>;
          })}
        </div>
      </div>
     
      <img src={project.image} className="project-photo"
      onClick={(e) => showLightBox(e, project)}  />
     
      {isShowLightbox ? (
        <Lightbox project={itemref.current} onClose={onClose} />
      ) : (
        ''
      )}
    </div>
  );
}

export default ProjectCard;
