import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
const Slider = () => {
    return (
        <div className='mt-10'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/R0Bf0CW/premier-Suite-header.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/xzhmq5Q/0x0.webp" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/wrWjn4T/325751471.jpg" className="relative md:h-[300px]  sm:h-[500px] h-[300px] lg:w-[1192px]  w-[800px] bg-gray-400 object-cover" alt="hero navigate ui" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;