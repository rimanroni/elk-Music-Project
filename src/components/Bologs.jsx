import React, { useEffect, useState } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Bolog from './Bolog';
import Footer from './Footer';

const Bologs = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/BlogFakeData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
     return (
        <div>
            <Navbar/>
           <div className='grid py-2 gap-4 grid-cols-1  '>
           {data.map(bolog=><Bolog key={bolog.id} bolog={bolog}/>)}
           </div>
          <Footer/>
        </div>
    );
};

export default Bologs;