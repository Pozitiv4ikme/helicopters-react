import React from "react";
import styles from "./HelicopterCard.module.scss";
import helicopter from "../../assets/images/helicopter2.jpeg";

interface HelicopterCardProps {
  header: string;
  description: string;
}

export const HelicopterCard: React.FC<HelicopterCardProps> = (props) => {
  return (
    <article className={styles.helicopterCard}>
      <img className={styles.helicopterPhoto} src={helicopter} alt="helicopter" />
      <h2 className={styles.helicopterName}>{props.header}</h2>
      <p className={styles.helicopterDescription}>{props.description}</p>
    </article>
  );
};
