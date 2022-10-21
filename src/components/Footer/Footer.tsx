import "./Footer.module.scss";
import React from "react";
import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import youtube from "../../assets/images/Youtube.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={youtube} alt="Youtube" />
      </nav>
      <p>2022 IoT © Copyright all rights reserved, bla bla</p>
    </footer>
  );
};
