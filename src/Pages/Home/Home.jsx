import Banner from "../../component/Banner/Banner"
import Carousel from "../../component/Carousel/Carousel"
import TourTeams from "../../component/TourTeams/TourTeams"
import Tools from "../../component/Tools/Tools"
import About from "../../component/About/About";
import CoreValue from "../../component/CoreValue/CoreValue";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white">
      <CoreValue></CoreValue>
      <Banner />
      <TourTeams />
      <Tools />
      <Carousel />
      
      <About></About>
    </div>
  );
};

export default Home;
