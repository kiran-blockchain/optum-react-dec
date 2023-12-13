import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

const Authorizer = (props) => {
   
    const auth = useSelector(x=>x.auth)
    if (auth.token=='') {
        return <Navigate to="/login" />
    }
    return props.children
}
export default Authorizer;