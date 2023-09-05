import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Theme from "../../component/Theme/Theme";
import logo from "../../../public/logo/logo 1.png";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  return (

    <div className="navbar common-bg">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/qna'>Ask Question</Link>
            </li>
            <li>
              <Link to='/questions'>Question</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li>
            <Link to='/qna'>Ask Question</Link>
          </li>
          <li>
            <Link to='/questions'>Question</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Link to="/">
          <img src={logo} className="w-32" alt="" />
        </Link>
      </div>
      <div className="navbar-end">
        <input
          className="input input-bordered input-primary md:w-full hidden md:block  max-w-xs mx-5"
          type="email"
          name=""
          id=""
          placeholder="Search your question"
        />
        {/* <button>
          <Theme />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
        <Link to='/dashboard/profile' className="avatar me-3">
          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/nfQ8FVR/In-Shot-20220611-235517574.jpg" alt="Profile" />
          </div>
        </Link>
        <div className="primary-bg px-2 py-1 rounded-md">
          {
            user ? <button onClick={logout}>Logout</button> : <Link to="/login"><button>Login</button></Link>
          }
        </div>

      </div>
    </div>

  );
};

export default Navbar;