import Banner from "../../component/Banner/Banner"
import Carousel from "../../component/Carousel/Carousel"
import TourTeams from "../../component/TourTeams/TourTeams"
import Tools from "../../component/Tools/Tools"
import Question from "../../component/Question/Question";

const Home = () => {
  return (
    <div>
      <Banner />
      <Carousel />
      <TourTeams />
      <Tools />
      <Question />
    </div>
  );
};

export default Home;