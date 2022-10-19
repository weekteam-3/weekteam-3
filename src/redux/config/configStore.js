import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/Modules";
import cardSlice from "../modules/cardSlice";
import todo from "../modules/todoModule";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
    CardSlice: cardSlice,
    todoModule: todo,
  },
});

export default store;
