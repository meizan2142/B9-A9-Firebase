import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Root = () => {
    return (
        <div className='lg:w-[1192px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};
export default Root;