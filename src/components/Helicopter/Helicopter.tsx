import React from "react";
import styles from "./Helicopter.module.scss";
import helicopter from "../../assets/images/helicopter.jpeg";

interface HelicopterProps {
    key: number;
    name: string;
    amountOfPassangers: number;
    maxSpeed: number;
    price: number;
  }

export const Helicopter: React.FC<HelicopterProps> = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>Item {props.name}</h2>
            <img src={helicopter} alt="helicopter" />
            <div className={styles.cardDescription}>
                <p className={styles.cardName}>{props.name}</p>
                <p>Amount of passangers(max): {props.amountOfPassangers}</p>
                <p>Maximum speed: {props.maxSpeed} (km/h)</p>
                <p>Price: {props.price}($)</p>
                <button className={styles.viewMoreBtn}>View more</button>
            </div>
        </div>
    );
}