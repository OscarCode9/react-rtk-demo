

import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numOfIcreamSlices: 20,
};

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcreamSlices -= 1;
        },
        restocked: (state, action) => {
            state.numOfIcreamSlices += action.payload;
        }
    
    },
    extraReducers: (builder)=> {
        builder.addCase(cakeActions.restocked, (state, action)=>{
            state.numOfIcreamSlices += action.payload;
        })

    }
});


export const icecreamActions = icecreamSlice.actions;
export default icecreamSlice.reducer;