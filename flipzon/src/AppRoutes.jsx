import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"
import { Profile } from "./pages/Porfile"

export const AppRoutes =()=>{
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/*" element={<Login/>}/>
        </Routes>
    )
}