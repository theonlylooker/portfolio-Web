import React from "react";
import type { FC } from "react";
import { NavBarItemProps } from "../types/types";
import Link from "next/link";
import style from "../styles/NavBar.module.css";
const NavBarItem: FC<NavBarItemProps> = ({ name }) => {
  return (
    <li className="navBarItem">
      <Link href={`#${name}`}>
        <a className={style.navBarLink}>{name}</a>
      </Link>
    </li>
  );
};

export default NavBarItem;
