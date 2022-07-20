import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper";

const Slider = ({
  datas = [],
  spaceBetween = 30,
  centeredSlides = true,
  loop = true,
  delay = 2500,
  swiperClass = "",
  slidesPerView = 1,
  activeThumb,
}) => {
  return (
    <>
      <Swiper
        style={{ height: "100%" }}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        thumbs={{ swiper: activeThumb }}
        loop={loop}
        watchSlidesProgress
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Thumbs]}
        className={swiperClass}
      >
        {datas.map((data, index) => (
          <SwiperSlide style={{ height: "100%" }} key={index}>
            <div className="w-[100%] h-[100%] rounded-lg overflow-hidden">
              <img
                className="object-fill w-[100%] h-[100%]"
                src={data.url}
                alt={"product"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
