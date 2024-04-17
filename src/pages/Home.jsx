import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SOLAZ--Home</title>
            </Helmet>
            {/* <div className='lg:w-[1192px] mx-auto'>
                <div className="hero mt-10" style={{ backgroundImage: 'url(https://ibb.co/BwWQcw8)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="space-y-4 lg:space-y-8">
                            <h1 className="mb-5 lg:text-5xl font-bold text-[#B58A09]">Welcome</h1>
                            <p className="mb-5 font-semibold lg:text-5xl">THE ART OF MEETING YOUR <br /> HIGHEST EXPECTATIONS</p>
                            <p className="text-gray-200 text-lg font-normal">Full Adventure Package, Room from 145usd / night</p>
                            <p className="lg:text-3xl font-normal hover:bg-black text-white">Explore Now</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
                <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>
                        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                            Track and improve the growth of your business. Send the right customers your way with this tool
                        </p>
                        <div className="flex space-x-4">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                                Get Started
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
                                Learn More
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </div>
            </section>  
        </div>
    );
};

export default Home;