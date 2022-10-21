import "./Home.scss";
import helicopter from "../../assets/images/helicopter.jpeg";
import { HelicopterCard } from "../../components/HelicopterCard/HelicopterCard";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <img src={helicopter} alt="helicopter-1" />
        <div>
          <h2>Helicopter Crew-234B</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolorum enim impedit alias quos nemo cumque hic quia voluptate, quo
            ipsam et consequatur nobis iure quod, sed placeat dolore esse eius!
            Nesciunt temporibus ut placeat fuga harum? Possimus vitae enim
            commodi quia veritatis rem tempora sit, laboriosam officiis iusto
            amet?
          </p>
        </div>
      </div>
      <section>
        <div>
          <HelicopterCard
            header="Helicopter-Cuk12"
            description="
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Placeat sunt iste doloremque perferendis adipisci, nam laboriosam 
                            non perspiciatis quod illo!"
          />
          <HelicopterCard
            header="Helicopter-Fuk43"
            description="
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Placeat sunt iste doloremque perferendis adipisci, nam laboriosam 
                            non perspiciatis quod illo!"
          />
          <HelicopterCard
            header="Helicopter-Suk312"
            description="
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Placeat sunt iste doloremque perferendis adipisci, nam laboriosam 
                            non perspiciatis quod illo!"
          />
        </div>
        <button>View more</button>
      </section>
    </div>
  );
};
