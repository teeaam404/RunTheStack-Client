
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
import Container from "../../Shared/Container/Container"

const Carousel = () => {
  return (
    <>
    <div className="lg:mx-44">
      <Container>
        <div className="my-10">
          <h2 className="text-center text-3xl font-bold text-gray-500">Thousands of organizations around the globe use Stack Overflow for Teams</h2>
        </div>
        <div className="mx-auto my-auto mb-5">
          <Marquee>
            <img className="w-60" src={img2} alt="" />
            <img className="w-60" src={img5} alt="" />
            <img className="w-60" src={img6} alt="" />
            <img className="w-60" src={img7} alt="" />
            <img className="w-60" src={img8} alt="" />
            <img className="w-60" src={img9} alt="" />
            <img className="w-60" src={img10} alt="" />
            <img className="w-60" src={img1} alt="" />
            <img className="w-60" src={img3} alt="" />
          </Marquee>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Carousel;