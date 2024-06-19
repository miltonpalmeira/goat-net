import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/images/aaaa.jpeg"
import img2 from "../assets/images/bbbb.jpg"
import img3 from "../assets/images/cccc.jpg"


const Carousel = () => {

    const data = [
        {id: 1, image: img1},
        {id: 2, image: img2},
        {id: 3, image: img3},
    ]
    return (
        <div className='flex h-96 px-4 py-4 rounded-md'>
            <Swiper slidesPerView={1} pagination={{ clickable: true}} navigation autoplay={{delay: 2000}}>
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className="Slide-item rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;