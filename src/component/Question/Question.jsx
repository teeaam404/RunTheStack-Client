import Container from "../../Shared/Container/Container";
import man from "../../assets/rifat.png"
import { AiTwotoneLike } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { BiLike } from 'react-icons/bi';
import { TiMessages } from 'react-icons/ti';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { RiLayoutColumnFill } from 'react-icons/ri';

const Question = () => {
  return (
    <Container>
      <div>
        <div className="lg:flex gap-4 bg-slate-300 py-4">
          <div className="bg-slate-50 rounded px-5 py-6 lg:w-4/6 border-s-2 border-s-red-600 h-full">
            <div className=" "></div>
            <div className="flex gap-3 mb-3">
              <div>
                <img className="rounded-full" src={man} alt="man" width={30} height={30} />
              </div>
              <div>
                <a className="text-pink-500 font-bold hover:text-slate-600" href="">Sophie Taylor</a>
              </div>
              <div>
                <p className="bg-blue-600 px-2 text-white rounded">Enlightened</p>
              </div>
              <div>
                <p>Asked: <a className="text-slate-600 hover:text-slate-900" href="">January 4, 2022</a></p>
              </div>
              <div>
                <a className="hover:text-sky-600" href="">Comic Books</a>
              </div>
            </div>
            <a className="text-2xl font-bold hover:text-pink-500" href="">What five Marvel characters do you choose to ensure your safety?</a>
            <p className="mt-3 mb-3">The entire DC Universe is out to assassinate you. What five Marvel characters do you choose to ensure your safety and why? The entire DC Universe? OK, I’m going to need some heavy hitters here.</p>
            <div className="flex gap-3 mb-5">
              <a className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded" href="">Education</a>
              <a className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded" href="">Science</a>
            </div>
            <hr />
            <div className="lg:flex justify-between items-center gap-3 mt-5">
              <div className="flex gap-3">
                <div className="border-2 p-2 rounded-full h-full">
                  <AiTwotoneLike className="text-slate-900 bg-white " size={20} />
                </div>
                <div className="border-s-2 "></div>
                <div className="ms-2 flex items-center">
                  <BiLike className="bg-blue-600 rounded-full text-white" size={20} />
                  <FcLike className="text-slate-50 bg-red-200 rounded-full" size={20} />
                  <CgSmileMouthOpen className="bg-yellow-300 rounded-full" size={20} />
                  <p className="ms-2">130 users</p>
                  <div className="ms-2 flex">
                    <div className="flex gap-2 border-2 py-2 px-3 h-full text-pink-500">
                      <a href=""><TiMessages size={20} /></a>
                      <span>1</span>
                    </div>
                    <div className="flex gap-2 border-2 py-2 px-3 h-full text-blue-500">
                      <a href=""><TiMessages size={20} /></a>
                      <span>2</span>
                    </div>
                    <div className="flex gap-2 items-center ms-3 border-2 py-2 px-3 h-full">
                      <FaEye />
                      <p>6K Views</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="bg-black text-white font-bold hover:bg-pink-500 px-5 py-1 rounded">Answer</button>
              </div>
            </div>
          </div>

          {/* popular question */}
          <div className="bg-slate-50 rounded lg:w-2/6 p-4">
            <div className="flex gap-2 items-center mb-4">
              <RiLayoutColumnFill size={30} />
              <h2 className="text-1xl text-xl font-bold">Popular Questions</h2>
            </div>
            <hr />
            <div className="mt-5 flex gap-7 mb-5">
              <div>
                <img className="rounded-full" src={man} alt="man" width={40} height={40} />
              </div>
              <div>
                <h2 className="text-pink-500 font-bold" >Sophie Taylor</h2>
                <a className="text-lg font-bold hover:text-pink-600" href="">Would it be possible to give a human artificial gills?</a>
                <div className="flex gap-3 mt-2">
                  <div className="flex gap-2 text-pink-600 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>2</span>
                  </div>
                  <div className="flex gap-2 text-blue-500 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="mt-5 flex gap-7 mb-5">
              <div>
                <img className="rounded-full" src={man} alt="man" width={40} height={40} />
              </div>
              <div>
                <h2 className="text-blue-500 font-bold" >Sophie Taylor</h2>
                <a className="text-lg font-bold hover:text-pink-600" href="">Would it be possible to give a human artificial gills?</a>
                <div className="flex gap-3 mt-2">
                  <div className="flex gap-2 text-pink-600 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>1</span>
                  </div>
                  <div className="flex gap-2 text-blue-500 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="mt-4 flex gap-7 mb-5">
              <div>
                <img className="rounded-full" src={man} alt="man" width={40} height={40} />
              </div>
              <div>
                <h2 className="text-blue-500 font-bold" >Sophie Taylor</h2>
                <a className="text-lg font-bold hover:text-pink-600" href="">Would it be possible to give a human artificial gills?</a>
                <div className="flex gap-3 mt-2">
                  <div className="flex gap-2 text-pink-600 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>2</span>
                  </div>
                  <div className="flex gap-2 text-blue-500 hover:text-gray-700">
                    <a href=""><TiMessages size={20} /></a>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Question;