import Banner from "../../component/Banner/Banner"
import Carousel from "../../component/Carousel/Carousel"
import TourTeams from "../../component/TourTeams/TourTeams"
import Tools from "../../component/Tools/Tools"
import About from "../../component/About/About";
import CoreValue from "../../component/CoreValue/CoreValue";
import Feedback from "../../component/Feedback/Feedback";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white">
      <CoreValue></CoreValue>
      <Banner />
      <TourTeams />
      <Tools />
      <Carousel />
      <About></About>
      <Feedback />
    </div>
  );
};

export default Home;
