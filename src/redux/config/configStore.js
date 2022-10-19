import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/Modules";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export default store;
