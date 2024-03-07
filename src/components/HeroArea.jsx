import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroArea = () => {
    return (
        <div className='md:p-20 p-4 grid gap-2 grid-cols-1 md:grid-cols-2 '>
            <div>
                <img src="1.jpg" alt="" />
            </div>
            <div className='pl-6 space-y-4'>
                <h1 className='text-rose-400 font-semibold'>JOIN THE EVENT</h1>
                <h1 className='text-2xl md:text-4xl font-bold'>We Create and <span className='line-through'>Turn </span> Into Reality</h1>
                <h3 className='font-semibold'>We Work With Organisations To Craft Immersive Customer Experiences.</h3>
                <p className='opacity-75 text-[17px] font-[300]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul className='space-y-2'>
                    <li ><FaLongArrowAltRight  className='inline text-rose-500' /> Curabitur blandit tempus porttitor.</li>
                    <li><FaLongArrowAltRight className='text-rose-500 inline' /> Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                    <li><FaLongArrowAltRight className='text-rose-500 inline' /> Fusce dapibus, tellus ac cursus commodo, tortor mauris.</li>
                    <li><FaLongArrowAltRight className='text-rose-500 inline' /> Condimentum nibh, ut fermentum massa justo sit amet risus nibh.</li>
                </ul><br />
                <br />
                     <div>
                     <img src="mini.png" alt="" /> 
                     </div>
            </div>
        </div>
    );
};

export default HeroArea;