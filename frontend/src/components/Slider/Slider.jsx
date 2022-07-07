import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({
  datas = [],
  spaceBetween = 30,
  centeredSlides = true,
  loop = true,
  delay = 2500,
}) => {
  return (
    <Swiper
      style={{ height: "100%" }}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      loop={loop}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      // Autoplay
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{ height: "100%" }} className="bg-slate-700">
        Slide 1
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
