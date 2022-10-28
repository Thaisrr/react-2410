import {createSlice} from "@reduxjs/toolkit";

export const counter_slice = createSlice({
    name: 'counter',
    initialState : {
        value: 0,
        modifications: 0
    },
    reducers: {
        increment: state => {
            state.value++;
            state.modifications++;
        },
        decrement: state => {
            state.value--;
            state.modifications++;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
            state.modifications++;
        }
    }
})

//export const increment = counter_slice.actions.increment;
export const {increment, decrement, incrementByAmount} = counter_slice.actions;
export default counter_slice.reducer;
