<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const register = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, password, email, photo)

        if (password.length < 6) {
            Toaster.error("please set at least 6 characters ")
            return
        }

        createUser(email, password, displayName, photoURL)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, { replace: true })
                event.target.reset();
                return toast.success("Registration Successful")
            })
            .catch(error => {
                console.log(error)
                setError(toast.error('Already Register this email'))


            })
    }
    return (
        <div className="hero-content mx-auto rounded-b-full mt-4 shadow-2xl">

            <div className="card w-full ">
                <div className="card-body">
                    <h1 className="text-4xl font-bold primary-text">Registration Form </h1>
                    <form onSubmit={register} >

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="text-2xl secondary-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type Your Name" className="input shadow-inner shadow-slate-300" />
                        </div>
                        <div className="form-control w-[96%] mx-auto">
                            <label className="label font-bold">
                                <span className="text-2xl secondary-text">Picture</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input shadow-inner shadow-slate-300" />
                        </div>
                        <div className="form-control w-[86%] mx-auto">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type Your Email" required className="input shadow-inner shadow-slate-300" />
                        </div>

                        <div className="form-control w-[71%] mx-auto">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Type password" required className="input shadow-inner shadow-slate-300" />

                        </div>
                        <div className="form-control mt-6 w-[53%] mx-auto">
                            <input className="btn primary-bg text-white" type="submit" value="Registration" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an Account <Link className='link primary-text font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
=======
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { saveUser } from "../../api/auth";
import { AiFillGoogleCircle } from "react-icons/ai";

const Registration = () => {
  const {
    loading,
    setLoading,
    signIn,
    signInWithGoogle,
    updateUserProfile,
    createUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      toast.error("please set at least 6 characters ");
    }

    //image upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, imageUrl)
              .then(() => {
                toast.success("Sign Up Successful !!");
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
                setLoading(false);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });

    return;
  };

  //google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        saveUser(result.user);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="hero-content mx-auto rounded-b-full mt-4 shadow-2xl">
      <div className="card w-full ">
        <div className="card-body">
          <h1 className="text-4xl font-bold primary-text">
            Registration Form{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">
                <span className="text-2xl secondary-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                className="input shadow-inner shadow-slate-300"
              />
            </div>
            <div className="ms-6">
              <label className="label font-bold">
                <span className="text-2xl secondary-text">Select Image</span>
              </label>
              <input
                className="pl-5"
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div className="form-control w-[86%] mx-auto">
              <label className="label font-bold">
                <span className="label-text text-2xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email"
                required
                className="input shadow-inner shadow-slate-300"
              />
            </div>

            <div className="form-control w-[71%] mx-auto">
              <label className="label font-bold">
                <span className="label-text text-2xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type password"
                required
                className="input shadow-inner shadow-slate-300"
              />
            </div>
            <div className="form-control mt-6 w-[53%] mx-auto">
              <input
                className="btn primary-bg text-white"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an Account{" "}
            <Link className="link primary-text font-bold" to="/login">
              {" "}
              Login
            </Link>
          </p>
          <div
            onClick={handleGoogleSignIn}
            className="flex mx-auto cursor-pointer justify-center text-center items-center gap-2"
          >
            <AiFillGoogleCircle className="w-8 h-12"></AiFillGoogleCircle>
            <p className="font-bold inline">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
>>>>>>> a2f5330ff34b0e8d3dbe34176d3501eab02db077
