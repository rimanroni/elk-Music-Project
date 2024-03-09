import React, { useContext } from 'react';
import { MyContaxt } from '../Contaxt/Contaxt';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetContent = ({children}) => {
    const {user, loading} = useContext(MyContaxt);
    const location = useLocation()
    if(loading ){
        return <div className='h-[100vh] flex justify-center items-center'>Loading Data Please Wait... </div>
    }
    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to={'/login'}/>
};

export default PrivetContent;