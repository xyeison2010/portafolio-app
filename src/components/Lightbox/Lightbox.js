import React from 'react';
import './Lightbox.css';
const Lightbox = ({ project, onClose }) => {
  return (
    <div className="row lightbox-container">
      <div className="lightbox-holder">
        <span className="lightbox-close" onClick={onClose}>
          <i className="fas fa-window-close"></i>
        </span>
        <div
          className="lightbox-item"
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>
       {/*  <span className="lightbox-control btnLeft">
          <i className="fas fa-caret-left"></i>
        </span>
        <span className="lightbox-control btnRight">
          <i className="fas fa-caret-right"></i>
        </span> */}
      </div>
    </div>
  );
};

export default Lightbox;
