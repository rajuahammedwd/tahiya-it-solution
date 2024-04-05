import Marquees from "../../components/Marquee/Marquees";
import AllProducts from "../../components/Products/AllProducts";
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
            <AllProducts/>
        </div>
    );
};

export default Home;