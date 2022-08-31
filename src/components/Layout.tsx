import React, { ReactNode } from "react";
import type { FC } from "react";
import Footer from "./Footer";
import { layoutProps } from "../types/types";
import Header from "./Header";

const Layout: FC<layoutProps> = (props) => {
  const navBarItems = ["HOME", "ABOUT", "SKILLS", "PORTFOLIO", "CONTACT"];
  return (
    <div>
      <Header items={navBarItems}></Header>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
