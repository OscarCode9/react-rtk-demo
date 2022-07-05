import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered: (state) => {
      state.numOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});


export const cakeActions = slice.actions;
export default slice.reducer;
