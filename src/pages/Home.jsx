import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SOLAZ--Home</title>
            </Helmet>
            <div className='lg:w-[1192px] mx-auto'>
                I am at home
            </div>
        </div>
    );
};

export default Home;