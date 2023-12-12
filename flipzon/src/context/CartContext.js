import { createContext } from "react";

export const CartContext = createContext({
    cartItems:[],
    updateCart:()=>{}
})