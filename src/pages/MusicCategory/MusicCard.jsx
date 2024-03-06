import React from 'react';

const MusicCard = ({data}) => {
    const {img, id,category,top_artist,} = data;
    return (
        <div className='mx-auto'>
            <div className="  relative flex   flex-col justify-center overflow-hidden ">
                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex   rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden      opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <img src={img} className="animate-fade-in block  w-[380px] h-[350px] scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{category}</h1>
                        <h1 className="text-sm font-light text-gray-200 shadow-xl">{top_artist}</h1>
                       <button className='text-white'>show more </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicCard;