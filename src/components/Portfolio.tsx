import React from "react";
import type { FC } from "react";
import { indexFetchWorks } from "../types/types";
import WorkBlock from "./WorkBlock";
import style from "../styles/Portfolio.module.css";

const Portfolio: FC<indexFetchWorks> = ({ works }) => {
  return (
    <section id="PORTFOLIO" className={`flex ${style.portfolio}`}>
      <h1>Portfolio</h1>
      <div className={style.grid}>
        {works &&
          works.map((work, index) => <WorkBlock key={index} work={work} />)}
      </div>
    </section>
  );
};

export default Portfolio;
