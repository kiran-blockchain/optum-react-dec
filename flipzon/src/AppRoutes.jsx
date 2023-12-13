import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"
import { Profile } from "./pages/Porfile"
import Authorizer from "./components/Authroizer"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Authorizer>
                <Products />
            </Authorizer>} />
            <Route path="/cart" element={<Authorizer>
                <Cart />
            </Authorizer>} />
            <Route path="/profile" element={
                <Authorizer>
                    <Profile />
                </Authorizer>} />
            <Route path="/*" element={<Login />} />
        </Routes>
    )
}