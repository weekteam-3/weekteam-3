import { configureStore } from "@reduxjs/toolkit";
import card from "../../components/card/Card";
import todos from "../modules/Modules";
import cardSlice from "../modules/CardSlice";
import todo from "../modules/todoModule";


const store = configureStore({
  reducer: {
    todos: todos.reducer,
    card: card,
    CardSlice: cardSlice,
    todoModule: todo,
  },
});

export default store;
