import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { items, useAppSelector } from "./../../redux";
import { CartItem, WithAuth } from "../../components";

const CartComponent: React.FC = () => {
  const helicoptersData = useAppSelector(items);

  const helicopters = helicoptersData.map((item) => {
    return <CartItem key={item.id} {...item} />;
  });

  let totalPrice = 0;
  for (const helicopter of helicoptersData) {
    totalPrice = totalPrice + helicopter.price;
  }

  return helicoptersData.length === 0 ? (
    <div className={styles.loaderPage}>
      <span className={styles.loader}></span>
      <p className={styles.info}>
        We are waiting <br />
        for you to choose your product...
      </p>
    </div>
  ) : (
    <div className={styles.cartPage}>
      <div className={styles.orderInfo}>
        <h5 className={styles.title}>Shopping Cart</h5>
        <div className={styles.helicopters}>{helicopters}</div>
        <div className={styles.priceContainer}>
          <p className={styles.text}>Total price:</p>
          <p className={styles.price}>{totalPrice} $</p>
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <Link to="/catalog" className={styles.backToCatalog}>
          Back to Catalog
        </Link>
        <Link to="/cart/checkout" className={styles.countinue}>
          Countinue
        </Link>
      </div>
    </div>
  );
};

export const Cart: React.FC = () => <WithAuth><CartComponent /></WithAuth>