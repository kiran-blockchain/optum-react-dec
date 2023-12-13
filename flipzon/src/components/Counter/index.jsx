import { useState } from "react";
import { DisplayCount } from "./Display";
import { CounterButton } from "./Button";

export const Counter =({children})=>{
   return(
    <>
        <DisplayCount/>
        <CounterButton/>
    </>
   )
}