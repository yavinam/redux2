import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        inc(state, action){
            state.value += action.payload ? action.payload : 1
        },
        dec(state){
            state.value -= 1
        },
        reset(state){
            state.value = 0
        }
    }
})

export const {inc, dec, reset} = counterSlice.actions // setState
export default counterSlice.reducer // state
