import { useState } from "react";

export const Counter =({children})=>{
    //useState method/hook returns two properties
    //1. A variable holding the data
    //2. A function to update the variable's data
    console.log("Loading =====> Counter")
    const[count,updateCount] = useState(0);
    const handleClick = (evt)=>{
        updateCount(count+1);
    }
    return(
        <div>
            <h6>Count- {count} </h6>
            <button className="=btn btn-primary" onClick={handleClick}>Click me</button>
        </div>
    )
}