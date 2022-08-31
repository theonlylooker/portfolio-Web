import React from "react";
import NavBar from "./NavBar";
import type { FC } from "react";
import { headerProps } from "../types/types";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import Image from "next/image";
import style from "../styles/Header.module.css";

const Header: FC<headerProps> = ({ items }) => {
  const [modal, setModal] = useModal();
  return (
    <div className={`flex ${style.myHeader}`}>
      <p>Onlylooker</p>
      <div className={style.desktopNavBar}>
        <NavBar items={items}></NavBar>
      </div>
      <div className={style.mobileNavBar}>
        <div>
          <Image
            onClick={setModal}
            src={"/icon-menu.svg"}
            height={"20"}
            width={"20"}
          />
        </div>
        <Modal modal={modal} items={items} />
      </div>
    </div>
  );
};

export default Header;
