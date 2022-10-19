// import { Action } from "@remix-run/router";

// const ADD_COMMENT = "ADD_COMMENT";
// const

// export const addComment = (payload) => {
//     return {
//         type:ADD_COMMENT,
//         payload
//     };
// };

// const initialState = {
//     id: "",
//     name:"",
//     content:"",
// };

// const card = (state = initialState, action) => {
//     switch (Action.type) {
//         case ADD_COMMENT:
//             return {
//                 ...state,
//                 comment: state.id + state.name + state.content + action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default cardslice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [
    {
      id: "1",
      userName: "안녕",
      userContent: "하세요",
    },
  ],
};

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://localhost:3000/todo/card/:id",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getCommentById = createAsyncThunk(
  "GET_COMMENT_BY_ID",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://localhost:3000/todo/card/${id}",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      console.log({ payload });

      const data = await axios.post(
        "http://localhost:3000/todo/card/:id",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete("http://localhost:3000/todo/card/${:id}");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: {
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__getCommentById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__getCommentById.rejected]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
  },
});

// export const cardSlice = createSlice({
//   name: "Card",
//   initialState,

//   reducers: {
//     addComment: (state, action) => {
//       console.log(action);
//       return {
//         // ...state,
//         // comments: [...state.comments, action.payload],
//         // state.comment = state.id + state.name + state.content + action.payload;
//       };
//     },
//   },
// });

export const { addComment } = cardSlice.actions;

export default cardSlice.reducer;
