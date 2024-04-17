import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const Root = () => {
    return (
        <div>
            <div className="lg:w-[1192px] mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default Root;