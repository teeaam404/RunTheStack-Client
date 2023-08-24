import { Link } from "react-router-dom";
import Container from '../../Shared/Container/Container';
import login from '../../../public/Login/login.gif'
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
    return (
        <Container>
            <div className='text-center my-5'>
                <h2 className='text-4xl primary-text font-bold'>Login Form</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-10 my-5 items-center'>

                    <div>
                        <form className='shadow-inner px-4 rounded-md'>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text secondary-text">What is your gmail?</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input shadow-inner shadow-slate-300  w-full" />
                            </div>
                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text secondary-text">What is your password?</span>
                                </label>
                                <input type="password" placeholder="Type here" className="input shadow-inner shadow-slate-300  w-full" />
                            </div>
                            <button type='submit' className='btn btn-full primary-bg secondary-text w-full font-bold text-xl bg-slate-300 text-blue-400 shadow-inner my-4'>Login</button>
                        </form>

                        <p className='common-text'><small> Do not have an account</small> <Link to="/registration"><button className='primary-text font-bold p-1 rounded-md'>Registration</button></Link> </p>
                        {/* Social login */}
                        <div className='my-4 px-5'>
                            <div className="flex flex-col lg:flex-row">
                                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center cursor-pointer">
                                    <div className='flex justify-center items-center gap-5'><AiFillGoogleCircle className='w-8 h-12'></AiFillGoogleCircle> <p className='font-bold'>Google</p>
                                    </div>
                                </div>
                                <div className="divider lg:divider-horizontal">OR</div>
                                <div className="cursor-pointer grid flex-grow card bg-base-300 rounded-box place-items-center"> <div className='flex justify-center items-center gap-5'>
                                    <FaGithub className='w-8 h-12'></FaGithub> <p className='font-bold'>Github</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={login} alt="" className='w-[80%] h-[80%] rounded-2xl' />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;