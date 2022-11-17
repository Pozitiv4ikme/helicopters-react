import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../redux";
import { getHelicopterById } from "../../services";
import { CartItemsInfo } from "../../types/CartItemInfo";
import { HelicopterCartItem } from "../../types/HelicopterCartItem";
import styles from "./CartItem.module.scss";
import helicopter from "../../assets/images/helicopter.jpeg";

export const CartItem: React.FC<CartItemsInfo> = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [helicopterData, setHelicopterData] = useState<HelicopterCartItem>();

  useEffect(() => {
    getHelicopterById(JSON.stringify(props.id))
      .then(setHelicopterData)
      .then(() => setIsLoading(false));
  }, [isLoading]);

  return (
    <div className={styles.item}>
      <div className={styles.preview}>
        <img
          src={helicopter}
          alt="helicopter"
          className={styles.helicopterImg}
        />
        <div className={styles.textContainer}>
          <h5 className={styles.name}>{helicopterData?.name}</h5>
          <p className={styles.description}>{helicopterData?.description}</p>
        </div>
      </div>
      <div className={styles.countItem}>
        <button
          onClick={() =>
            dispatch(addItemToCart([props.id, helicopterData!.price]))
          }
          className={styles.plusBtn}
        >
          +
        </button>
        <p className={styles.number}>{props.count}</p>
        <button
          onClick={() =>
            dispatch(removeItemFromCart([props.id, helicopterData!.price]))
          }
          className={styles.minusBtn}
        >
          -
        </button>
      </div>
      <div className={styles.price}>
        <p>{props.price} $</p>
      </div>
    </div>
  );
};
