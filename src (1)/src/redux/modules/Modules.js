import { createSlice } from "@reduxjs/toolkit";
import { __getTodos, __addTodos } from "./thunk";
const initialState = {
  todos: [{}],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__addTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [__addTodos.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default todos;
