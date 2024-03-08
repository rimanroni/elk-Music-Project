import React, { createContext, useEffect, useState } from 'react';
export const MyContaxt = createContext(null )
import {   onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseCongig/firebase.config';
const Contaxt = ({children}) => {
   const [user, setUser] = useState('')

   useEffect(()=>{
           const unscrib = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
           })
           return () =>{
            unscrib()
           }
   },[])

    
    const AuthInfo = {user}
    return (
        <MyContaxt.Provider value={AuthInfo}>
            {children } 

        </MyContaxt.Provider> 
    );
};

export default Contaxt;