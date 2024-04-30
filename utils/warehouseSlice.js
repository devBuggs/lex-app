import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    navigationTabs: [{
        id: 0,
        title: "New tab",
        isActive: true,
        order: 0,
    }]
}

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {
        addNewTab: (state, action) => {
            console.log("action dispatched * addNewTab :: ", action.payload);
            state.navigationTabs = [...state.navigationTabs, action.payload];
        },
        activateOlderTab: async (state, action) => {
            console.log("action dispatched * addNewTab :: ", action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewTab, activateOlderTab } = warehouseSlice.actions

export default warehouseSlice.reducer