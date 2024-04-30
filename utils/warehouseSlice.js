import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {
        increment: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log("action dispatched :: ", action);
            // state.value += 1
        },
        decrement: (state, action) => {
            console.log("action dispatched :: ", action);
            // state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log("action dispatched :: ", action);
            // state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = warehouseSlice.actions

export default warehouseSlice.reducer