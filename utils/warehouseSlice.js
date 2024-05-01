import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    navigationTabs: [{
        id: 0,
        title: "Default",
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
        activateTab: (state, action) => {
            console.log("action dispatched * activateTab :: ", action.payload);
            let tempNavs = state.navigationTabs.filter(item => item.id === action.payload.id)
            if (tempNavs.length > 0) {
                const dataSet = state.navigationTabs.map((item) => {
                    if (item.isActive) {
                        item.isActive = false
                    }
                    if (item.id === tempNavs[0].id) {
                        item.isActive = true
                    }
                    return {...item}
                });
                state.navigationTabs = dataSet
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewTab, activateTab } = warehouseSlice.actions

export default warehouseSlice.reducer