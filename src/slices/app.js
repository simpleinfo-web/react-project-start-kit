import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'appSlice',
    
    initialState: {
        counter: 0
    },

    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
    }
})

export default appSlice;