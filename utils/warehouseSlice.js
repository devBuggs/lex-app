import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    navigationTabs: [{
        id: 0,
        title: "Default",
        isActive: true,
        order: 0,
        isFavourite: false,
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
        },
        deleteTab: (state, action) => {
            console.log("action dispatched * deleteTab :: ", action.payload);
            let tempNavs = state.navigationTabs.filter(item => item.id !== action.payload.id)
            if (tempNavs.length > 0) {
                // state.navigationTabs.map((item) => {
                //     console.log("check for id:: ", item)
                // });
                state.navigationTabs = tempNavs
            }
        }, 
        duplicateTab: (state, action) => {
            console.log("action dispatched * duplicateTab :: ", action.payload);
            let tempNavs = state.navigationTabs.filter(item => item.id === action.payload.id)
            if (tempNavs) {
                state.navigationTabs.push({...tempNavs[0], "id": state.navigationTabs[state.navigationTabs.length - 1].id + 1});
            }
        },
        addToFavouriteTab: (state, action) => {
            console.log("action dispatched * addToFavouriteTab :: ", action.payload);
            let tempNavs = state.navigationTabs.filter(item => item.id === action.payload.id)
            if (tempNavs.length > 0) {
                const updatedTabs = state.navigationTabs.map((item) => {
                    if (item.id === action.payload.id) {
                        item.isFavourite = action.payload.isFav
                    }
                    return item;
                });
                state.navigationTabs = updatedTabs
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewTab, activateTab, deleteTab, duplicateTab, addToFavouriteTab } = warehouseSlice.actions

export default warehouseSlice.reducer