import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import loginimg from "../../../public/Login/login.gif";
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      toast.error("please set at least 6 characters ");
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  //google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        toast.success("Successfully Google Login");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  //handle reset password
  const handleReset = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success("Please Check Your Email For Reset Link !!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <Container>
      <div className="text-center my-5">
        <h2 className="text-4xl primary-text font-bold">Login Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 my-5">
          <div>
            <form
              onSubmit={handleSubmit}
              className="shadow-inner px-4 rounded-md"
            >
              <div className="form-control w-[100%]">
                <label className="label">
                  <span className="label-text secondary-text">
                    What is your gmail?
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  name="email"
                  className="input shadow-inner shadow-slate-300  w-full"
                />
              </div>
              <div className="form-control w-[100%]">
                <label className="label">
                  <span className="label-text secondary-text">
                    What is your password?
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  name="password"
                  className="input shadow-inner shadow-slate-300  w-full"
                />
              </div>
              <button
                type="submit"
                className="btn btn-full primary-bg secondary-text w-full font-bold text-xl bg-slate-300 text-blue-400 shadow-inner my-4"
              >
                Login
              </button>
            </form>

            <p className="common-text">
              <small> Do not have an account</small>{" "}
              <Link to="/registration">
                <button className="primary-text">Registration</button>
              </Link>{" "}
            </p>
            {/* Social login */}
            <div className="my-4 px-5">
              <div className="flex flex-col lg:flex-row">
                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center cursor-pointer">
                  <div
                    onClick={handleGoogleSignIn}
                    className="flex justify-center items-center gap-5"
                  >
                    <AiFillGoogleCircle className="w-8 h-12"></AiFillGoogleCircle>{" "}
                    <p className="font-bold">Google</p>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="cursor-pointer grid flex-grow card bg-base-300 rounded-box place-items-center">
                  {" "}
                  <div className="flex justify-center items-center gap-5">
                    <FaGithub className="w-8 h-12"></FaGithub>{" "}
                    <p className="font-bold">Github</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={loginimg}
              alt=""
              className="w-[80%] h-[80%] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
