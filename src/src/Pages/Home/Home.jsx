import About from "../../component/About/About";
import Carousel from "../../component/Carousel/Carousel";
import Faq from "../../component/FAQ/FAQ";
import Qustion from "../../component/Qustion/Qustion";
import Tools from "../../component/Tools/Tools";
import TourTeams from "../../component/TourTeams/TourTeams";


const Home = () => {
  return (
    <div>
      <TourTeams />
      <Carousel/>

      <Tools/>

      <About />

      <Faq />
      <Qustion/>
    </div>
  );
};

export default Home;