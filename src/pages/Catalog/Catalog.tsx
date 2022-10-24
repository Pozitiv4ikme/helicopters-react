import React, { useState } from "react";
import styles from "./Catalog.module.scss";
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
    {
      key: 5,
      name: "Taras",
      amountOfPassangers: 5,
      maxSpeed: 2,
      price: 1,
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
    <div className={styles.catalog}>
      <section className={styles.catalogFilter}>
        <div className={styles.catalogFilterSelect}>
            <select className={styles.sortByPrise}>
                <option value="0">Select sort by price:</option>
                <option value="1">from cheaper to more expensive</option>
                <option value="2">from expensive to cheap</option>
            </select>
            <div className={styles.dropdownMenu}>
              <span>Sort by:</span>
              <div className={styles.content}>
                  <input type="checkbox" id="sortByPassengers"/>
                  <label htmlFor="sortByPassengers">amount of passengers</label>

                  <input type="checkbox" id="sortBySpeed"/>
                  <label htmlFor="sortBySpeed">maximum speed</label>
              </div>
            </div>
        </div>
        <div className={styles.catalogFilterHelicopter}>
            <input className={styles.catalogFilterHelicopterName} type="text" placeholder="Input helecopter name..."/>
            <button className={styles.catalogFilterHelicopterBtn}>Find</button>
        </div>
      </section>
      <main className={styles.catalogCardSection}>{helicopters}</main>
    </div>
  );
};
