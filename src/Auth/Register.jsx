import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Navbar/>
            <div>
            <div className=' py-12   flex justify-center '>
                <form className='space-y-3  py-5 w-[25%]'>
                <input
                  className='py-2 w-full outline-none border px-2'
                  type="text" placeholder='Name' /><br />
                   <input
                  className='py-2 w-full outline-none border px-2'
                  type="text" placeholder='Photo URL' /><br />
                  <input
                  className='py-2 w-full outline-none border px-2'
                  type="email" placeholder='Email' /><br />
                  <input  className='py-2 w-full outline-none border px-2' type="password" placeholder='Password' /><br />
                  <input type="checkbox"  id="check" />
                  <label htmlFor="check" className='ml-2'>Accepting Terms & Conditions</label><br />
                  <button className='w-full bg-blue-600 text-white py-2 rounded'>Register </button><br />
                  <p>  have an account? <NavLink to={'/login'} className={'font-bold text-blue-400'}>Log In</NavLink></p>
                  </form>
             </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;