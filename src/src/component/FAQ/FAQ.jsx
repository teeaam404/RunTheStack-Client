import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Faq = () => {
    const [qa, setQa] = useState(1);
    console.log(qa)

    return (
        <div className='bg-[url("faq.jpg")] bg-no-repeat bg-fixed bg-center bg-cover h-[700px] w-full md:grid grid-cols-2'>
            <div className="flex justify-end items-center">
                <div className='border border-white bg-[#ffffff20] lg:w-10/12 rounded-xl shadow-[#00000040] shadow-xl'>
                    <div className='border border-white shadow-xl rounded-t-xl'>
                        <div className=' flex justify-between items-center'>
                            <p className='px-5 py-3 font-bold'>What is the stack?</p>
                            <FaAngleDown onClick={() => setQa(1)} className='text-[#ffff66] text-2xl mr-5' />
                        </div>
                        <p className={`px-5 pb-5 ${qa === 1 ? "transition-all" : "hidden transition-all"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, magni? Repellendus, eius? Illum qui voluptatum libero nihil sunt quod officiis, harum dolor fugiat vitae maxime consequatur minus voluptate expedita. Ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit veniam deleniti reprehenderit voluptas eius aliquid eaque. Cumque, dolores fugiat.</p>
                    </div>

                    <div className='border border-white shadow-xl '>
                        <div className=' flex justify-between items-center'>
                            <p className='px-5 py-3 font-bold'> How does the stack will help you?</p>
                            <FaAngleDown onClick={() => setQa(2)} className='text-[#ffff66] text-2xl mr-5' />
                        </div>
                        <p className={`px-5 pb-5 ${qa === 2 ? "transition-all" : "hidden transition-all"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, magni? Repellendus, eius? Illum qui voluptatum libero nihil sunt quod officiis, harum dolor fugiat vitae maxime consequatur minus voluptate expedita. Ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit veniam deleniti reprehenderit voluptas eius aliquid eaque. Cumque, dolores fugiat.</p>
                    </div>

                    <div className='border border-white shadow-xl '>
                        <div className=' flex justify-between items-center'>
                            <p className='px-5 py-3 font-bold'>Why do you use the stack?</p>
                            <FaAngleDown onClick={() => setQa(3)} className='text-[#ffff66] text-2xl mr-5' />
                        </div>
                        <p className={`px-5 pb-5 ${qa === 3 ? "transition-all" : "hidden transition-all"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, magni? Repellendus, eius? Illum qui voluptatum libero nihil sunt quod officiis, harum dolor fugiat vitae maxime consequatur minus voluptate expedita. Ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit veniam deleniti reprehenderit voluptas eius aliquid eaque. Cumque, dolores fugiat.</p>
                    </div>

                    <div className='border border-white shadow-xl '>
                        <div className=' flex justify-between items-center'>
                            <p className='px-5 py-3 font-bold'>How does the stack help to code?</p>
                            <FaAngleDown onClick={() => setQa(4)} className='text-[#ffff66] text-2xl mr-5' />
                        </div>
                        <p className={`px-5 pb-5 ${qa === 4 ? "transition-all" : "hidden transition-all"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, magni? Repellendus, eius? Illum qui voluptatum libero nihil sunt quod officiis, harum dolor fugiat vitae maxime consequatur minus voluptate expedita. Ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit veniam deleniti reprehenderit voluptas eius aliquid eaque. Cumque, dolores fugiat.</p>
                    </div>

                    <div className='border border-white shadow-xl rounded-b-xl'>
                        <div className=' flex justify-between items-center'>
                            <p className='px-5 py-3 font-bold'>Why it is importent to conect with the stack?</p>
                            <FaAngleDown onClick={() => setQa(5)} className='text-[#ffff66] text-2xl mr-5' />
                        </div>
                        <p className={`px-5 pb-5 ${qa === 5 ? "transition-all" : "hidden transition-all"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, magni? Repellendus, eius? Illum qui voluptatum libero nihil sunt quod officiis, harum dolor fugiat vitae maxime consequatur minus voluptate expedita. Ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit veniam deleniti reprehenderit voluptas eius aliquid eaque. Cumque, dolores fugiat.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Faq;