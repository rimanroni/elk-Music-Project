import React from 'react';
 import Banner from '../../components/Banner';
import Navbar from '../Navbar/Navbar';
import EventCategory from '../MusicCategory/EventCategory';
  
const Home = () => {
 
    return (
        <div>
            <Navbar/>
             <Banner/> 
             <EventCategory/>
             
              
        </div>
    );
};

export default Home;