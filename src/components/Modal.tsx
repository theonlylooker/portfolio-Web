import React from "react";
import type { FC } from "react";
import { ModalProps } from "../types/types";
import styles from "../styles/Modal.module.css";
import NavBar from "./NavBar";

const Modal: FC<ModalProps> = ({ modal, items }) => {
  return (
    <div className={`${modal === true ? styles.open : styles.close}`}>
      <div>
        <NavBar items={items}></NavBar>
      </div>
    </div>
  );
};

export default Modal;
