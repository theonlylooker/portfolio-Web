import React from "react";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <section id="HOME" className={`flex  ${style.home}`}>
      <div className={`card flex`}>
        <h1 className={`fs-700`}>
          Hola Me Llamo <p className={`${style.name}`}>Eduardo</p> un Full Stack
          Developer
        </h1>
        <p className="fs-500">
          Soy un aprendiz Full Stack developer con conocimento en React y Nodejs
        </p>
      </div>
    </section>
  );
};

export default Home;
