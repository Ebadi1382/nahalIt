import React from "react";
import { Navigation, A11y, Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSwiper = () => {
  return (
    <div className="relative -z-50 container px-48 mx-auto">
      <Swiper
        className="mt-[1rem] relative -z-50 SW"
        modules={[Navigation, A11y, Autoplay, Pagination, Scrollbar]}
        pagination={true}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // breakpoints={{
        //   // when window width is >= 640px
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   450: {
        //     // width: 640,
        //     slidesPerView: 2,
        //   },
        //   700: {
        //     // width: 768,
        //     slidesPerView: 3,
        //   },
        //   900: {
        //     // width: 768,
        //     slidesPerView: 4,
        //   },
        //   1175: {
        //     // width: 768,
        //     slidesPerView: 5,
        //   },
        // }}
      >
        <SwiperSlide>
          <img src="https://nahalit.com/wp-content/uploads/2022/11/3.jpg" alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nahalit.com/wp-content/uploads/2022/11/sayt3.jpg" alt="slider_image_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://nahalit.com/wp-content/uploads/2022/11/slider4-scaled.jpg" alt="slider_image_3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
