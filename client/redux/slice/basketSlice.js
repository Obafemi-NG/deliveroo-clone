import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeItemFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("error!");
      }
      state.items = newBasket;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

export const selectBasketItem = (state) => state.basket.items;

export const selectBasketItemById = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
