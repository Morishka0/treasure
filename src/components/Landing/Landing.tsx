import classes from './Landing.module.scss';
import React from 'react';
import Intro from '../Intro/Intro';
import IntroImage1 from './images/intro-image1.png';
import IntroImage2 from './images/intro-image2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper';

const Landing = () => {
  const images = [IntroImage1, IntroImage2];
  const swiperSettings = {
    modules: [Autoplay],
    loop: true,
    sliderPerView: 1,
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    allowTouchMove: false,
  };
  const introSlides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <Intro
        title="treasure"
        slogan="BEAUTY IN SIMPLICITY"
        stance={index}
        image={image}
      />
    </SwiperSlide>
  ));

  return (
    <div className={classes.landing}>
      <div className={classes.landing__intro}>
        <Swiper slidesPerView={1} {...swiperSettings}>
          {introSlides}
        </Swiper>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Landing;
