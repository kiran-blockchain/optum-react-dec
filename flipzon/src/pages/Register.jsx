import { useCallback, useEffect, useState } from "react"
import { DropDown } from "../components/DropDown"
import { TextBox } from "../components/TextBox"
import { registerConfig } from "../config/registerConfig"
import axios from "axios"
import { useApiGet } from "../hooks/useApiGet"

export const Register = ({ }) => {
    const { loading, error, data } = useApiGet('https://restcountries.com/v2/all')
    const [register, setRegister] = useState({
        FirstName: "",
        LastName: "",
        Country: "",
        Password: "",
        ConfirmPassword: ""
    });
    const handleChange = useCallback((e) => {
        let data = register;
        data[e.target.name] = e.target.value;
        setRegister({ ...data });
    }, []);

    const showLoading = () => {
        return loading ? (<div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
        </div>) : null;
    }
    const showError = () => {
        return error ? (<div class="alert alert-dismissible alert-danger">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Oh snap!</strong>
            <a href="#" class="alert-link">
                Error in fetching countries
            </a>      </div>) : null;
    };
    const showCountryList =()=>{
        if(data && data.length>0){
        return data.map(x=>{ 
            return {text:x.name,value:x.alpha3Code}
        });}
        return[];
    }



    return (
        <form className="ml-5 mt-5">
            {showError()}
            {showLoading}
            <TextBox config={registerConfig.FirstName}
                onChange={handleChange} />
            <TextBox config={registerConfig.LastName} onChange={handleChange} />
            <DropDown config={registerConfig.Country}
                data={showCountryList()} onChange={handleChange}
            />
            <TextBox config={registerConfig.Password} onChange={handleChange} />
            <TextBox config={registerConfig.ConfirmPassword} onChange={handleChange} />
            <pre>{JSON.stringify(register)}</pre>
        </form>
    )
}