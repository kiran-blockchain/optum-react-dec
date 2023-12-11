
//components must start with Capital Letter
//Component must return only one root tag 
// All the html Tags must be closed.

import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TextBox } from "./components/TextBox";
import { Register } from "./pages/Register";

// use className instead of class while assigning the CSS
export const App = ({ }) => {
  const headerConfig = {
    title: "FlipZon",
    data: [{
      id: 1,
      name: "Products",
      url: "/products"

    },
    {
      id: 2,
      name: "Cart",
      url: "/cart"

    },
    {
      id: 3,
      name: "Profile",
      url: "/profile"

    },
    {
      id: 4,
      name: "Logout",
      url: "/"

    },
    {
      id: 5,
      name: "Register",
      url: "/register"

    }, {
      id: 6,
      name: "Login",
      url: "/login"

    }]
  }
  return (
    <div>
      {/* Header is acting as child component */}
      <Header config={headerConfig} />
      <Counter/>
      <div className="container-fluid">
        <Register />
      </div>

      <Footer />
    </div>
  )
};

