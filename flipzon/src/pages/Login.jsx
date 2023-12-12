import axios from "axios";
import { useEffect, useState } from "react"

export const Login = ({ }) => {
    const [loginResult, setLoginResult] = useState({});//1st api Call
    const [profile, setProfile] = useState({});

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
    return (
        <h6>I am Login</h6>
    )
}
// Create two state variables
