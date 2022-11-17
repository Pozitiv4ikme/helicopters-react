import styles from "./Home.module.scss";
import helicopterImg from "../../assets/images/helicopter.jpeg";
import { HelicopterCard } from "../../components";
import React, { useEffect, useState } from "react";
import { getHelicopters } from "../../services";
import { HelicopterProps } from "../../types";

export const Home: React.FC = () => {
  const initialLimit = 3;

  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(initialLimit);
  const [helicoptersData, setHelicoptersData] = useState<HelicopterProps[]>([]);

  const showMoreItems = () => {
    setLimit(limit + 3);
  };

  useEffect(() => {
    getHelicopters()
      .then(setHelicoptersData)
      .then(() => setIsLoading(false));
  }, [isLoading]);

  useEffect(() => {
    getHelicopters().then(setHelicoptersData).then(() => setIsLoading(false))
  }, [isLoading]);

  const helicopters =
    helicoptersData &&
    helicoptersData.slice(0, limit).map((helicopters) => {
      return (
        <HelicopterCard
          key={helicopters.id}
          header={helicopters.name}
          description={helicopters.description}
        />
      );
    });

  return (
    <div className={styles.home}>
      <div className={styles.helicopterPreview}>
        <img
          className={styles.helicopterPhoto}
          src={helicopterImg}
          alt="helicopter-1"
        />
        <div className={styles.helicopterDescription}>
          <h2 className={styles.helicopterName}>Helicopter Crew-234B</h2>
          <p className={styles.helicopterHistory}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolorum enim impedit alias quos nemo cumque hic quia voluptate, quo
            ipsam et consequatur nobis iure quod, sed placeat dolore esse eius!
            Nesciunt temporibus ut placeat fuga harum? Possimus vitae enim
            commodi quia veritatis rem tempora sit, laboriosam officiis iusto
            amet?
          </p>
          <svg
            className={styles.descriptionBuble}
            id="visual"
            viewBox="0 0 650 550"
            width="650"
            height="550"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g
              transform="translate(369.1365054226543 274.82631731544666)"
              filter="drop-shadow(7px 5px 3px #769e9e)"
            >
              <path fill="#9fcfd0">
                <animate
                  attributeName="d"
                  dur="20000ms"
                  repeatCount="indefinite"
                  values="M131.4 -133.4C175.4 -119.7 219.7 -83.1 224.5 -41.7C229.4 -0.2 194.8 46.2 165.8 95.1C136.8 144 113.4 195.6 78.7 202.1C44 208.6 -1.9 170.1 -65 156.6C-128.1 143.2 -208.2 154.9 -256.7 123C-305.1 91.1 -321.8 15.7 -309.2 -54.3C-296.6 -124.3 -254.7 -188.9 -198.3 -200.5C-141.8 -212 -70.9 -170.5 -13.6 -154.2C43.7 -138 87.4 -147.2 131.4 -133.4;
                  
                  M145.1 -148.7C201.5 -125.6 270 -92.7 289.3 -42.3C308.5 8 278.5 75.8 229.5 105.9C180.4 136 112.2 128.6 54.6 149.2C-3 169.7 -50.1 218.3 -89.7 216.8C-129.4 215.2 -161.7 163.6 -199.8 109.6C-238 55.5 -282 -1 -273.9 -48.5C-265.7 -96 -205.5 -134.6 -151.2 -158C-96.8 -181.4 -48.4 -189.7 -2 -187.3C44.4 -184.9 88.7 -171.7 145.1 -148.7;
                  
                  M131.4 -133.4C175.4 -119.7 219.7 -83.1 224.5 -41.7C229.4 -0.2 194.8 46.2 165.8 95.1C136.8 144 113.4 195.6 78.7 202.1C44 208.6 -1.9 170.1 -65 156.6C-128.1 143.2 -208.2 154.9 -256.7 123C-305.1 91.1 -321.8 15.7 -309.2 -54.3C-296.6 -124.3 -254.7 -188.9 -198.3 -200.5C-141.8 -212 -70.9 -170.5 -13.6 -154.2C43.7 -138 87.4 -147.2 131.4 -133.4"
                ></animate>
              </path>
            </g>
          </svg>
        </div>
      </div>
      <section className={styles.helicoptersSection}>
        <div className={styles.helicopters}>{helicopters}</div>
        <button
          className={styles.helicoptersSectionBtn}
          onClick={showMoreItems}
        >
          View more
        </button>
      </section>
    </div>
  );
};
