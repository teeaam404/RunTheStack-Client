import React from "react";
import { FaCalendar, FaEye, FaHome } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
const QuestionTable = ({ question }) => {
  console.log(question);
  return (
    <div className="">
      {/* colum 1 */}
      <div key={question._id} className=" border-2  bg-white">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="lg:flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={question.userImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{question.title}</div>

                    <div className="lg:flex justify-between items-center gap-3 mt-1 ">
                      <div className="">
                        <div className="flex gap-4 ">
                          <div>
                            <span className="btn btn-outline text-lg btn-sm rounded-2xl">
                              <BiLike />
                            </span>
                            <span className=" opacity-80 font-semibold ms-2">
                              100Like
                            </span>
                          </div>

                          <div className="flex gap-2 my-2">
                            <span className="  text-lg rounded-2xl opacity-70">
                              <FaEye />
                            </span>
                            <span className=" opacity-80 font-semibold ">
                              600views
                            </span>
                          </div>

                          <div className="flex gap-2 my-2">
                            <span className="  text-lg rounded-2xl opacity-70">
                              <FaCalendar />
                            </span>
                            <span className=" opacity-60 font-semibold ">
                              {question.date}
                            </span>
                          </div>
                        </div>
                        <span></span>

                        <div className="btn btn-sm bg-white text-blue-800">
                          <Link to="">
                            <TiMessages size={23} />
                          </Link>
                          <span>1</span>
                        </div>
                      </div>
                      {/* vote */}
                      <button className=" ">
                        <a
                          href="#_"
                          class="relative inline-block text-lg group"
                        >
                          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
                            <span class="relative">Vote</span>
                          </span>
                          <span
                            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                          ></span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
  );
};

export default QuestionTable;
