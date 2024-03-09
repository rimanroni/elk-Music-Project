import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContaxt } from '../../Contaxt/Contaxt';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
   const {user, logOut } = useContext(MyContaxt)
   const handleLogOut = () =>{
      logOut()
      .then(result=>{
       })
      .catch(error=>{
       })
   }
    return (
        <div className='px-12 ' id='banner'>
         <Toaster/>
           <nav className='md:flex items-center justify-between py-4  '>
             <div>
                <img src="/logo.png" alt="" className='mx-auto 
                mt-4 md:mt-1
                md:mx-1' />
             </div>
             <div className='text-white md:font-bold uppercase md:mt-0 mt-12   ml-4 md:ml-0 space-x-3'>
                <NavLink className='hover:text-green-500' to={'/'}>Home</NavLink>
                <NavLink className='hover:text-green-500' to={'/SCHEDULE'}>SCHEDULE</NavLink>
                <NavLink className='hover:text-green-500' to={'/about'}>About us</NavLink>
                <NavLink className='hover:text-green-500' to={'/blog'}>BLOG</NavLink>
                <NavLink  className='hover:text-green-500' to={'/event'}>  content</NavLink>
               <div className='md:inline flex justify-center  md:mt-0 mt-4 '>
              {user?<button onClick={handleLogOut} className='bg-green-500 text-center  w-[100px] block md:inline md:px-4 py-2 rounded'>log out</button> :  <NavLink to={'/login'} className='bg-green-500 text-center  w-[100px] block md:inline md:px-4 py-2 rounded'>Log In</NavLink>}
               </div>
             </div>
           </nav>
        </div>
    );
};

export default Navbar;