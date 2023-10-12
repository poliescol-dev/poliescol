"use client";

import React, { useState } from "react";
import styles from "./cardCarousel.module.scss";
import { PRODUCT_LINES } from "constants/products";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/ProductCard";
import { ProductLineIds } from "types";
import "./cardCarousel.scss";

interface CardCarouselProps {
  handleClickCard: (productLineId: ProductLineIds) => void;
}

const CardCarousel = ({ handleClickCard }: CardCarouselProps) => {
  const [swiperInstance, setSwiperInstance] = useState<any>();
  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={2}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        {PRODUCT_LINES.map(({ backgroundImg, hasDeWord, id, label }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ProductCard
                onClick={handleClickCard}
                productLineId={id}
                backgroundImg={backgroundImg}
                hasDeWord={hasDeWord}
                productLabel={label}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
