import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  searchProduct: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existProductInCart = state.cartData.some(
        (product) => product.id === action.payload.id
      );

      if (existProductInCart) {
        const updateCartProduct = state.cartData.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );

        return {
          ...state,
          cartData: updateCartProduct,
        };
      } else {
        return {
          ...state,
          cartData: [...state.cartData, { ...action.payload, qty: 1 }],
        };
      }
    },
    getId(state, action) {
      state.id = action.payload;
    },
    deleteProduct(state, action) {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    increment(state, action) {
      state.cartData = state.cartData.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    changeSearchProduct(state, action) {
      state.searchProduct = action.payload || "";
    },
    decrement(state, action) {
      state.cartData = state.cartData.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increment,
  decrement,
  getId,
  changeSearchProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
