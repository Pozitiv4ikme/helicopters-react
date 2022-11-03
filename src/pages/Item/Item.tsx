import styles from "./Item.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import badPig from "../../assets/images/badpig.jpeg";
import helicopterItem from "../../assets/images/helicopterItemPage.jpeg";
import successStatus from "../../assets/images/successStatus.svg";
import descriptionIcon from "../../assets/images/descriptionIcon.svg";
import passangersIcon from "../../assets/images/passangersIcon.svg";
import speedIcon from "../../assets/images/speedIcon.svg";
import { getHelicopters } from "../../services/helicopterAPI";
import HelicopterProps from "../../types/HelicopterProps";

export const Item: React.FC = () => {
  const { id } = useParams();
  const like = useRef<SVGSVGElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [helicoptersData, setHelicoptersData] = useState<HelicopterProps[]>([]);
  useEffect(() => {
    getHelicopters().then(setHelicoptersData).then(() => setIsLoading(false))
  }, [isLoading]);

  const addToFavorite = () => {
    const likeCheck = document.getElementById("likeCheck") as HTMLInputElement;

    if (likeCheck.checked === true) {
      like.current && like.current.setAttribute("fill", "red");
    } else {
      like.current && like.current.setAttribute("fill", "black");
    }
  };

  const helicopter =
    helicoptersData &&
    helicoptersData.find((item) => {
      let helicId = item.id;
      let paramId = parseInt(id!);
      if (isNaN(paramId)) {
        console.log("Helicopter id invalid");
        return undefined;
      } else {
        return helicId === paramId;
      }
    });

  return (
    <div className={styles.item}>
      <section className={styles.itemContainer}>
        <div className={styles.itemPreview}>
          <h1 className={styles.itemName}>{helicopter?.name}</h1>
          <img
            className={styles.itemPhoto}
            src={helicopterItem}
            alt="helicopter"
          />
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemProperties}>
            <div className={styles.description}>
              <img
                className={styles.descriptionIcon}
                src={descriptionIcon}
                alt="description icon"
              />
              <p className={styles.descriptionText}>
                {helicopter?.description} <br /> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Iusto, reprehenderit tempora dolor
                ratione iure laborum quidem, inventore perspiciatis sed error
                nulla quaerat eos culpa. Excepturi.
              </p>
            </div>
            <div className={styles.passangersProps}>
              <img
                className={styles.passangersIcon}
                src={passangersIcon}
                alt="passangers icon"
              />
              <p className={styles.amountOfPassangers}>
                {helicopter?.amount_of_passengers}
              </p>
            </div>
            <div className={styles.maxSpeedProps}>
              <img
                className={styles.maxSpeedIcon}
                src={speedIcon}
                alt="speed icon"
              />
              <p className={styles.maxSpeed}>{helicopter?.maximum_speed} (km/h)</p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.checkStatus}>
              <img
                className={styles.successStatus}
                src={successStatus}
                alt="success status"
              />
              <p className={styles.status}>Is available</p>
            </div>
            <input
              id="likeCheck"
              className={styles.likeCheck}
              type="checkbox"
              onClick={addToFavorite}
            />
            <label htmlFor="likeCheck">
              <svg
                ref={like}
                fill="current"
                className={styles.addToFavorite}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -256 1850 1850"
              >
                <g transform="matrix(1,0,0,-1,37.966102,1343.4237)">
                  <path d="m 896,-128 q -26,0 -44,18 L 228,492 q -10,8 -27.5,26 Q 183,536 145,583.5 107,631 77,681 47,731 23.5,802 0,873 0,940 q 0,220 127,344 127,124 351,124 62,0 126.5,-21.5 64.5,-21.5 120,-58 55.5,-36.5 95.5,-68.5 40,-32 76,-68 36,36 76,68 40,32 95.5,68.5 55.5,36.5 120,58 64.5,21.5 126.5,21.5 224,0 351,-124 127,-124 127,-344 0,-221 -229,-450 L 940,-110 q -18,-18 -44,-18" />
                </g>
              </svg>
            </label>
          </div>
        </div>
      </section>
      <section className={styles.itemContainerNavigation}>
        <p className={styles.itemPrise}>Price: {helicopter?.price}$</p>
        <div className={styles.navigation}>
          <Link to="/catalog" className={styles.btnReturn}>
            Go back
          </Link>
          <button className={styles.btnAdd}>Add to cart</button>
        </div>
      </section>
    </div>
  );
};
