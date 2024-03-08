import React from 'react';
 import Banner from '../../components/Banner';
import Navbar from '../Navbar/Navbar';
import EventCategory from '../MusicCategory/EventCategory';
import HeroArea from '../../components/HeroArea';
import Sedule from '../../components/Sedule';
import SeduleSlider from '../../components/SeduleSlider';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
  
const Home = () => {
 
    return (
        <div>
            <Helmet>
                <title>this is home bar</title>
            </Helmet>
            <Navbar/>
             <Banner/> 
             <HeroArea/>
             <EventCategory/>
             <SeduleSlider/>
             <Footer/>
              
        </div>
    );
};

export default Home;