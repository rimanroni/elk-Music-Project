import React from 'react';
import { FaSpotify } from "react-icons/fa6";
import { FaYoutube , FaInstagram   } from "react-icons/fa";
const Bolog = ({bolog}) => {
    const {category,category_img, description,posts ,} = bolog;
    return (
        <div className='grid grid-cols-1 px-2 mt-8 lg:grid-cols-3'>
             <div>
                <img src={category_img} className='w-[400px] h-[300px] mx-auto  ' alt="" />
             </div>
             <div className='lg:col-span-2 space-y-4 px-8 lg:px-3'>
               <h1 className='text-2xl font-bold text-slate-400'>{posts[0].title}</h1>
               <p className='text-xl px-2' >{posts[0].content}</p>
               <p className='font-bold text-slate-400'>{posts[0].date}</p>
               <p className=' font-bold px-2'>{description}</p>
               <div className='flex gap-3 text-2xl items-center'>
               <FaSpotify className='text-green-400' />
               <FaYoutube className='text-red-500' />
               <FaInstagram className='text-rose-400' />
               </div>
             </div>
        </div>
    );
};

export default Bolog;