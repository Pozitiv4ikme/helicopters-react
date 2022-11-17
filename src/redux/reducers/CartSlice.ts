import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItemsInfo } from "../../types/CartItemInfo";

const initialState: CartItemsInfo[] = [];

const CartItemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<[number, number]>) => {
      const itemId = action.payload[0];
      const itemPrice = action.payload[1]; 

      const prevItemId = state.findIndex(
        (item: CartItemsInfo) => item.id === itemId
      );

      if (prevItemId !== -1) {
        const prevItem = state[prevItemId];
        state[prevItemId] = {
          ...prevItem,
          count: prevItem.count + 1,
          price: itemPrice * (prevItem.count + 1),  
        };
      } else {
        state.push({ id: itemId, count: 1, price: itemPrice });
      }

      return state;
    },

    removeItemFromCart: (state, action: PayloadAction<[number, number]>) => {
      const itemId = action.payload[0];
      const itemPrice = action.payload[1];

      const prevItemId = state.findIndex(
        (item: CartItemsInfo) => item.id === itemId
      );

      const prevItem = state[prevItemId];

      if (prevItem.count > 1) {
        state[prevItemId] = {
          ...prevItem,
          count: prevItem.count - 1,
          price: prevItem.price - itemPrice,
        };
      } else {
        state = state.filter((item) => item.id !== itemId);
      }

      return state;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = CartItemSlice.actions;
export const CartReducer = CartItemSlice.reducer;
export const items = (state: RootState) => state.CartReducer;
