import React, { useState } from 'react';

import './slider.css';
import SliderCard from './SliderCard';

import { data } from './data';


const Slider = () => {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = data?.length;

  // Return prematuro para evitar errores
  /* 	if (!Array.isArray(data) || cantidad === 0) return; */
console.log("render")
  const prevSlide = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  const nextSlide = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  return (
    <>
      {data.map((datos, index) => {
        if (index === imagenActual)
          return (
            <section
              key={datos.id}
            /*   style={{ backgroundImage: `url(${datos.img})` }} */
              className="slide-section"
            >
              <div className="contain">
                <button className="btn-icon" onClick={prevSlide}>
                  ❮
                </button>
                <div className="post">
                  <SliderCard datos={datos} />
                </div>
                <button className="btn-icon" onClick={nextSlide}>
                  ❯
                </button>
              </div>
              <div className="scroll-btn">
                {data.map((dato) => (
                  <button
                    className={imagenActual === dato.id - 1 ? 'active' : ''}
                    onClick={() => setImagenActual(dato.id - 1)}
                  ></button>
                ))}
              </div>
            </section>
          );
      })}
    </>
  );
};

export default Slider;
/* -1, porque itera de 0 la imagen actual */
