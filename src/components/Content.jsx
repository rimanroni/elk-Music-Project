import React from 'react';
import Navbar from '../pages/Navbar/Navbar';

const Content = () => {
    return (
        <div>
            <Navbar/>
            <div className='grid grid-cols-1 gap-4 px-5   mt-10 lg:grid-cols-3'>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Content;