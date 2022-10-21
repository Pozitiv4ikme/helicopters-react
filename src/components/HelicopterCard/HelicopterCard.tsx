import React from "react";
import "./HelicopterCard.module.scss";
import helicopter from "../../assets/images/helicopter2.jpeg";

interface HelicopterCardProps {
  header: string;
  description: string;
}

export const HelicopterCard: React.FC<HelicopterCardProps> = (props) => {
  return (
    <article>
      <img src={helicopter} alt="helicopter" />
      <h2>{props.header}</h2>
      <p>{props.description}</p>
    </article>
  );
};
