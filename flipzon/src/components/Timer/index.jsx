import { useEffect, useState } from "react"

export const Timer = () => {
    const [displayTime, setTime] = useState('');

    useEffect(() => {
        console.log("Timer => loading!!!!!!")
        setInterval(() => {
            const date = new Date();
            setTime(date.toUTCString());
        }, 1000);

        return()=>{
            clearInterval();
            console.log("Timer => unloading!!!!!!")
        }
    }, [])
    return (
        <h6>{displayTime}</h6>
    )
}