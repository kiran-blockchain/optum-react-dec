
//initial value  in store
//actions to trigger the update
//attach action to reducer
//Create a configuration called slice
//export actions

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const authenticateUser = createAsyncThunk("auth/authenticateUser",async(data)=>{
    try{
        const result = await axios.post('https://fakestoreapi.com/auth/login',data);
        return result.data;
    }catch(ex){
        return "Error in authenticating user";
    }

});

//export reducers
const INITIAL_STATE  ={
   token:"",
   loading:false,
   error:false,
};

const AuthReducer = createSlice({
    initialState:INITIAL_STATE,
    name:"auth",
    reducers:{
        logout:(state,action)=>{
            return {...INITIAL_STATE}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(authenticateUser.pending,(state,action)=>{
            return {...state,loading:true}
        })
        builder.addCase(authenticateUser.fulfilled,(state,action)=>{
            return {...state,loading:false,token:action.payload.token}
        })
        builder.addCase(authenticateUser.rejected,(state,action)=>{
            return {...state,loading:false,token:"",error:"Error in fetching user details"}
        })

    }
    
});
export const  {logout} = AuthReducer.actions
export default AuthReducer.reducer;
