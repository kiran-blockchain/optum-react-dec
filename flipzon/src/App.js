
//components must start with Capital Letter
//Component must return only one root tag 
// All the html Tags must be closed.

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TextBox } from "./components/TextBox";

// use className instead of class while assigning the CSS
export const App = ({ }) => {
  return (
    <div>
      <Header/>
      <h1>Welcome to Flip zon</h1>
      <p>
        <TextBox/>
      </p>
      <Footer/>
    </div>
  )
};

