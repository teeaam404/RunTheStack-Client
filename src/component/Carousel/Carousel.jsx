
import Marquee from "react-fast-marquee"
import img1 from "../../assets/logo/bark.png"
import img2 from "../../assets/logo/bloomburg.png"
import img3 from "../../assets/logo/box.png"
import img5 from "../../assets/logo/dailpad.png"
import img6 from "../../assets/logo/expen.png"
import img7 from "../../assets/logo/instracart.png"
import img8 from "../../assets/logo/intercom.png"
import img9 from "../../assets/logo/logiteck.png"
import img10 from "../../assets/logo/mircosoft.png"
// import Container from "../../Shared/Container/Container"

const Carousel = () => {
  return (
    <>
    <div className=" secondary-bg py-10">
     <div className="common-bg mx-8 md:mx-24 rounded-3xl py-5">
     <div className="">
          <h2 className="text-center text-3xl font-semibold secondary-text">Thousands of organizations around the globe use Stack Overflow for Teams</h2>
        </div>
        <div className=" rounded-lg py-5">
          <Marquee>
            <div className="flex gap-20 rounded-lg justify-between">
            <img className="w-60 rounded-lg" src={img2} alt="" />
            <img className="w-60 rounded-lg" src={img5} alt="" />
            <img className="w-60 rounded-lg" src={img6} alt="" />
            <img className="w-60 rounded-lg" src={img7} alt="" />
            <img className="w-60 rounded-lg" src={img8} alt="" />
            <img className="w-60 rounded-lg" src={img9} alt="" />
            <img className="w-60 rounded-lg" src={img10} alt="" />
            <img className="w-60 rounded-lg" src={img1} alt="" />
            <img className="w-60 rounded-lg" src={img3} alt="" />
            </div>
            
          </Marquee>
        </div>
     </div>
      
      
    </div>
    </>
  );
};

export default Carousel;