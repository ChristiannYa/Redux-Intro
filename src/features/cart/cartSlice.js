import { createSlice, createSelector } from '@reduxjs/toolkit';

const findCartItem = (items, id) => items.find((item) => item.id === id);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = findCartItem(state.items, action.payload.id);

      if (!existingItem) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = findCartItem(state.items, id);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = findCartItem(state.items, id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity would become zero
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  removeItemFromCart,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectIsItemInCart = (state, productId) =>
  state.cart.items.some((item) => item.id === productId);

export const selectCartItems = (state) => state.cart.items;

export const selectTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectAveragePrice = createSelector([selectCartItems], (items) => {
  const sumPrices = items.reduce((sum, item) => {
    const newSum = sum + item.price;
    return newSum;
  }, 0);

  const average = items.length ? sumPrices / items.length : 0;
  return average;
});

export default cartSlice.reducer;
