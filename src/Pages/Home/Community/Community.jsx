import './Community.css'
const Community = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='uppercase font-bold text-[20px] pt-4 pb-3 text-blue-500'>Collectives</h2>
                <h2 className='text-[18px] font-bold'>Communities for your <span className='text-pink-500'>favorite technologies</span></h2>
                <h1 className='text-xs'>Areas of practice, technology, and provider <br /> organization already on collectives.</h1>
            </div>
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
            </div>
        </div>
    );
};

export default Community;