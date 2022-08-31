import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { NextPage } from "next";
import { indexFetchWorks } from "../types/types";

export const getStaticProps = async () => {
  const res = await fetch("https://the-portfolio-api.herokuapp.com/works");
  const data = await res.json();
  return {
    props: { works: data },
  };
};

const HomePage: NextPage<indexFetchWorks> = ({ works }) => {
  return (
    <div className={`container font centerText`}>
      <Home />
      <About />
      <Skills />
      <Portfolio works={works} />
      <Contact />
    </div>
  );
};

export default HomePage;
