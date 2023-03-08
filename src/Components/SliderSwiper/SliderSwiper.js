import React from "react";
import { Navigation, A11y, Autoplay, Pagination, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSwiper = () => {
  return (
    <div className="relative -z-50 container px-48 mx-auto">
      <Swiper
        className="mt-[1rem]"
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCards]}
        navigation
        pagination={{ clickable: true }}
        effect="cards"
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src="https://nahalit.com/wp-content/uploads/2022/11/3.jpg"
            alt="slider_image"
            width={1500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src="https://nahalit.com/wp-content/uploads/2022/11/sayt3.jpg"
            alt="slider_image_2"
            width={1500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src="https://nahalit.com/wp-content/uploads/2022/11/slider4-scaled.jpg"
            alt="slider_image_3"
            width={1500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
