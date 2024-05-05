import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

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
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email : userEmail}
        setUser(currentUser)
        setloading(false)
        if(currentUser){
          axios.post('http://localhost:5000/jwt', loggedUser, {
            withCredentials: true
          })
          .then(res => {
            console.log("user token",res.data)
          })
        }
        else{
          axios.post('http://localhost:5000/logOut', loggedUser,{
            withCredentials: true
          } )
          .then(data =>{
            console.log("logout", data.data)
          })
        }
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
