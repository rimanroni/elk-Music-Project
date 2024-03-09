import React, { createContext, useEffect, useState } from 'react';
export const MyContaxt = createContext(null )
import {   createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut ,GithubAuthProvider , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
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
//  for google singup or log in
const googleProvider = new GoogleAuthProvider()
const forGoogle = () =>{
   return signInWithPopup(auth, googleProvider)
}
// for githbu singup or login 
const githubProvider = new GithubAuthProvider()
const forGithub = () =>{
    return signInWithPopup(auth, githubProvider)
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

    
    const AuthInfo = {user,forGoogle, logOut, loading  ,createUser,userLogin , forGithub  }
    return (
        <MyContaxt.Provider value={AuthInfo}>
            {children } 
         </MyContaxt.Provider> 
    );
};

export default Contaxt;