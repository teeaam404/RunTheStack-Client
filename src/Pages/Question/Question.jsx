import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RiLayoutColumnFill } from "react-icons/ri";
import Container from "../../Shared/Container/Container";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("questionData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <div className="secondary-bg">
      {questions.map((question) => (
        <div key={question.id}>
          <div className="lg:flex gap-4  py-4 px-5">
            <div className="bg-slate-50 rounded px-5 py-6 lg:w-4/6 border-s-2 border-s-red-600 h-full">
              <div className="flex gap-3 mb-3">
                <div>
                  <img
                    className="rounded-full"
                    src={question.user.userimage}
                    alt="man"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <a
                    className="text-pink-500 font-bold hover:text-slate-600"
                    href=""
                  >
                    {question.user.username}
                  </a>
                </div>
                <div>
                  <p className="bg-blue-600 px-2 text-white rounded">
                    Enlightened
                  </p>
                </div>
                <div>
                  <p>
                    Asked:{" "}
                    <a className="text-slate-600 hover:text-slate-900" href="">
                      {question.date}
                    </a>
                  </p>
                </div>
                <div></div>
              </div>
              <Link to={`/questionAnswer/${question.id}`}>
                <a className="text-2xl font-bold hover:text-pink-500" href="">
                  {question.title}
                </a>
              </Link>
              <p className="mt-3 mb-3">{question.body}</p>
              <div className="flex gap-3 mb-5">
                {question.tags.map((tag) => (
                  <a
                    key={tag}
                    className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded"
                    href=""
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <hr />
              <div className="lg:flex justify-between items-center gap-3 mt-5">
                <div className="flex gap-3">
                  <div className="border-2 p-2 rounded-full h-full">
                    <AiTwotoneLike
                      className="text-slate-900 bg-white "
                      size={20}
                    />
                  </div>
                  <div className="border-s-2 "></div>
                  <div className="ms-2 flex items-center">
                    <BiLike
                      className="bg-blue-600 rounded-full text-white"
                      size={20}
                    />
                    <a
                      className="text-slate-50 bg-red-200 rounded-full"
                      size={20}
                    />
                    <CgSmileMouthOpen
                      className="bg-yellow-300 rounded-full"
                      size={20}
                    />
                    <p className="ms-2">130 users</p>
                    <div className="ms-2 flex">
                      <div className="flex gap-2 border-2 py-2 px-3 h-full text-pink-500">
                        <a href="">
                          <TiMessages size={20} />
                        </a>
                        <span>1</span>
                      </div>
                      <div className="flex gap-2 border-2 py-2 px-3 h-full text-blue-500">
                        <a href="">
                          <TiMessages size={20} />
                        </a>
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
                  <button className="bg-black text-white font-bold hover:bg-pink-500 px-5 py-1 rounded">
                    Vote
                  </button>
                </div>
              </div>
            </div>

            {/* Popular question section */}
            <div className="bg-slate-50 rounded lg:w-2/6 p-4">
              <div className="flex gap-2 items-center mb-4">
                <RiLayoutColumnFill size={30} />
                <h2 className="text-1xl text-xl font-bold">
                  Popular Questions
                </h2>
              </div>
              <hr />
              {/* ... Popular questions ... */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
