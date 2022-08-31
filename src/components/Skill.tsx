import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { SkillProps } from "../types/types";

const Skill: FC<SkillProps> = ({ skillElement }) => {
  return (
    <div>
      <Image
        src={
          skillElement === "javascript" ||
          skillElement === "express" ||
          skillElement === "cplusplus"
            ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillElement}/${skillElement}-original.svg`
            : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillElement}/${skillElement}-original-wordmark.svg`
        }
        alt={`A logo of ${skillElement}`}
        title={skillElement}
        width={50}
        height={50}
      />
    </div>
  );
};

export default Skill;
