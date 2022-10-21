import React from "react";
import "./Helicopter.scss";
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
        <div className="card-container">
            <h1 className="card-title">Item {props.name}</h1>
            <img src={helicopter} alt="helicopter" />
            <h1 className="card-name">{props.name}</h1>
            <p>Amount of passangers(max): {props.amountOfPassangers}</p>
            <p>Maximum speed: {props.maxSpeed} (km/h)</p>
            <p>Price: {props.price}($)</p>
            <button>View more</button>
        </div>
    );
}