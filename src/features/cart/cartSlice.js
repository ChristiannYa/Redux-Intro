import { createSlice, createSelector } from '@reduxjs/toolkit';

const findCartItem = (items, id) => items.find((item) => item.id === id);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = findCartItem(state.items, action.payload.id);

      if (!existingItem) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });

        state.totalItems += 1;
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = findCartItem(state.items, id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        // Subtract the quantity of the removed item from totalItems
        state.totalItems -= state.items[itemIndex].quantity;

        // Remove the item from the array
        state.items.splice(itemIndex, 1);
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      // Check if item is found in the array
      if (existingItemIndex !== -1) {
        const item = state.items[existingItemIndex];

        item.quantity -= 1;
        state.totalItems -= 1;

        // If quantity reachers 0, remove the item from
        // the cart
        if (item.quantity === 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
    }
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  removeItemFromCart,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;

export const selectCartTotal = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

export default cartSlice.reducer;
