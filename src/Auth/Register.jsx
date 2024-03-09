import React, { useContext, useState } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import SocalLink from '../components/SocalLink';
import { MyContaxt } from '../Contaxt/Contaxt';
import toast, {  Toaster } from 'react-hot-toast';
 
const Register = () => {
    const {createUser } = useContext(MyContaxt)
    const handleForm = (e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
         if(password.length<6){
          return  toast.error('Password must be 6 character')
         }
         createUser(email, password)
         .then(result=>{
           return toast.success('user register done')
         })
         .catch(error=>{
          return  toast.error('something wrong')
         })

    }

   
   
     return (
        <div>
             <Navbar/>
             <div>
                <Toaster/>
            <div className=' py-12   flex justify-center '>
            
                <form onSubmit={handleForm}  className='space-y-3  py-5 lg:w-[25%]'>
                <input required name='name'
                  className='py-2 w-full outline-none border px-2'
                  type="text" placeholder='Name' /><br />
                   <input name='photoUrl'
                  className='py-2 w-full outline-none border px-2'
                  type="text" placeholder='Photo URL' /><br />
                  <input
                  required name='email'
                  className='py-2 w-full outline-none border px-2'
                  type="email" placeholder='Email' /><br />
                  <input 
                
                 
                  name='password' required  className='py-2 w-full outline-none border px-2' type="password" placeholder='Password' /><br />
                  <input required type="checkbox"  id="check" />
                  <label htmlFor="check" className='ml-2'>Accepting Terms & Conditions</label><br />
                  <button className='w-full bg-blue-600 text-white py-2 rounded'>Register </button><br />
                  <p className='text-center'> have an account? <NavLink to={'/login'} className={'font-bold text-blue-400'}>Log In</NavLink></p>
                  </form>
             </div>
            <div className='flex justify-center'>
            <SocalLink/>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

 
export default Register;