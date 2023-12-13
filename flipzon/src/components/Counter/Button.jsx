import { useDispatch } from "react-redux"
import { increment } from "../../store/CounterReducer";

export const CounterButton = () => {
    const dispatch = useDispatch();
   const handleClick =(e)=>{
        dispatch(increment());
   }
    return (
        <>
            <button className="btn btn-primary" onClick={handleClick}>Increment</button>
        </>
    )
}