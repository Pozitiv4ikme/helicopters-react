import styles from "./Footer.module.scss";
import React from "react";
import facebook from "../../assets/images/FacebookIcon.svg";
import instagram from "../../assets/images/InstagramIcon.svg";
import linkedin from "../../assets/images/LinkedinIcon.svg";
import github from "../../assets/images/GitHubIcon.svg";
import twitter from "../../assets/images/TwitterIcon.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.socialMedias}>
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={linkedin} alt="LinkedIn" />
        <img src={github} alt="GitHub" />
        <img src={twitter} alt="Twitter" />
      </nav>
      <p className={styles.copyright}>2022 IoT © Copyright all rights reserved, bla bla</p>
    </footer>
  );
};
