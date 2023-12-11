import { DropDown } from "../components/DropDown"
import { TextBox } from "../components/TextBox"
import { registerConfig } from "../config/registerConfig"

export const Register =({})=>{
    return(
        <form className="ml-5 mt-5">
            <TextBox config={registerConfig.FirstName}/>
            <TextBox config={registerConfig.LastName}/>
            <DropDown config={registerConfig.Country}/>
            <TextBox config={registerConfig.Password}/>
            <TextBox config={registerConfig.ConfirmPassword}/>
        </form>
    )
}