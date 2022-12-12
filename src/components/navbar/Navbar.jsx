import React from "react";
import { useState } from "react";
import "./navbar.css";
function Navbar() {

  return (
    <>
 
    <div className="web">
      
      <div className="web-option"  >
        <a href="#projects"  >
          <i class="fi-rr-edit-alt option-icon" ></i>Proyectos
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Habilidades
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Acerca
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contacto
        </a>
      </div>
    </div> </>
  );
}

export default Navbar;
