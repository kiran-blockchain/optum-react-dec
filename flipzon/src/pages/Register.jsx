import { useState } from "react"
import { DropDown } from "../components/DropDown"
import { TextBox } from "../components/TextBox"
import { registerConfig } from "../config/registerConfig"

export const Register =({})=>{
    const[register,setRegister] = useState({
        FirstName:"",
        LastName:"",
        Country:"",
        Password:"",
        ConfirmPassword:""
    });
    const handleChange = (e)=>{
        let data = register;
        data[e.target.name]=e.target.value;
        setRegister({...data});
    }
    return(
        <form className="ml-5 mt-5">
            <TextBox config={registerConfig.FirstName}
             onChange={handleChange} />
            <TextBox config={registerConfig.LastName} onChange={handleChange}/>
            <DropDown config={registerConfig.Country} onChange={handleChange}/>
            <TextBox config={registerConfig.Password} onChange={handleChange}/>
            <TextBox config={registerConfig.ConfirmPassword} onChange={handleChange}/>
            <pre>{JSON.stringify(register)}</pre>
        </form>
    )
}