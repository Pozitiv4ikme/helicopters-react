import React, { useState } from "react";
import HelicopterProps from "../types/HelicopterProps";

export const ItemContext = React.createContext<HelicopterProps[] | undefined>(undefined);
export const ItemContextProvider = (props: { children: React.ReactNode }) => {
  const [helicoptersData, setHelicoptersData] = useState([
    {
      id: 1,
      name: "Fan-134",
      amountOfPassangers: 10,
      maxSpeed: 244,
      price: 4214,
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure?",
    },
    {
      id: 2,
      name: "NdshA-12M",
      amountOfPassangers: 100,
      maxSpeed: 312,
      price: 13413,
      description: "Hic repellat numquam voluptatibus iure magnam alias in ut totam illum quasi?",
    },
    {
      id: 3,
      name: "BasoD-12Ds",
      amountOfPassangers: 1,
      maxSpeed: 400,
      price: 133333,
      description: "Ipsum tenetur porro laborum aspernatur quae.",
    },
    {
      id: 4,
      name: "Marko",
      amountOfPassangers: 1000,
      maxSpeed: 10000,
      price: 100213100,
      description: "Animi voluptatum officia eius architecto totam sed, reiciendis debitis molestiae sapiente esse dolorum enim ipsum odit laudantium consequuntur nemo iure rem in laborum iusto hic ab.",
    },
    {
      id: 5,
      name: "Taras",
      amountOfPassangers: 5,
      maxSpeed: 2,
      price: 1,
      description: "Earum totam excepturi a quo quas ab quod quasi nostrum illum magnam, repellendus doloremque aliquid, nisi dolorum sint numquam quisquam perspiciatis enim!",
    },
    {
      id: 6,
      name: "Nastia",
      amountOfPassangers: 141,
      maxSpeed: 132,
      price: 113,
      description: "Neque nobis totam culpa non optio ab odio sunt quam deserunt voluptatem provident consequuntur, eum repellendus eveniet sint nam. Modi non id magni voluptatem omnis reprehenderit! Error, cupiditate architecto nobis qui sit adipisci natus ducimus veniam alias?",
    },
    {
      id: 7,
      name: "Jadas",
      amountOfPassangers: 12,
      maxSpeed: 123,
      price: 3123,
      description: "Veniam sint quas maxime natus maiores vitae at unde quibusdam necessitatibus? Illo distinctio nesciunt quo ipsum recusandae necessitatibus, similique eaque, repudiandae inventore eius quas quasi excepturi est.",
    },
    {
      id: 8,
      name: "Kjfjf-12r",
      amountOfPassangers: 1221,
      maxSpeed: 3,
      price: 3123,
      description: "Fuga esse dolor cupiditate enim ad beatae ab sit distinctio perspiciatis deserunt? Quisquam pariatur magnam optio porro? Aliquid fugit veniam minima est voluptas obcaecati officiis ut amet magni illo!",
    },
    {
      id: 9,
      name: "Koli-3",
      amountOfPassangers: 33,
      maxSpeed: 13,
      price: 2133,
      description: "Facere sapiente aliquid dolore, expedita iusto quis accusantium officiis deserunt nam quisquam culpa repellat ducimus qui hic ea exercitationem voluptatem, id eligendi repudiandae. Veniam!",
    },
    {
      id: 10,
      name: "mJld-123J",
      amountOfPassangers: 20,
      maxSpeed: 1000,
      price: 100000,
      description: "Nobis earum nulla dicta voluptas, odit ipsam reprehenderit facilis laborum possimus neque, illo dolorum voluptatum sint cum velit adipisci asperiores?",
    }
  ]);
  return (
    <ItemContext.Provider value={helicoptersData}>
      {props.children}
    </ItemContext.Provider>
  );
};
