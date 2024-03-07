 import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
 
 const EventCategory = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/MusicFakeData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className=' pt-5 pb-6' id='bannerCategori'>
             <h1 className='text-2xl md:text-4xl text-center py-4 text-white  font-bold'>Music Event Category </h1>
            <div className='grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {data.map(item=><MusicCard data={item} key={item.id}/>)}
            </div>
        </div>
    );
 };
 
 export default EventCategory;