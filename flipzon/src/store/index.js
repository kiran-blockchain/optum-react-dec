import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import CartReducer from "./CartReducer";


export default configureStore({
    reducer:{
        counter:CounterReducer,
        cart:CartReducer
    }
})