//some-inner-component.jsx
import React, { useRef, useState } from "react";
// import Swiper from 'swiper/bundle'; // 全ての機能が入っている（一括指定）
// 必要なモジュールをimportする（個別に指定する）いえ
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "../swiper/react";
import { Autoplay, Pagination } from "../swiper";

import "../swiper/swiper.scss"; // core Swiper
import "../swiper/modules/pagination/pagination.scss" // pagination module
import "../swiper/modules/navigation/navigation.scss" // navigation module
// import "../swiper/css/navigation";
// import "../swiper/css/pagination";

// Swiper stylesをインポート
import "swiper/scss/bundle" // すべてのmodules styleを含むSwiper stylesをインポート

import "./styles.css";


export default () => {
  const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
  });
  return (
      <Swiper
      //swiper modulesをインストール
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        Scrollbar={{ draggable: true }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
        // Events
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <span
      </Swiper>
  );
};
