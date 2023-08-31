import Container from "../../Shared/Container/Container";
import About from "../../component/About/About";
import Carousel from "../../component/Carousel/Carousel";
import Faq from "../../component/FAQ/FAQ";
import Tools from "../../component/Tools/Tools";
import TourTeams from "../../component/TourTeams/TourTeams";


const Home = () => {
  return (
    <div>
      <Container>
      <TourTeams />
      <Carousel/>

      <Tools/>

      <About />

      <Faq />
   
      </Container>
    </div>
  );
};

export default Home;