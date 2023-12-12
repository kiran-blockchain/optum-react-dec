
//components must start with Capital Letter
//Component must return only one root tag 
// All the html Tags must be closed.

import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TextBox } from "./components/TextBox";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { Timer } from "./components/Timer";
import { AppRoutes } from "./AppRoutes";
import { headerConfig } from "./config/headerConfig";

// use className instead of class while assigning the CSS
export const App = ({ }) => {
  const [cart,setCart] = useState([]);
  const handleAddToCart = (item)=>{
    setCart([...cart,item]);
  }
 
  return (
    <div>
      {/* Header is acting as child component */}
      <Header config={headerConfig} cartItems={cart} />
           <AppRoutes/>
      <Footer />
    </div>
  )
};

