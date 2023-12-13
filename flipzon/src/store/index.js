import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import CartReducer from "./CartReducer";
import AuthReducer from "./AuthReducer";


export default configureStore({
    reducer:{
        counter:CounterReducer,
        cart:CartReducer,
        auth:AuthReducer
    }
})