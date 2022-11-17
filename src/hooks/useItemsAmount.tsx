import { items, useAppSelector } from "../redux";

export const useItemsAmount = () => {
  const helicopters = useAppSelector(items);
  

  const countItems = () => { 
    let amountOfItems = 0;

    for (const helicopter of helicopters) {
       amountOfItems = amountOfItems + helicopter.count
    }
    return amountOfItems;
  };

  return { countItems };
};