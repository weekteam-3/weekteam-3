import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoModule";

const store = configureStore({
  reducer: {
    todoModule: todo,
  },
});

export default store;
