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
            localStorage.setItem('counter', JSON.stringify({value: state.value, modification: state.modifications}));
        },
        decrement: state => {
            state.value--;
            state.modifications++;
            localStorage.setItem('counter', JSON.stringify({value: state.value, modification: state.modifications}));
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
            state.modifications++;
            localStorage.setItem('counter', JSON.stringify({value: state.value, modification: state.modifications}));
        },
        fetchCounter : (state) => {
            const persisted_value = localStorage.getItem('counter');
            if(persisted_value) {
                const {value, modifications} = JSON.parse(persisted_value);
                state.value = value;
                state.modifications = modifications;
            }
        }
    }
})

//export const increment = counter_slice.actions.increment;
export const {increment, decrement, incrementByAmount, fetchCounter} = counter_slice.actions;
export default counter_slice.reducer;
