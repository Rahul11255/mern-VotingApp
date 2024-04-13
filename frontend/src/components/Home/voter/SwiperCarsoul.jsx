import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";
import slide4 from "../../images/slide-4.jpg";
import slide5 from "../../images/slide-5.jpg";
import slide6 from "../../images/slide-6.jpg";
import slide7 from "../../images/slide-7.jpg";

const SwiperCarsoul = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };

  return (
    <Swiper
    pagination={pagination}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay, Navigation, Pagination]}
    loop={true}
    className="mySwiper"
  >
    <SwiperSlide>
      <img loading="lazy" src={slide1} alt="slide-1" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide2} alt="slide-2" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide3} alt="slide-3" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide4} alt="slide-4" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide5} alt="slide-5" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide6} alt="slide-6" />
    </SwiperSlide>
    <SwiperSlide>
      <img loading="lazy" src={slide7} alt="slide-7" />
    </SwiperSlide>
  </Swiper>
  )
}

export default SwiperCarsoul