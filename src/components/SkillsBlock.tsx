import React from "react";
import Skill from "./Skill";
import type { FC } from "react";
import { BlockProps } from "../types/types";
import style from "../styles/SkillsBlock.module.css";
const SkillsBlock: FC<BlockProps> = ({ skills, title }) => {
  return (
    <div className={`${style.skillCard} `}>
      <h2>{title}</h2>
      <div
        className={`grid ${skills.length > 1 ? style.block2c : style.block1c}`}
      >
        {skills.map((element, index) => (
          <Skill key={index} skillElement={element}></Skill>
        ))}
      </div>
    </div>
  );
};

export default SkillsBlock;
