import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users,SetUsers]=useState([])
    const [loading,SetLoading]=useState(true)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        console.log(email,password)
        SetLoading(true)
           return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignIn = (email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }
    const signOut = ()=>{
        return auth.signOut()
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            SetUsers(currentUser)
            SetLoading(false)
        })
        return () => unsubscribe();
    })
      
    const userInfo = {
          users,
          loading,
          createUser,
          SignIn,
          googleLogin,
          signOut
    }

    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;