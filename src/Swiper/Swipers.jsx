import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipers() {
  let navigator = useNavigate();
  const routeChange = () => {
    let newPath = "/products";
    navigator(newPath);
  };

  return (
    <div>
      <Swiper
        onClick={routeChange}
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
          <img src="/Pics/IMG_4215.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1147.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1335.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4198.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4195.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4192.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1396-Edit.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_1443-Edit.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pics/IMG_4206.jpg" alt="" className="swiper-pic" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
