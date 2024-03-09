import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";

const SocalLink = () => {
    return (
        <div className='lg:w-[30%] '>
             <div class="flex items-center justify-between mt-4">
         <span class="w-1/2  border-b dark:border-gray-600  "></span>
          <p   class="text-xs text-center w-full  text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
         </p>
          <span class=" w-1/2  border-b dark:border-gray-400  "></ span>
         </div>

         <div class="flex items-center mt-6 -mx-2">
        <button type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white   duration-300 transform bg-blue-500 rounded-lg   focus:outline-none">
           

            <span class=" flex items-center justify-center mx-2 sm:inline"> <FaGoogle className='inline' /> Sign in with Google</span>
        </button>

        <button class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg  ">
        <FaGithub />
        </button>
    </div>

        </div>
    );
};

export default SocalLink;