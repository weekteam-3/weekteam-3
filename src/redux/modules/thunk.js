import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodos = createAsyncThunk(
  "todos/addTodos",
  async (payload, thunkAPI) => {
    console.log("addTodo", payload);
    try {
      const { data } = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
