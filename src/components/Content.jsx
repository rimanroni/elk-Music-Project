import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import Footer from './Footer';

const Content = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-1 gap-4 px-5   mt-10 lg:grid-cols-3'>
                <div>
                    <video className="  rounded-lg" controls>
                        <source src="1.mp4 " type="video/mp4" />
                     </video>
                    <h1 className='p-2 text-2xl'>Pop Song </h1>
                </div>
                <div>
                    <video className=" rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                     </video>
             <h1 className='p-2 text-2xl'>Rock  Song </h1>

                </div>
                <div>
                    <video className="  rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                     </video>
                     <h1 className='p-2 text-2xl'>Hip Hop Song </h1>

                </div>
                <div>
                    <video className="  rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                     </video>
                     <h1 className="text-2xl p-2">Electronic/Dance</h1>
                </div>
                <div>
                    <video className="  rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                     </video>
                     <h1 className="text-2xl p-2">R & B Song</h1>
                </div>
                <div>
                    <video className="  rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                     </video>
                     <h1 className="text-2xl p-2">Country Song</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Content;