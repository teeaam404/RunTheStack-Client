import { useTypewriter } from "react-simple-typewriter";
// import Container from "../../Shared/Container/Container";
import { BiSearchAlt, BiLockAlt } from 'react-icons/bi';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['developer','mobile developer','game developer','system admin','data scientist' ],
    loop: {}
 })
  return (
    <>
        <div className="secondary-bg pb-14 mb-4">
          <div className="lg:flex  justify-center lg:gap-10 text-center">
            <div className="bg-red-100 mt-14 lg:px-16 rounded-lg py-4">
              <BiSearchAlt className="mx-auto text-orange-400" size={50}/>
              <h2 className="text-lg my-3 common-text">Find the best answer to your technical<br />question, help others answer theirs</h2>
              <button className="btn mt-4 p-3 px-8 rounded primary-bg hover:bg-orange-600 mb-2 common-text">join the community</button>
              <p>or <a className="underline text-sm" href="">search content</a></p>
            </div>
            <div className="bg-green-100 mt-14 lg:px-16 rounded-lg py-4">
              <BiLockAlt className="mx-auto text-green-400" size={50}/>
              <h2 className="text-lg my-3 common-text">
                Want a secure, private space for your<br /> technical knowledge?
              </h2>
              <button className="btn bg-blue-400 hover:bg-blue-500 p-3 px-10 mt-2 rounded common-text">Discover Teams</button>
            </div>
          </div> 
          <div className="my-10 mb-14">
            <h1 className="text-4xl text-white lg:mx-72 font-bold mx-auto">Every <span className="text-4xl font-bold text-orange-500">{text}</span> <br /> has a tab open to stack overflow</h1>
          </div>
         <div className="text-white text-center lg:mx-32 lg:flex items-center justify-center gap-7 mt-10 mx-auto">
          <div>
            <h2 className="text-2xl font-bold">100+ million</h2>
            <p className="text-gray-400">monthly visitors to Stack Overflow & Stack Exchange</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">45.1+ billion</h2>
            <p className="text-gray-400">Times a developer got help since 2008</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">191% ROI</h2>
            <p className="text-gray-400">from companies using Stack Overflow for Teams</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">5,000+</h2>
            <p className="text-gray-400">Stack Overflow for Teams instances active every day</p>
          </div>
         </div>
        </div>
     
    </>
  );
};

export default Banner;