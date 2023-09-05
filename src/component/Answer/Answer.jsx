import img from '../../assets/rifat.png'
import { BiCheck, BiLike } from 'react-icons/bi';
import { MdTagFaces } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { GiEternalLove } from 'react-icons/gi';
import { BsReplyFill } from 'react-icons/bs';
import { PiShareBold } from 'react-icons/pi';
import Container from '../../Shared/Container/Container';


const Answer = () => {
  return (
    <Container>
      <div className="bg-slate-300 py-5">
      <div className='border-s-2 border-s-emerald-400 lg:w-4/6 bg-slate-50'>
       <div className="flex gap-3 text-white bg-emerald-400 p-5">
        <BiCheck size={30} />
        <h2 className="font-bold text-lg">Best Answer</h2>
       </div>

       <div className="lg:flex justify-between p-7">
        <div className='flex gap-3'>
          <img className='rounded-full' src={img} alt="man" width={40} height={40} />
          <div className=''>
           <div className="flex gap-2 mb-auto">
            <a className="text-pink-500 font-bold hover:text-slate-600" href="">Jennifer Tom</a>
            <span className="bg-blue-400 px-1 rounded text-white text-sm">Professional</span>
            <p>Makeup Artist</p>
           </div>
           <div>
            <a className="text-slate-600 hover:text-slate-900 text-sm" href="">Added an answer on January 4, 2022 at 4:32 pm</a>
           </div>
          </div>
        </div>
        <div>
          <p className="text-white bg-emerald-400 px-2 rounded">Best Answer</p>
        </div>
       </div>

       <div className="text-gray-500 px-7 font-semibold">
        <p>Best thing about Hulk is that more angrier he gets, more stronger he becomes. His anger did take him to a point where his stomp was enough to crack an entire land, and only Sentry was able to stop Hulk from this (Planet Hulk/World War Hulk storyline). Hulk has unlimited strength and accelerated healing factor, and doesn’t get tired easily or return back to his Bruce Banner form (because Hulk and Banner are two separate personalities stuck in a same body), and I guess Hulk would be enough to break bones of plenty of DC characters.</p>
       </div>

       <div className='p-7 flex gap-4'>
        <div className="flex gap-2 items-center mr-3">
          <MdTagFaces size={20} />
          <p>React</p>
        </div>
        <div className="border-s-2 border-s-gray-400"></div>
        <div className="flex ml-3">
           <GiEternalLove className="text-slate-50 bg-red-400 rounded-full" size={20}/>
           <FcLike className="text-slate-50 bg-red-200 rounded-full" size={20}/>
           <BiLike className="bg-blue-600 rounded-full text-white" size={20}/>
        </div>
        <p className='text-gray-500'>100 Users</p>
        <div className='flex gap-2 items-center hover:text-blue-500'>
          <BsReplyFill />
          <a className='text-gray-500 hover:text-blue-500' href="">Reply</a>
        </div>
        <div className='flex gap-2 items-center hover:text-blue-500'>
          <PiShareBold />
          <a className='text-gray-500 hover:text-blue-500' href="">Share</a>
        </div>
        

       </div>

      </div>
      </div>
    </Container>
  );
};

export default Answer;