import React from "react";
import Image from "next/image";
import style from "../styles/Contact.module.css";
import Link from "next/link";
const Contact = () => {
  return (
    <section id="CONTACT" className={`${style.contact} flex`}>
      <h1>Contacto</h1>
      <p>PUEDES CONTACTARME A TRAVES DE LOS SIGUIENTES CANALES</p>
      <div className={`${style.sns} card`}>
        <Link href={"https://github.com/theonlylooker"}>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            height={50}
            width={50}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/eduard-basurco/"}>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            height={50}
            width={50}
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
