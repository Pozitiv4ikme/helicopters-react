import React, { useState } from "react";
import "./Catalog.scss";
import { Helicopter } from "../../components/Helicopter/Helicopter";

export const Catalog: React.FC = () => {
  const [helicoptersData, setHelicoptersData] = useState([
    {
      key: 1,
      name: "Fan-134",
      amountOfPassangers: 10,
      maxSpeed: 244,
      price: 4214,
    },
    {
      key: 2,
      name: "NdshA-12M",
      amountOfPassangers: 100,
      maxSpeed: 312,
      price: 13413,
    },
    {
      key: 3,
      name: "BasoD-12Ds",
      amountOfPassangers: 1,
      maxSpeed: 400,
      price: 133333,
    },
    {
      key: 4,
      name: "Marko",
      amountOfPassangers: 1000,
      maxSpeed: 10000,
      price: 100213100,
    },
  ]);

  const helicopters = helicoptersData.map((helicopters) => {
    return (
      <Helicopter
        key={helicopters.key}
        name={helicopters.name}
        amountOfPassangers={helicopters.amountOfPassangers}
        maxSpeed={helicopters.maxSpeed}
        price={helicopters.price}
      />
    );
  });

  return (
    <div className="catalog">
      <section className="catalog--filter">
        <div className="catalog--filter-select">
            <select className="catalog--selectByPrice">
                <option value="0">Select sort by price:</option>
                <option value="1">from small to big</option>
                <option value="2">from big to small</option>
            </select>
            <select className="catalog--selectByPassangers">
                <option value="0">Select sort by amount of passangers:</option>
                <option value="1">from small to big</option>
                <option value="2">from big to small</option>
            </select>
            <select className="catalog--selectBySpeed">
                <option value="0">Select sort by maximum speed:</option>
                <option value="1">from small to big</option>
                <option value="2">from big to small</option>
            </select>
        </div>
        <div className="catalog--filter-helicopter">
            <input className="catalog--filter-helicopter-name" type="text" placeholder="Input helecopter name..."/>
            <button className="catalog--filter-helicopter-btn">Find</button>
        </div>
      </section>
      <main className="catalog-card-section">{helicopters}</main>
    </div>
  );
};
