import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addItemToCart(state, action) {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          name: itemToAdd.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
