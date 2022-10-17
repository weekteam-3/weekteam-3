import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "물먹기", date: "2012.04.06", content: "물먹기2" }],
};

export const todo = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
  },
});

export const { addTodo } = todo.actions;
export default todo;
