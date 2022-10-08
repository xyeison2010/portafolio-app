import React, { useState, useRef } from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../data/projects";
import Separator from "../../containers/common/separator/Separator";

function Projects() {
 
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Proyectos</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
