import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { MdOutlineEventNote } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Banner = () => {
    AOS.init();
    return (
        <div  id='banner' className='px-12 flex  align-middle py-5  '>
            <div className='grid lg:grid-cols-2'>
            <div data-aos="zoom-in"  className='md:my-20 my-6 space-y-4 md:px-4 '>
                <h1 className='text-2xl md:text-4xl font-bold'>Welcome to <q> <span className='text-yellow-400'>Elk</span> <span className='text-green-400'>
                Music </span><span className='text-orange-400'>Event</span> </q></h1>
                <p className='text-slate-300 px-4 lg:mt-12 lg:text-xl text-justify'>Join us for an unforgettable experience at Elk Event, where Get ready to groove to the beats and melodies at Music Elk Event , your ultimate destination for music lovers! Whether you're a die-hard fan or just looking for a night of fun and rhythm, this event promises to deliver an unforgettable experience.. Whether you're a seasoned professional or just starting out, there's something for everyone at our event.</p>
               <div div  className='flex  justify-center md:justify-start'>
                <NavLink to={'/SCHEDULE'}>
                <button   className="relative text-xl h-12 w-40 overflow-hidden border border-yellow-300 text-yellow-300 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-yellow-300 before:duration-300 before:ease-out hover:text-white hover:shadow-yellow-300 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <p   className="relative z-10">Event <MdOutlineEventNote className='inline ml-2'/></p>
    </button>
                </NavLink>
                </div>
            </div>
            <div data-aos="zoom-in-up">
                <img src="riman.png" className='rounded-lg bg-transparent' alt="" />
            </div>
            </div>
 
        </div>
    );
};

export default Banner;