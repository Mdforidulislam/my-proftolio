import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image from '../../assets/IMG20231209140805-removebg-preview (3).png'
const Slider = () => {
  return (
    <div  className="h-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
      {
          [1,2,4,5,3].map(item => 
            <SwiperSlide key={item} className="w-[300px] h-[300px] bg-[#131c31]">
            <img src={image} alt="" />
            <h1>slider</h1>
            <h1>slider</h1>
            <h1>slider</h1>
            <h1>slider</h1>
            </SwiperSlide>
        )
      }
      
      </Swiper>
    </div>
  );
};

export default Slider;
