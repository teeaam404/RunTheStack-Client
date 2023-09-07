import React, { useEffect, useState } from "react";
import {
  FaCalendarDay,
  FaEye,
  FaQuestion,
  FaSearch,
  FaStopwatch,
  FaTimesCircle,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const QuestionAnswer = () => {
  const { id } = useParams();
  console.log(id);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/question")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAnswers(data);
      });
  }, []);

  // Find the matching answer based on id
  const matchingAnswer = answers.find((answer) => answer._id === id);

  return (
    <div className="bg-base-200">
      {matchingAnswer ? (
        <div>
          {" "}
          <div className="bg-blue-900 h-56 w-full">
            <div className="py-12 px-4 md:px-20">
              <h1 className="text-white font-bold text-3xl md:text-5xl">
                {matchingAnswer.title}
              </h1>

              <hr className="mt-4 opacity-30" />
              <Link to="/questions">
                <FaQuestion className="text-white text-xl mt-2" />
              </Link>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto my-4">
            <div className="lg:flex gap-3 ">
              <div className="bg-white border-1 border-l-4 border-blue-800 border-b-2 w-[65%]  ps-8">
                <div className="lg:flex gap-12 my-4">
                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaEye />
                    </span>
                    <span className=" opacity-80 font-semibold ">600views</span>
                  </div>

                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaCalendarDay />
                    </span>
                    <span className=" opacity-60 font-semibold ">
                      {matchingAnswer.date}
                    </span>
                  </div>
                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaCalendarDay />
                    </span>
                    <Link>
                      <span className=" opacity-60 font-semibold ">
                        {matchingAnswer.tags}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-[35%]">
                {" "}
                <div className="lg:flex">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-info w-full max-w-xs md:max-w-full mb-2 md:mb-0 md:mr-2"
                  />
                  <button className="btn btn-sm btn-primary my-auto">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn  btn-primary">Comment</button>
        </div>
      ) : (
        <p>No matching answer found.</p>
      )}
    </div>
  );
};

export default QuestionAnswer;
