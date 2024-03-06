import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import EventCategory from '../MusicCategory/EventCategory';
 
const Root = () => {
    return (
        <div className=' ' id=''>
           <div className=''>
             <Outlet/>
            </div>
        </div>
    );
};

export default Root;