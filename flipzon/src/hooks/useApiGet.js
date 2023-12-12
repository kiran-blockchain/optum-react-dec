import axios from "axios";
import { useEffect, useState } from "react"

export const useApiGet = (url)=>{
    const [apiResult,setApiResult]= useState({
        loading:true,
        error:false,
        data:''
    });
    const getData = async () => {
        try {
            let result = await axios.get(url);
            setApiResult({...apiResult,data:result.data,loading:false,error:false})
            
        } catch (ex) {
            setApiResult({...apiResult,data:'',loading:false,error:true});
        };
    };

    useEffect(()=>{
            getData();
    },[]);
    return apiResult;
}