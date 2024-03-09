import React from 'react';
import { FaFacebook, FaInstagram, FaMusic, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='mt-12'>
            <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <NavLink to={'/'}  className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                              <FaMusic className='text-2xl'/>
                            </div>
                            <span className="self-center text-2xl font-semibold">Elk Music</span>
                           
                        </NavLink>
                    </div>
                    <div className="grid grid-cols-2 lg:px-4 px-8 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracki uppercase dark:text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a >Features</a>
                                </li>
                                <li>
                                    <a>Integrations</a>
                                </li>
                                <li>
                                    <a>Pricing</a>
                                </li>
                                <li>
                                    <a>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a>Privacy</a>
                                </li>
                                <li>
                                    <a>Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a>Public API</a>
                                </li>
                                <li>
                                    <a>Documentation</a>
                                </li>
                                <li>
                                    <a>Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3  ">
                            <div className="uppercase dark:text-gray-50">Social media</div>
                            <div className="flex text-2xl justify-start space-x-3">
                                <a className="flex items-center p-1">
                                   <FaFacebook className='text-blue-500'/>
                                </a>
                                <a   className="flex items-center p-1">
                                    <FaTwitter className='text-blue-500'/>
                                </a>
                                <a className="flex items-center p-1">
                                   <FaInstagram className='text-rose-500'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-400">© 2024 Elk Music.com All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;