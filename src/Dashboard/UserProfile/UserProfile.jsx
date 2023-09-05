import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <section className="">
            <h2 className="m-10 text-2xl font-bold">Profile</h2>
            <div className="grid grid-cols-2 md:w-[80%] mx-auto ">
                <div className="rounded-s-md  min-h-[500px]">
                  <div className="text-center">
                   <Link to='/dashboard/profile' className="avatar me-3">
                    <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="Profile" />
                    </div>
                  </Link>
                  </div>
                  <div className="text-center">
                    <button className="btn secondary-bg m-3 text-white hover:text-black rounded-md">Edit Profile</button>
                  </div>
                </div>
                <div className="rounded-e-md">
                   <div className="mb-3">
                        <h2 className="text-2xl font-bold">User Id:</h2>
                        <h4 className="text-lg">8437</h4>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-2xl font-bold">User Name:</h2>
                        <h4 className="text-lg">{user?.displayName}</h4>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-2xl font-bold">User Email:</h2>
                        <h4 className="text-lg">rifathossin0423@gmail.com</h4>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-2xl font-bold">User Contact:</h2>
                        <h4 className="text-lg">+8801843939641</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;