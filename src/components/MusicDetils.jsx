import React, { useState } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from './Footer';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt,FaLongArrowAltLeft } from "react-icons/fa";
import {  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const MusicDetils = () => {
    const navigate = useNavigate()
     const data = useLoaderData();
    const  {id}= useParams();
    const findData = data.find(item=>item.id == id)
    
      const {img,   category, top_album,top_artist, monthly_streams, description,event_title,event_date,contact,top_song, event_cost  } = findData || {}
      const backNavigate = () =>{
        navigate(-1)
      }
      const ticketToast = () =>{
        toast.success('Successfully Ticket Buy Done!')
      }
    return (
        <div>
            <div><Toaster/></div>
            <Navbar/>
             <div className='grid py-8 gap-4 grid-cols-1 lg:grid-cols-3'>
                 <div className='px-4'>
                    <img src={img} className='w-[500px] h-[400px]'  alt="" />
                    <button onClick={backNavigate} className='bg-rose-400 px-4 py-2 mt-2 text-white font-bold rounded'><FaLongArrowAltLeft className='inline'/> All Music category</button>
                 </div>
                 <div className='col-span-2 space-y-2 px-4'>
                    <h1 className='text-4xl'>{category}</h1>
                    <h1 className='pr-4 text-xl'>{description}</h1>
                    <h1>Singer : {top_artist}</h1>
                    <h1>{event_title}</h1>
                    <h1>Top Song : {top_song}</h1>
                    <h1>Monthly Streams : {monthly_streams}</h1>
                    <p>{event_date}</p>
                    <h1> <MdEmail className='inline'/> Email : {contact.email}</h1>
                    <h1><FaPhoneAlt className='inline'/> Phone : {contact.phone}</h1>
                    <p>Album : {top_album}</p>
                    <h1 className='font-bold text-xl'>{event_cost}</h1>
                    <div className='flex justify-center lg:justify-start'>
                    <button
                    onClick={ticketToast}
                    className='bg-green-400 px-12 py-2 text-xl text-white'> Buy Now Ticket</button>
                    </div>
                 </div>
             </div>
             <Footer/>
        </div>
    );
};

export default MusicDetils;