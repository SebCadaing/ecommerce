import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../reduxStore/productSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
