import { useMemo } from "react";
import { items, useAppSelector } from "../redux";

export const useTotalPrice = () => {
  const helicopters = useAppSelector(items);
  

  const countTotalPrice = useMemo(() => { 
    let totalPrice = 0;
    for (const helicopter of helicopters) {
        totalPrice = totalPrice + helicopter.price;
    }
    return totalPrice;
  }, [items]);

  return { countTotalPrice };
};
