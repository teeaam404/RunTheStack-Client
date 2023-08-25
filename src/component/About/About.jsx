import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

const About = () => {
    const [lead, setLead] = useState("saiful")

    return (
        <div className="px-20 mx-auto secondary-bg py-10 mt-10">
            <h2 className="text-center font-bold text-blue-500 text-2xl ">About Us</h2>
            <div className="border-2 mt-2 w-[80px] border-blue-500 mx-auto"></div>

            <p className="pt-5 mb-14 md:w-[60%] text-center mx-auto font-bold common-text">We're a tight-knit team of six, pooling our skills, thoughts, and coding prowess. Together, we're crafting a digital experience that showcases the true power of collaboration. Stay tuned for the magic that happens when minds intertwine in the realm of web development!</p>

            <div className="grid grid-cols-[30%_70%] mb-20">
                <div onClick={() => setLead("saiful")} className="border-4 cursor-pointer border-gray-400 hover:border-green-500 h-[500px] bg-[url('./img/saiful.jpg')] bg-no-repeat bg-center bg-cover">

                </div>
                <div className="border flex flex-row flex-wrap gap-2 px-2 common-text">
                    <div className={`w-[32.6%] p-5 transition-all ${lead === "saiful" ? "border" : "hidden"} relative`}>
                        <h3 className="text-xl font-bold">Saiful Islam Parvez</h3>
                        <p>(Team Leader)</p>

                        <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                            <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                            <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                            <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                            <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                        </div>

                    </div>
                    {/* Member-1 */}
                    {
                        lead === "sayhan" ? <div className="border w-[66.3%] grid grid-cols-2">
                            <div className="bg-[url('./img/sayhan.jpg')] bg-no-repeat bg-center bg-cover hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>
                            <div className="p-5 relative">
                                <h3 className="text-xl font-bold">Sayhan Ahmed Tonmoy</h3>
                                <p>(member)</p>
                                <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                                </div>
                            </div>
                        </div>
                            : <div onClick={() => setLead("sayhan")} className="border bg-[url('./img/sayhan.jpg')] bg-no-repeat bg-center bg-cover w-[32.6%] hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>

                    }

                    {/* Member-2 */}
                    {
                        lead === "sayhan-2" ? <div className="border w-[66.3%] grid grid-cols-2">
                            <div className="bg-[url('./img/sojib.jpg')] bg-no-repeat bg-center bg-cover hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>
                            <div className="p-5 relative">
                                <h3 className="text-xl font-bold">Sojib Das</h3>
                                <p>(Member)</p>
                                <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                                </div>
                            </div>
                        </div>
                            : <div onClick={() => setLead("sayhan-2")} className="border bg-[url('./img/sojib.jpg')] bg-no-repeat bg-center bg-cover w-[32.6%] hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>

                    }

                    {/* Member-3 */}
                    {
                        lead === "sayhan-3" ? <div className="border w-[66.3%] grid grid-cols-2">
                            <div className="bg-[url('./img/rifat.jpg')] bg-no-repeat bg-center bg-cover hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>
                            <div className="p-5 relative">
                                <h3 className="text-xl font-bold">Mohammad Rifat Hossain</h3>
                                <p>(Member)</p>
                                <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                                </div>
                            </div>
                        </div>
                            : <div onClick={() => setLead("sayhan-3")} className="border bg-[url('./img/rifat.jpg')] bg-no-repeat bg-center bg-cover w-[32.6%] hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>

                    }

                    {/* Member-4 */}
                    {
                        lead === "sayhan-4" ? <div className="border w-[66.3%] grid grid-cols-2">
                            <div className="bg-[url('./img/tanjim.jpg')] bg-no-repeat bg-center bg-cover hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>
                            <div className="p-5 relative">
                                <h3 className="text-xl font-bold">Jawad Hossain Tanjim</h3>
                                <p>(Member)</p>
                                <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                                </div>
                            </div>
                        </div>
                            : <div onClick={() => setLead("sayhan-4")} className="border bg-[url('./img/tanjim.jpg')] bg-no-repeat bg-center bg-cover w-[32.6%] hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>

                    }

                    {/* Member-5 */}
                    {
                        lead === "sayhan-5" ? <div className="border w-[66.3%] grid grid-cols-2">
                            <div className="bg-[url('./img/biplop.jpg')] bg-no-repeat bg-center bg-cover hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>
                            <div className="p-5 relative">
                                <h3 className="text-xl font-bold">মোঃ সৌরভ হোসেন বিপ্লব</h3>
                                <p>(Member)</p>
                                <div className="flex gap-3 text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 mb-4">
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <AiOutlinePhone /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaLinkedinIn /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaFacebookF /> </a>
                                    <a className="border p-3 rounded-full hover:text-green-500 hover:bg-slate-700 transition-all cursor-pointer"> <FaWhatsapp /> </a>
                                </div>
                            </div>
                        </div>
                            : <div onClick={() => setLead("sayhan-5")} className="border bg-[url('./img/biplop.jpg')] bg-no-repeat bg-center bg-cover w-[32.6%] hover:border-4 hover:border-green-500 transition-all cursor-pointer"></div>

                    }

                </div>

            </div>

        </div>
    );
};

export default About;