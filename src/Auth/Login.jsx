 import React, { useContext } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../components/Footer';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SocalLink from '../components/SocalLink';
import { MyContaxt } from '../Contaxt/Contaxt';
import toast, { Toaster } from 'react-hot-toast';
 
 
 const Login = () => {
    const location = useLocation()
    const { userLogin } = useContext(MyContaxt);
    const navigate = useNavigate()
     const formHandle = (e)=> {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        userLogin(email, password)
        .then(result=>{
            navigate(location.state?location.state : '/')
          return  toast.success('User log in Success')

        })
        .catch(error=>{
          return  toast.error('email or password wrong try again!')
        })
     }
       
       
    return (
        <div>
            <div><Toaster/></div>
            <Navbar/>
             
             <div className='  py-12   flex justify-center '>
                <form onSubmit={formHandle } className='space-y-3 px-4  py-5 lg:w-[25%]  w-full'>
                  <input
                  className='py-2 w-full outline-none border px-2'
                  type="email" required name='email' placeholder='Email' /><br />
                  <input required name='password' className='py-2 w-full outline-none border px-2' type="password" placeholder='Password' /><br />
                  <input type="checkbox"  id="check" />
                  <label htmlFor="check" className='ml-2'>Remember me</label><br />
                  <button className='w-full bg-blue-600 text-white py-2 rounded'>Log In </button><br />
                  <p className='text-center'>Don't have an account? <NavLink to={'/register'} className={'font-bold text-blue-400'}>Register</NavLink></p>
                  </form>
             </div>
             <div className='flex  justify-center'>
             <SocalLink/>
             </div>
            <Footer/>
        </div>
    );
 };
 
 export default Login;