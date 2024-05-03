import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) =>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginUser = (email, password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setloading(false)
    })
    return ()=>{
        unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
