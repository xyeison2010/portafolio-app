import React, { useState, useRef } from 'react';
import './projects.css';
import ProjectCard from './project-card';
import { ProjectData } from '../../data/projects';
import Separator from '../../containers/common/separator/Separator';

function Projects() {
  const data = ProjectData;
  return (
    <>
      <div className="projects">
        <Separator />
        <label className="section-title">Proyectos</label>
        <p>
          Todos los días, me dediqué a construir algo a partir de lo que aprendí, a continuación hay{' '}
          <br /> una lista de sitios web que hice últimamente, algunos tardaron un par de días en
          completarse.
        </p>

        <div>
          {data.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>

        <a href="https://github.com/xyeison2010">
          <button>Ver más</button>
        </a>
      </div>
    </>
  );
}

export default Projects;
