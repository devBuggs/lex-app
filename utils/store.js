import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import warehouseSlice from './warehouseSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        warehouse: warehouseSlice,
    },
})