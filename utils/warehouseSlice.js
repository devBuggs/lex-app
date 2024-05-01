import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    navigationTabs: [{
        id: 0,
        title: "New tab",
        isActive: false,
        order: 0,
    },{
        id: 0,
        title: "New tab A",
        isActive: false,
        order: 0,
    },{
        id: 0,
        title: "New tab B",
        isActive: true,
        order: 0,
    },{
        id: 0,
        title: "New tab C",
        isActive: false,
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
        activateTab: async (state, action) => {
            console.log("action dispatched * activateTab :: ", action.payload);
            let tempNavs = state.navigationTabs.filter(item => item.id == action.payload.id)
            if (tempNavs) {
                const dataSet = state.navigationTabs.map((item) => {
                    if (item.isActive) {
                        console.log("------ deactivating current active tab! tabId :: ", item.id);
                        item.isActive = false
                    }
                    
                    if (item.id === tempNavs.id) {
                        console.log("------ activating tab clicked!! having tabId :: ", action.payload.id)
                        item.isActive = true
                    }
                    return item
                });
                console.log("dataSet :: ", dataSet);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewTab, activateTab } = warehouseSlice.actions

export default warehouseSlice.reducer