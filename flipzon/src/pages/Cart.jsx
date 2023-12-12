import { useRef } from "react";
import { DemoUsePrevious } from "../components/DemoPrevious/Index";


export const Cart = ({ }) => {
    const inputText = useRef();
    return (
        <div>
           <input type="text" ref={inputText} />
           <button className="btn btn-primary" onClick={e=>{
               inputText.current.style="color:red;background-color:green"
           }}>Highlight</button>
           <DemoUsePrevious/>
           
        </div>
    )
}