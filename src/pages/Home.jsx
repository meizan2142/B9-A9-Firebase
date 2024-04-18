import { Helmet } from "react-helmet-async";
import EventsPromo from "../Component/EventsPromo";
// import Slider from "../Component/Slider";
import { useContext } from "react";
import { EstateContext } from "../Context/ContextComponent";
import EstateInfo from "../Component/EstateInfo";
import Slider from "../Component/Slider";
import { NavLink } from "react-router-dom";

const Home = () => {
    const { estateDetails } = useContext(EstateContext)
    return (    
        <div className="lg:w-[1192px] mx-auto space-y-14">
            <Helmet>
                <title>SOLAZ--Home</title>
            </Helmet>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <NavLink className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 col-span-1 gap-6" to='/userprofile'>
                    {
                        estateDetails.length &&
                        estateDetails.map((estate, key) => <EstateInfo estate={estate} key={key}></EstateInfo>)
                    }
                </NavLink>
            </section>
            <section>
                <EventsPromo></EventsPromo>
            </section>
        </div>
    );
};

export default Home;