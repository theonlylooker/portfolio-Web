import React from "react";
import style from "../styles/About.module.css";

const About = () => {
  return (
    <section id="ABOUT" className={`flex ${style.about}`}>
      <h2 className="fs-500">SOBRE MI</h2>
      <div className="card">
        <h1 className="fs-700">Quien Soy Yo</h1>
        <div className={`flex ${style.text}`}>
          <p>
            Soy un egresado y bachiller de la carrera de Ciencia de la
            Computacion, tengo conocimientos en lenguajes como C++, Python,
            MySql y con ellos desarrolle sistemas de recomendacion basicos
            ademas de un sistema de rutas cortas para web. Creando el sistema de
            rutas cortas empece a usar mas javascript y recolecciones JSON lo
            que me volvio curioso y empece a profundizar en este lenguaje y el
            desarrollo web.
          </p>
          <p>
            Me profundice en HTML, CSS, Javascript seguidamente prosegui con
            ReactJS, NodeJS, interaccion con MongoDB. Todavia soy un
            principiante pero tengo hambre de conocimiento
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
