import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";

// Configure Redux store
export const store = configureStore({
  reducer: todoReducer,
});


