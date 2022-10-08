import React from "react";
import "./contact.css";
import SocialContact from "../../containers/common/social-contact/socialContact";
import Separator from "../../containers/common/separator/Separator";
import MyPDF from '../../files/leo_cv.pdf'; //mi pdf
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contacto</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>¿Hay un deseo de involucrarme en algún trabajo creativo o co-trabajo? 
            ¿O simplemente quieres saludar? No dude en enviarme un mensaje de todos modos.</p>
          <SocialContact />
        </div>
        <div className="download">
          <a  href={MyPDF} download="My_File.pdf">
            <i class="fi-rr-cloud-download download-icon" />
            Resumen
          </a>
        </div>
      </div>
    </div>
  );
}
//import MyPDF from '../path/to/file.pdf';
//<a href={myPDF} download="My_File.pdf"> Download Here </a>
export default Contact;
