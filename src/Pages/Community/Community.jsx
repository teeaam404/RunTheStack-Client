
import { Link } from 'react-router-dom';

const Community = () => {

    return (
        <div>
            <div className='text-center my-2'>
                <h2 className='uppercase font-bold text-[20px] pt-4 pb-3 text-blue-500'>Collectives</h2>
                <h2 className='text-[18px] font-bold'>Communities for your <span className='text-pink-500'>favorite technologies</span></h2>
                <h1 className='text-xs'>Areas of practice, technology, and provider <br /> organization already on collectives.</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-1 me-1 gap-[15px] mb-[10px]'>

                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>CSS</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>2k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/group1'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>TailWind</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>3k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/tailwind'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>Php</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>2k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/php'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>Javascript</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>3k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/javaScript'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>Python</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>2k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/python'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
                <div className="border-[2px] shadow-xl h-[120px] my-3 rounded-md three">
                    <div className='flex justify-between pt-3'>
                        <div className='ps-[35px]'>
                            <h1 className=' font-bold'><span className='text-blue-600'>Redux</span> </h1>
                            <h2 className='text-[12px] text-pink-400 font-bold'>3k members</h2>
                        </div>
                        <div className='pe-[35px]'>
                            <Link to='/redux'><button className='btn btn-square border-blue-500'>Join</button></Link>
                        </div>
                    </div>
                    <h2 className='ps-[35px] pe-[35px] pt-[12px] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet.....</h2>
                </div>
            </div>
        </div>
    );
};

export default Community;