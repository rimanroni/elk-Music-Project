import React, { createContext, useEffect, useState } from 'react';
export const MyContaxt = createContext(null )
import {   createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebaseCongig/firebase.config';
const Contaxt = ({children}) => {
   const [user, setUser] = useState('')
   const [loading, setLoading] = useState(true)

//  for create user email and password 

   const createUser = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
   }
   const userLogin = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
//     user log out 

const logOut = ()=>{
    setLoading(true)
   return signOut(auth) 
}

   useEffect(()=>{
           const unscrib = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false )
           })
           return () =>{
            unscrib()
           }
   },[])

    
    const AuthInfo = {user, logOut, loading  ,createUser,userLogin  }
    return (
        <MyContaxt.Provider value={AuthInfo}>
            {children } 
         </MyContaxt.Provider> 
    );
};

export default Contaxt;