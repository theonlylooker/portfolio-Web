import React from "react";
import type { FC } from "react";
import NavBarItem from "./NavBarItem";
import { navbarProps } from "../types/types";
import styles from "../styles/NavBar.module.css";

const NavBar: FC<navbarProps> = ({ items }) => {
  return (
    <div>
      <div>
        <ul className={styles.navBarList}>
          {items.map((item, index) => (
            <NavBarItem key={index} name={item}></NavBarItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
