import axios from "axios";
import { useCallback, useEffect, useState } from "react"
import { TextBox } from "../components/TextBox";
import { loginConfig } from "../config/loginConfig";
import { useFormik } from "formik";
import { loginSchema } from "../utils/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../store/AuthReducer";
import { useNavigate } from "react-router";

export const Login = ({ }) => {
    const [loginResult, setLoginResult] = useState({});//1st api Call
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authReducer = useSelector(x=>x.auth);
    const formik = useFormik({
        validationSchema:loginSchema,
        initialValues:{
            username:'mor_2314',
            password:'83r5^_'
        },
        onSubmit:(values)=>{
            console.log(values);
            dispatch(authenticateUser(values))
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
    const showLoading = () => {
        return authReducer.loading ? (<div class="progress mt-5">
            <div class=" progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
        </div>) : null;
    }
    const showError = () => {
        return authReducer.error ? (<div class="alert alert-dismissible alert-danger">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Oh snap!</strong>
            <a href="#" class="alert-link">
                Error in Authenticating user
            </a>      </div>) : null;
    };
    const navigateToProducts =()=>{
       if( authReducer.token.length>0){
            navigate("/products");
       }
    }
    return (
       <form>
         {showLoading()}
         {showError()}
         {navigateToProducts()}
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
