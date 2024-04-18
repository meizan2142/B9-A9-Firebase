const EventsPromo = () => {
    return (
        <div className="bg-[#3c3c34] lg:h-[80vh] rounded-lg mt-12 lg:mt-24">
            <div className='lg:w-[1192px] mx-auto text-center '>
                <div className="lg:pt-32 lg:space-y-10 lg:p-0 p-4">
                    <div className="space-y-3">
                        <h1 className="text-white font-semibold text-xl">EVENTS & PROMOTIONS</h1>
                        <p className="text-gray-200">When you host a party or family reunion, the special celebrations let <br /> you strengthen bonds with.</p>
                    </div>
                    <div className=" mx-auto my-20 flex flex-col items-center justify-center md:flex-row">
                        <div className="group relative  sm:w-[350px]">
                            <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg    bg-black/70" src="https://i.ibb.co/dPBfJ0p/bg-summer.jpg" alt="card navigate ui" />
                            <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                            <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                        </div>
                        <div className="space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                            <div className="space-y-3">
                                <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">AWESOME HOT SUMMER</h2>
                                <h1 className="text-[#B58A09] text-2xl">30% Off Summer Trip</h1>
                                <p></p>
                            </div>
                            <p className="text-[#858585]">Only $900 for 3 Days in Solaz Villa. Free at Swimming Pool, Buffet, Adventure Packages, Spa and Room Services. Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.</p>
                            <div><button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Explore Now</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPromo;