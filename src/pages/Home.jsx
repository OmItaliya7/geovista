import HeroSection from "../components/UI/HeroSection";
import { lazy, Suspense } from "react";
// import About from "./About";
const About = lazy(() => import("./About"));


const Home = () =>{
    return(
        <div className="min-h-screen bg-black">
          <HeroSection />
          <Suspense fallback={<div className="text-white text-center mt-20">Loading About...</div>}>
            <About />
          </Suspense>
        </div>
    )
}

export default Home;