import React from 'react';
import Container from '../../Shared/Container/Container';

const Login = () => {
    return (
        <Container>
        <div className='text-center my-5'>
            <h2 className='text-4xl text-[#DC2626] font-bold'>Login Form</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10 my-5'>
                <form className=' shadow-inner px-4'>
                    <div className="form-control w-[100%]">
                        <label className="label">
                            <span className="label-text text-sky-500">What is your gmail?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input shadow-inner shadow-slate-300  w-full" />
                    </div>
                    <div className="form-control w-[100%]">
                        <label className="label">
                            <span className="label-text text-sky-500">What is your password?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input shadow-inner shadow-slate-300  w-full" />
                    </div>
                </form>
                <div>
                    <img src="" alt="" />
                    <h2>Animation Image</h2>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Login;