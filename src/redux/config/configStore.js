import { configureStore } from "@reduxjs/toolkit";
import card from "../../components/card/Card";
import todo from "../modules/Modules";
import cardSlice from "../modules/CardSlice";

const store = configureStore({
  reducer: {
    todo: todo.reducer,
    card: card,
    CardSlice: cardSlice,
  },
});

export default store;
