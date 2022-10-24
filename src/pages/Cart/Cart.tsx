import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hi, Dupa!")
    }, []);

    useEffect(() => {
        console.log("Dupa + " + count)
    }, [count]);

    return (
        <div>
            <p>Count click: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
        </div>
    );
}