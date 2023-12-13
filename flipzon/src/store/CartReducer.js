import { createSlice } from "@reduxjs/toolkit";

export const CartReducer =createSlice({
    initialState:{
        cartItems:[],
        totalPrice:0
    },
    name:"cart",
    reducers:{
        addItemToCart:(state,action)=>{
            return {...state,cartItems:[...state.cartItems,action.payload]}

        },
        removeItemFromCart:(state,action)=>{

        },
        resetCart:(state,action)=>{
            return {cartItems:[]}
        }
    }
})

export const{addItemToCart,removeItemFromCart,resetCart} = CartReducer.actions
export default CartReducer.reducer;