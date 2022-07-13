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
  onSwiper,
  isThumbSwiper = false,
}) => {
  return (
    <>
      {!isThumbSwiper ? (
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
          // Autoplay
          modules={[Pagination, Navigation, Thumbs]}
          className={swiperClass}
        >
          {datas.map((data) => (
            <SwiperSlide
              style={{ height: "100%" }}
              key={data.public_id}
              className="bg-slate-700"
            >
              <img src={data.url} alt={"product"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}

      {isThumbSwiper ? (
        <Swiper
          style={{ height: "100%" }}
          spaceBetween={spaceBetween}
          onSwiper={onSwiper ? () => onSwiper : null}
          loop={loop}
          pagination={{
            clickable: true,
          }}
          slidesPerView={slidesPerView}
          navigation={true}
          modules={[Thumbs]}
          className={swiperClass}
        >
          {datas.map((data) => (
            <SwiperSlide
              style={{ height: "100%" }}
              key={data.public_id}
              className="bg-slate-700"
            >
              <img src={data.url} alt={"product"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </>
  );
};

// {isThumbSwiper ? "" : null}
export default Slider;
