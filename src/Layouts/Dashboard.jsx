import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { FaEdit } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary fixed left-0 top-20 drawer-button lg:hidden">Profile</label>

                </div>
                <div className="drawer-side pt-16 md:pt-0 lg:pt-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="py-4  w-64 min-h-full bg-slate-300 text-base-content">
                        {/* Sidebar content here */}
                        {/* User Profile */}
                        <div className='text-center'>
                            <div className="avatar">
                                <div className="w-28 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/nfQ8FVR/In-Shot-20220611-235517574.jpg" alt="Profile" />
                                </div>

                            </div>
                            <div>
                                <h2 className='text-[1.3rem] secondary-text font-[Sans]'>Md Saiful Islam</h2>
                                <div className='flex items-center justify-center py-2'>
                                    <FaEdit className='w-8'></FaEdit>
                                    <FaEdit className='w-8'></FaEdit>
                                </div>
                            </div>

                        </div>
                        {/* todo: will be dynamic data*/}
                        <div className='py-2'>
                            <ul className='ml-2 my-2 text-[1.2rem] secondary-text font-[Sans]'>
                                <li className='bg-slate-400 px-5 rounded-l-full my-2 hover:bg-gray-500 transition-all hover:scale-110 hover:ml-16'><a>Posts</a></li>
                                <li className='bg-slate-400 px-5 rounded-l-full my-2 hover:bg-gray-500 transition-all hover:scale-110 hover:ml-10'><a>Comments</a></li>
                            </ul>
                        </div>
                        <div className='text-center secondary-text border-2 border-cyan-100 mx-2'>
                            <h2>Profile Information</h2>

                            <p>Profile type: User</p>
                            <h4>Location</h4>
                            <p>Join date: 28-jun-2023</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;