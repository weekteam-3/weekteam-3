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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   id: "",
//   name: "",
//   content: "",
// };

// const cardSlice = createSlice({
//   name: "card",
//   initialState,
//   reducers: {
//     addComment: (state, action) => {
//       state.comment = state.id + state.name + state.content + action.payload;
//     },
//   },
// });

// export const { addCommnet } = cardSlice.action;

// export default cardSlice.reducer;
