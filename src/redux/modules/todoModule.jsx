import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: [{ id: 1, title: "물먹기", date: "2012.04.06", content: "물먹기2" }],
};

//thunk
export const __getTodo = createAsyncThunk(
  "GET_TODO",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.get(`http://localhost:3001/todos/${payload}`);
      //axios를 통해 db.json에 있는 정보를 불러온 것
      // console.log("thunk에서 보낸다", result);
      return thunkAPI.fulfillWithValue(result.data);
      //성공하면 result.data를 보내고
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodo = createAsyncThunk(
  "UPDATE_TODO",
  async (payload, thunkAPI) => {
    try {
      const update = await axios.patch(
        `http://localhost:3001/todos/${payload.id}`,
        payload
      );
      console.log("thunk에서 수정한거 보낸다", update);
      return thunkAPI.fulfillWithValue(update.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "DELETE_TODO",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload}`);
      // console.log("thunk에서 보낸다", remove);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//업데이트는 axios.patch()
//삭제는 axios.delete()

//리듀서
export const todoModule = createSlice({
  name: "TODO",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    //성공했을시
    [__getTodo.fulfilled]: (state, action) => {
      // console.log("리듀서에서 받는다", action.payload);
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    [__updateTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodo.fulfilled]: (state, action) => {
      // console.log("리듀서에서 받는다", action.payload);
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      // console.log("리듀서에서 받는다", action.payload);
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

//47번줄 configureStore랑 연결
export const {} = todoModule.actions;
export default todoModule.reducer;

//try가 실패 됐을 시 catch로

// export const todo = createSlice({
//   name: "todo",
//   initialState,

//   reducers: {
//     addTodo: (state, action) => {
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     },
//   },
// });

// export const updateTodo = (payload) => {
//   console.log(updateTodo);
//   return {
//     type: UPDATE_TODO,
//     payload,
//   };
// };

// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// export const { addTodo } = todo.actions;
// export default todo;
