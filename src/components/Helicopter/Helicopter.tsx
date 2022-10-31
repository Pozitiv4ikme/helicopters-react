import styles from "./Helicopter.module.scss";
import helicopter from "../../assets/images/helicopter.jpeg";
import HelicopterProps from "../../types/HelicopterProps";
import { Link } from "react-router-dom";

export const Helicopter: React.FC<HelicopterProps> = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>{props.name}</h2>
            <img src={helicopter} alt="helicopter" />
            <div className={styles.cardDescription}>
                <p className={styles.cardName}>{props.name}</p>
                <p>Amount of passangers(max): {props.amountOfPassangers}</p>
                <p>Maximum speed: {props.maxSpeed} (km/h)</p>
                <p>Price: {props.price}($)</p>
                <Link to={`/catalog/${props.id}`} className={styles.viewMoreBtn}>View more</Link>
            </div>
        </div>
    );
}