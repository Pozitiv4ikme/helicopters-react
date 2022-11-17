import { Link } from "react-router-dom";
import styles from "./Success.module.scss";
import successImg from "./../../assets/images/success.svg";

export const Success: React.FC = () => {
    return (
        <div className={styles.successContainer}>
            <img src={successImg} alt="success order" className={styles.successImg}/>
            <h4 className={styles.title}>Success!</h4>
            <p className={styles.textInfo}>Your order wa sent to processing!<br/>Check your email box for further information.</p>
            <Link to="/catalog" className={styles.navigate}>Go back to Catalog</Link>
        </div>
    );
}