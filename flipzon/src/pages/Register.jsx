import { useEffect, useState } from "react"
import { DropDown } from "../components/DropDown"
import { TextBox } from "../components/TextBox"
import { registerConfig } from "../config/registerConfig"
import axios from "axios"

export const Register = ({ }) => {
    const [register, setRegister] = useState({
        FirstName: "",
        LastName: "",
        Country: "",
        Password: "",
        ConfirmPassword: ""
    });
    const [countryList,setCountryList] = useState([]);
    const handleChange = (e) => {
        let data = register;
        data[e.target.name] = e.target.value;
        setRegister({ ...data });
    };


    const getCountries = async()=>{
        const url="https://restcountries.com/v2/all";
        try{
            let result = await axios.get(url);
            
            const mappedResult = result.data.map(x=>{
                return {text:x.name,value:x.alpha3Code}
            });
            console.log(mappedResult);
            setCountryList(mappedResult);
        }catch(ex){
            console.log(ex);
        };
    };
    useEffect(()=>{
        //at the time of loading the component.
        getCountries();
    },[]);

    return (
        <form className="ml-5 mt-5">
            <TextBox config={registerConfig.FirstName}
                onChange={handleChange} />
            <TextBox config={registerConfig.LastName} onChange={handleChange} />
            <DropDown config={registerConfig.Country}
                data={countryList}
                onChange={handleChange} />
            <TextBox config={registerConfig.Password} onChange={handleChange} />
            <TextBox config={registerConfig.ConfirmPassword} onChange={handleChange} />
            <pre>{JSON.stringify(register)}</pre>
        </form>
    )
}