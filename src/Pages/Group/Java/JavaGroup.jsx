import React from 'react';
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsPeopleFill, BsReplyFill } from "react-icons/bs";
import { FcAlarmClock, FcLike } from "react-icons/fc";
import { GiEternalLove } from "react-icons/gi";
import { MdEmojiPeople, MdTagFaces } from "react-icons/md";
import { PiShareBold } from "react-icons/pi";


const JavaGroup = () => {
    const [questions, setQuestions] = useState([]);

    const findResults = questions.filter((findResult) => findResult.tags == 'tailwind');

    useEffect(() => {
        fetch("https://run-the-stack-server-delta.vercel.app/question")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setQuestions(data);
            });
    }, []);


    return (
        <div className=''>
            <div className="flex py-2 gap-2">
                <img className="w-2/6 h-[160px] ps-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-mspyndicMBTk-KdKp96OZiaD2rkYLYzFQ&usqp=CAU" alt="" />
                <div className=" w-4/6 border-[2px] ps-4 shadow-xl pt-4 pe-2">
                    <h2 className="text-2xl font-bold text-pink-600">Tailwind Learner</h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis numquam perspiciatis.......</h2>
                    <div className="flex my-auto pt-2">
                        <MdEmojiPeople className="text-red-500" size={25}></MdEmojiPeople>
                        <h3>Member: 9k</h3>
                        <BsPeopleFill className="ps-3 text-red-500" size={30}></BsPeopleFill>
                        <h3 className="ps-2">Followers: 2k</h3>
                    </div>
                </div>
            </div>

            {/* overview part */}
            <div className="py-2 ps-2">
                <div className="badge badge-primary badge-lg font-bold me-1">Overview</div>
                <div className="badge badge-lg badge-outline font-bold me-1">Question</div>
                <div className="badge badge-lg badge-outline font-bold me-1">primary</div>
                <div className="badge  badge-lg badge-outline font-bold me-1">secondary</div>
                <div className="badge  badge-lg badge-outline font-bold me-1">accent</div>
                <div className="badge badge-lg badge-outline font-bold">ghost</div>
            </div>
            {/* overvies end */}

            {
                findResults.map(question => <div key={question._id}>  <div className=" py-5 ps-2 lg:flex gap-3">
                    <div className='border-s-2 border-s-emerald-400 border-[1px] lg:w-4/6 bg-slate-50 shadow-xl'>

                        <div>
                            <h2 className="text-2xl font-bold pt-[20px] pb-[10px] ps-[25px]">Question: {question.title}</h2>
                        </div>
                        <div className="text-gray-500 px-7 font-semibold">
                            <p>Ans: {question.body}</p>
                        </div>

                        <div className='p-7 flex gap-4'>
                            <div className="flex gap-2 items-center mr-3">
                                <MdTagFaces size={20} />
                                <p>{question.tags}</p>
                            </div>
                            <div className="border-s-2 border-s-gray-400"></div>
                            <div className="flex ml-3">
                                <GiEternalLove className="text-slate-50 bg-red-400 rounded-full" size={20} />
                                <FcLike className="text-slate-50 bg-red-200 rounded-full" size={20} />
                                <BiLike className="bg-blue-600 rounded-full text-white" size={20} />
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

                    <div className="border-s-2 border-s-emerald-400 p-4 lg:w-2/6 bg-slate-50 border-[1px] shadow-xl">
                        <h2 className="ps-3 text-sm pb-[6px]">AVERAGE RESPONSE RATE(within 24 hours)</h2>
                        <h2 className="py-1 ps-[11px]">Date: {question.date}</h2>
                        <div className="ps-3 flex gap-[10px]">
                            <div>
                                <FcAlarmClock className="" size={50}></FcAlarmClock>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl">45%</h2>
                                <h2 className="text-sm">Help improve the percentage by</h2>
                                <h2 className="text-sm text-blue-600">Answering Questions</h2>
                            </div>
                        </div>
                        <div className="ps-3 pt-4">
                            <h2 className="text-sm pb-2">LEADERBOARD POSITION</h2>
                            <div className="flex gap-1">
                                <div>
                                    <h2 className="text-xl font-bold">#2k</h2>
                                </div>
                                <div>
                                    <MdEmojiPeople className="text-red-500" size={35}></MdEmojiPeople>
                                </div>
                                <div>
                                    <h2 className="text-pink-400 font-bold">You</h2>
                                </div>
                            </div>
                            <div>
                                <h2>-- Your position is holding steady</h2>
                            </div>
                        </div>
                    </div>

                </div> </div>)
            }
        </div>
    );
};

export default JavaGroup;