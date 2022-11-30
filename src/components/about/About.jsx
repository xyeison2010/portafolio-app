import React from "react";
import SocialContact from "../../containers/common/social-contact/socialContact";
import "./about.css";
import coding from '../../images/coding.png';
import mi_foto from '../../images/yo.png';
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hola 👋, Soy un  <br />
          <span className="info-name">Desarrollador Full Stack</span><br />  
         con sede en la animada ciudad de Lima, Perú. <br /> 
        !Que bueno verte!
      
        </div> 
        <div className="about-photo">
          <img
           // src={require("../../../assets/image/coding.png").default}
            src={mi_foto}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}
//You should use /images/img-2.jpg/ to refer to the folder.
// The reason is that you are using create-react-app to create this React app.
export default About;
