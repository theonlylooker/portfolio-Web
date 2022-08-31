import React from "react";
import Image from "next/image";
import type { FC } from "react";
import { workBlockProps } from "../types/types";
import style from "../styles/WorkBlock.module.css";
const WorkBlock: FC<workBlockProps> = ({ work }) => {
  return (
    <div className={`${style.block} flex`}>
      <h1>{work.name}</h1>
      <p className={style.text}>{work.description}</p>
      <Image src={work.image} width={100} height={100}></Image>
      <div>
        <a className={style.button} href={work.demo}>
          DEMO
        </a>
        <a className={style.button} href={work.link}>
          CODE
        </a>
      </div>
    </div>
  );
};

export default WorkBlock;
