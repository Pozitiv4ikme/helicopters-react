import { useState, useEffect, ChangeEvent } from "react";
import styles from "./Cart.module.scss";
import pig from "../../assets/images/badpig.jpeg";

export const Cart: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hi, Dupa!");
  }, []);

  const handleCountChange = () => {
      setCount((prevCount) => prevCount + 1)
      setUpdatedDia(countDia);
  }

  useEffect(() => {
    console.log("Dupa + " + count);
  }, [count]);

  const [dia, setDia] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDia(e.target.value);
    setCountDia((prevCountDia) => prevCountDia + 1);
  };

  const [countDia, setCountDia] = useState(0);

  const [updatedDia, setUpdatedDia] = useState(0);

  return (
    <>
      <div>
        <p>Count click: {count}</p>
        <button onClick={handleCountChange}>
          Click
        </button>
      </div>
      <div>
        <input type="text" onChange={handleInputChange} value={dia} />
        {/* {dia.length % 2 === 0 && <p>Current dia: {updatedDia}</p>} */}
        <p>Current dia: {updatedDia}</p>
      </div>
      <div className={styles.contextMenu}>
        <img src={pig} alt="bad pig" className={styles.badPig} />
      </div>
    </>
  );
};
