<<<<<<< HEAD
import './Community.css'
const Community = () => {
=======

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch("community.json")
            .then((res) => res.json())
            .then((data) => setGroups(data));
    }, []);

>>>>>>> a2f5330ff34b0e8d3dbe34176d3501eab02db077
    return (
        <div>
            <div className='text-center my-2'>
                <h2 className='uppercase font-bold text-[20px] pt-4 pb-3 text-blue-500'>Collectives</h2>
                <h2 className='text-[18px] font-bold'>Communities for your <span className='text-pink-500'>favorite technologies</span></h2>
                <h1 className='text-xs'>Areas of practice, technology, and provider <br /> organization already on collectives.</h1>
            </div>
<<<<<<< HEAD
            <div className="all-card">
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md three ms-[300px]">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className=' font-bold'><span className='text-blue-600'>PHP</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>2k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className='text-blue-600 font-bold'>Java</h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>3k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md three ms-[300px]">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className='text-blue-600 font-bold'>MERN</h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>5k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className='text-blue-600 font-bold'>JavaScript</h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>7k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md three ms-[300px]">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className='text-blue-600 font-bold'>NLP</h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>3k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl w-[320px] h-[120px] my-3 rounded-md">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-4'>
                            <h1 className='text-blue-600 font-bold'>Python</h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>12k members</h2>
                        </div>
                        <div className='pe-3'>
                            <button className='btn btn-square border-blue-500'>Join</button>
                        </div>
                    </div>
                    <h2 className='ps-4 pt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
=======
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-1 me-1 gap-[15px] mb-[10px]'>
                {
                    groups.map(group => <>
                        <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                            <div className='flex justify-between pt-3'>
                                <div className='ps-[35px]'>
                                    <h1 className=' font-bold'><span className='text-blue-600'>{group.title}</span> </h1>
                                    <h2 className='text-[12px] text-pink-400 font-bold'>{group.member} members</h2>
                                </div>
                                <div className='pe-[35px]'>
                                    <Link to ={`/community/group/${group.id}`}><button className='btn btn-square border-blue-500'>Join</button></Link>
                                </div>
                            </div>
                            <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>{group.description}</h2>
                        </div>
                                    </>)
                }
>>>>>>> a2f5330ff34b0e8d3dbe34176d3501eab02db077
            </div>
        </div>
    );
};

export default Community;