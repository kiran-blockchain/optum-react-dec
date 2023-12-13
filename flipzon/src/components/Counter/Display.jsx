import { useSelector } from "react-redux"

export const DisplayCount =()=>{
    //read the stores data
    const counter = useSelector(x=>x.counter)
    console.log(counter);
    return(
        <h1>Count -{counter.count}</h1>
    )
}