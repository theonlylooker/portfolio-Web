import React from "react";
import SkillsBlock from "./SkillsBlock";
import style from "../styles/Skills.module.css";

const Skills = () => {
  const FrontEnd = ["react", "html5", "css3", "javascript"];
  const BackEnd = ["nodejs", "express"];
  const DataBases = ["mysql", "mongodb"];
  const Language = ["cplusplus", "python"];
  const Control = ["git"];
  return (
    <section id="SKILLS" className={`flex ${style.skills}`}>
      <h1>Habilidades Tecnicas</h1>
      <div className={style.grid}>
        <SkillsBlock skills={FrontEnd} title="FRONTEND" />
        <SkillsBlock skills={BackEnd} title="BACKEND" />
        <SkillsBlock skills={DataBases} title="DATABASES" />
        <SkillsBlock skills={Language} title="LENGUAJES" />
        <SkillsBlock skills={Control} title="CONTROL DE VERSIONES" />
      </div>
    </section>
  );
};

export default Skills;
