'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';
import styles from './SwiperSlider.module.css';

const SwiperSlider = () => {
  const images = [
    "/icons/man.jpg",
    "/icons/egale.jpg",
    "/icons/grapes.jpg",
    "/icons/man.jpg",
    "/icons/egale.jpg",
    "/icons/grapes.jpg",
    "/icons/man.jpg",
    "/icons/egale.jpg",
    "/icons/grapes.jpg",
  ];

  const [spaceBetween, setSpaceBetween] = useState(-300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 300 && window.innerWidth <= 1000) {
        setSpaceBetween(-200);
      } else {
        setSpaceBetween(-300);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1.2}
      spaceBetween={spaceBetween}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className={styles.mySwiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={500}
              height={1500}
              className="rounded-xl h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;



