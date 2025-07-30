import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // <-- should be an object, not an array
  totalQuantity: 0,
  // ...other fields
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      if (state.items[productId]) {
        state.items[productId] += 1;
      } else {
        state.items[productId] = 1;
      }
      state.totalQuantity += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
