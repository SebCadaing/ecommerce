import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../data/sampleData";

type State = {
  products: Product[];
  selectedProduct: Product | null;
};

const initialState: State = {
  products: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    createProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.map((p) => (p.id === action.payload.id ? action.payload : p));
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    selectProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, createProduct, updateProduct, deleteProduct, selectProduct } = productSlice.actions;
