import Banner from "../../component/Banner/Banner"
import Carousel from "../../component/Carousel/Carousel"
import TourTeams from "../../component/TourTeams/TourTeams"
import Tools from "../../component/Tools/Tools"
import About from "../../component/About/About";
import CoreValue from "../../component/CoreValue/CoreValue";
<<<<<<< HEAD
=======
import Feedback from "../../component/Feedback/Feedback";
>>>>>>> a2f5330ff34b0e8d3dbe34176d3501eab02db077


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white">
      <CoreValue></CoreValue>
      <Banner />
      <TourTeams />
      <Tools />
      <Carousel />
<<<<<<< HEAD
      
      <About></About>
=======
      <About></About>
      <Feedback />
>>>>>>> a2f5330ff34b0e8d3dbe34176d3501eab02db077
    </div>
  );
};

export default Home;
