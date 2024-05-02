import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56">Loading</progress>
    }
    if(user){
      return children;
    }
    return <Navigate to="/signIn"  replace></Navigate>
    
}

export default PrivateRoutes;