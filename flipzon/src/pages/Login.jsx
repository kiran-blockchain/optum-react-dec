import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { TextBox } from "../components/TextBox";
import { loginConfig } from "../config/loginConfig";
import { useFormik } from "formik";
import { loginSchema } from "../utils/loginSchema";

export const Login = ({ }) => {
    const [loginResult, setLoginResult] = useState({});//1st api Call
    const [profile, setProfile] = useState({});
    const formik = useFormik({
        validationSchema:loginSchema,
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values);
        },
    });
    const login = async () => {
        let loginData = {
            "username": "johnd",
            "password": "m38rmF$"
        }
        try {
            let result = await axios.post("https://fakestoreapi.com/auth/login", loginData);
            setLoginResult({ ...loginResult, ...result.data, userId: 1 })
        } catch (ex) {
            console.log(ex);
        }

    };
    const getProfile = async () => {
        try {
            if (loginResult.userId) {
                let result = await axios.get("https://fakestoreapi.com/users/" + loginResult.userId);
                setProfile({ ...profile, ...result.data });
            }
        }
        catch (ex) {
            console.log(ex);
        }
    }
    useEffect(() => {
        console.log("login => loading!!!!")
        login();
        // login Call
        //set login Result
    }, []);
    useEffect(() => {
        console.log("profile => loading!!!!")
        getProfile();
        //profile Api Call
        //set profile Result
    }, [loginResult])
    const handleChange =useCallback((e)=>{
        formik.handleChange(e);
    },[]);
    return (
       <form>
           <TextBox config={loginConfig.UserName}
            onChange={handleChange}
            formik={formik}/>
           <TextBox config={loginConfig.Password} 
           onChange={handleChange}
           formik={formik}/>
           <button className="btn btn-primary"
            onClick={formik.handleSubmit}
           >Login</button>
       </form>
    )
}
// Create two state variables
