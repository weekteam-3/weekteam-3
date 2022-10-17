import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/Modules";

const store = configureStore({
  reducer: {
    todo: todo.reducer,
  },
});

export default store;
