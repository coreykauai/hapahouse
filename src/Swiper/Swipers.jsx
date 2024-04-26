import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipers() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Pics/IMG_4215.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1147.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1335.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4198.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4195.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4192.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1396-Edit.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1443-Edit.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4206.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
