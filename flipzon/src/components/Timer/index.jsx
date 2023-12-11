import { useEffect, useState } from "react"

export const Timer = () => {
    const [displayTime, setTime] = useState('');

    useEffect(() => {

        setInterval(() => {
            const date = new Date();
            setTime(date.toUTCString());
        }, 1000);

        return()=>{
            clearInterval();
        }
    }, [])
    return (
        <h6>{displayTime}</h6>
    )
}