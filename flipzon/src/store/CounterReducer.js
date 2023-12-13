
//initial value  in store
//actions to trigger the update
//attach action to reducer
//Create a configuration called slice
//export actions

import { createSlice } from "@reduxjs/toolkit";

//export reducers
const INITIAL_STATE  ={
    count:100
};

const CounterSlice = createSlice({
    initialState:INITIAL_STATE,
    name:"counter",
    reducers:{
        //action
        increment:(state,action)=>{
            return {...state,count:state.count+1}
        }
    }
});
export const {increment} = CounterSlice.actions
export default CounterSlice.reducer;