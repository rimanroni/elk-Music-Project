import React from 'react';
import { NavLink } from 'react-router-dom';

const MusicCard = ({ data }) => {
    const { img, id, category, top_artist, event_cost } = data;
    
    return (
        <div className='mx-auto' data-aos="fade-down">
            <div className="  relative flex   flex-col justify-center overflow-hidden ">
                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex   rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden      opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img src={img} className="animate-fade-in block  w-[380px] h-[350px] scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute space-y-2 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{category}</h1>
                        <h1 className="text-sm font-light text-gray-200 shadow-xl">{top_artist}</h1>
                        <h1 className="    shadow-xl text-rose-400 font-bold">Ticket Price {event_cost}</h1>
                      <NavLink to={`/home/${id}`}>
                      <button class="relative  px-3 py-1 overflow-hidden border  border-white text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-yellow-400  
                        hover:border-slate-600
                        before:duration-300 before:ease-out hover:text-white   hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                            <span class="relative z-10">Show More</span>
                        </button>
                      </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicCard;