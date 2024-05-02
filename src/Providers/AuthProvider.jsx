import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users,SetUsers]=useState([])
    const [loading,SetLoading]=useState(true)

    const auth = getAuth(app);

    const createUser =(email,password)=>{
        console.log(email,password)
        SetLoading(true)
           return createUserWithEmailAndPassword(auth,email,password)
    }
      
    const userInfo = {
          users,
          loading,
          createUser
    }

    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;