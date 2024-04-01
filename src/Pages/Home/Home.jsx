import Marquees from "../../components/Marquee/Marquees";
import MiniSlider from "../../components/Slider/MiniSlider/MiniSlider";
import Slider from "../../components/Slider/Slider";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Marquees/>
            <div className="my-5">
            <Slider/>
            </div>
            <MiniSlider/>
            <Category/>
        </div>
    );
};

export default Home;