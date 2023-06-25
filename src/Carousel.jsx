import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="swiper-container">
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        centeredSlides={true}
        style={{ height: "100%" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0256/3683/1318/files/Table_Mats_Desktop_Banner_revise.jpg?v=1686812416"
            alt=""
            className="swiper-slide-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0256/3683/1318/files/Sofa_Cover_Desktop_Banner_revise.jpg?v=1686812500"
            alt=""
            className="swiper-slide-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0256/3683/1318/files/Bed_Covers_Desktop_Banner_revise.jpg?v=1686812548"
            alt=""
            className="swiper-slide-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
