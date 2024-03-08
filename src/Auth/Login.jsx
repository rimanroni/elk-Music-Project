 import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
 
 const Login = () => {
    return (
        <div>
            <Navbar/>
             <div className='  py-12   flex justify-center '>
                <form className='space-y-3  py-5 w-[25%]'>
                  <input
                  className='py-2 w-full outline-none border px-2'
                  type="email" placeholder='Email' /><br />
                  <input  className='py-2 w-full outline-none border px-2' type="password" placeholder='Password' /><br />
                  <input type="checkbox"  id="check" />
                  <label htmlFor="check" className='ml-2'>Remember me</label><br />
                  <button className='w-full bg-blue-600 text-white py-2 rounded'>Log In </button><br />
                  <p>Don't have an account? <NavLink to={'/register'} className={'font-bold text-blue-400'}>Register</NavLink></p>
                  </form>
             </div>
            <Footer/>
        </div>
    );
 };
 
 export default Login;