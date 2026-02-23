import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () =>{
    return(
        <div className="min-h-screen bg-black">
          <HeroSection />
          <About />
        </div>
    )
}

export default Home;