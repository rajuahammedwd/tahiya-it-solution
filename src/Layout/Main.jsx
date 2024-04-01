import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import MiniNav from "../Pages/Shared/Navbar/MiniNav";



const Main = () => {
    return (
        <div>
            <MiniNav/>
            <Navbar/>
           <Outlet/> 
        </div>
    );
};

export default Main;