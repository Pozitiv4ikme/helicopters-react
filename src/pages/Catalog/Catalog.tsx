import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  ChangeEvent,
} from "react";
import styles from "./Catalog.module.scss";
import { Helicopter } from "./../../components";
import { HelicopterProps } from "../../types";
import { getHelicopters } from "./../../services";

export const Catalog: React.FC = () => {
  const [helicoptersData, setHelicoptersData] = useState<HelicopterProps[]>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHelicopters()
      .then(setHelicoptersData)
      .then(() => setIsLoading(false));
  }, [isLoading]);

  const selectPriceSort = useRef<HTMLSelectElement>(null);

  const listOfItems = useMemo(() => {
    return helicoptersData && [...helicoptersData];
  }, [isLoading]);

  const [sortBySpeedInputValue, setSortBySpeedInputValue] = useState(false);
  const [sortByPassengersInputValue, setSortByPassengersInputValue] =
    useState(false);
  const [searchByNameInputValue, setSearchByNameInputValue] = useState("");

  const handleSpeedInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortBySpeedInputValue((prevState) => !prevState);
    setSortByPassengersInputValue(false);
  };

  const handlePassangersInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortByPassengersInputValue((prevState) => !prevState);
    setSortBySpeedInputValue(false);
  };

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchByNameInputValue(e.target.value);
  };

  useEffect(() => {
    getHelicopters(searchByNameInputValue).then(setHelicoptersData);
  }, [searchByNameInputValue]);

  const sortBySpeed = () => {
    if (!sortBySpeedInputValue) {
      setHelicoptersData(
        (prevState) =>
          prevState &&
          [...prevState].sort((a, b) =>
            a.maximum_speed > b.maximum_speed ? 1 : -1
          )
      );
    } else {
      setHelicoptersData(listOfItems);
    }
  };

  const sortByPassengers = () => {
    if (!sortByPassengersInputValue) {
      setHelicoptersData(
        (prevState) =>
          prevState &&
          [...prevState].sort((a, b) =>
            a.amount_of_passengers > b.amount_of_passengers ? 1 : -1
          )
      );
    } else {
      setHelicoptersData(listOfItems);
    }
  };

  const sortByPrice = () => {
    const items = helicoptersData && [...helicoptersData];

    if (
      selectPriceSort.current &&
      selectPriceSort.current.selectedIndex === 1
    ) {
      setHelicoptersData(items!.sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else if (
      selectPriceSort.current &&
      selectPriceSort.current.selectedIndex === 2
    ) {
      setHelicoptersData(items!.sort((a, b) => (a.price < b.price ? 1 : -1)));
    } else {
      setHelicoptersData(listOfItems);
    }
  };
  // ! - uncheck, ? - may be undefined

  const helicoptersItems =
    helicoptersData &&
    helicoptersData.map((helicopters) => {
      return <Helicopter key={helicopters.id} {...helicopters} />;
    });
  return (
    <>
      <div className={styles.catalog}>
        <section className={styles.catalogFilter}>
          <div className={styles.catalogFilterSelect}>
            <select
              defaultValue="0"
              ref={selectPriceSort}
              className={styles.sortByPrise}
              onChange={sortByPrice}
            >
              <option value="0">Select sort by price:</option>
              <option value="1">from cheaper to more expensive</option>
              <option value="2">from expensive to cheap</option>
            </select>
            <div className={styles.dropdownMenu}>
              <span>Sort by:</span>
              <div className={styles.content}>
                <input
                  type="checkbox"
                  id="sortByPassengers"
                  onClick={sortByPassengers}
                  onChange={handlePassangersInputChange}
                  checked={sortByPassengersInputValue}
                />
                <label htmlFor="sortByPassengers">amount of passengers</label>

                <input
                  type="checkbox"
                  id="sortBySpeed"
                  onClick={sortBySpeed}
                  onChange={handleSpeedInputChange}
                  checked={sortBySpeedInputValue}
                />
                <label htmlFor="sortBySpeed">maximum speed</label>
              </div>
            </div>
          </div>
          <div className={styles.catalogFilterHelicopter}>
            <input
              className={styles.catalogFilterHelicopterName}
              onChange={handleNameInputChange}
              type="text"
              placeholder="Input helecopter name..."
            />
            <button className={styles.catalogFilterHelicopterBtn}>Find</button>
          </div>
        </section>
        <main
          className={styles.catalogCardSection}
          style={{ display: isLoading ? "flex" : "grid", alignItems: "center" }}
        >
          {isLoading === true ? (
            <div className={styles.loader}>Loading...</div>
          ) : (
            helicoptersItems
          )}
        </main>
      </div>
    </>
  );
};
