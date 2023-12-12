import { useRef } from "react";


export const Cart = ({ }) => {
    const inputText = useRef();
    return (
        <div>
           <input type="text" ref={inputText} />
           <button className="btn btn-primary" onClick={e=>{
               inputText.current.style="color:red;background-color:green"
           }}>Highlight</button>
           
        </div>
    )
}