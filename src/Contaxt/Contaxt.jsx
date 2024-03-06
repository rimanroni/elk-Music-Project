import React, { createContext } from 'react';
export const MyContaxt = createContext(null )
const Contaxt = ({children}) => {

    const AuthInfo = {name:'roni'}
    return (
        <MyContaxt.Provider value={AuthInfo}>
            {children } 
        </MyContaxt.Provider> 
    );
};

export default Contaxt;