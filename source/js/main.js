// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import './about';
import './price';
import './faq';

function initSwipers() {
  new Swiper('.juri__swiper', {
    loop: true,
    slidesPerView: 1,
    modules: [Navigation],
    breakpoints: {
      678: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    },
    navigation: {
      nextEl: '.juri__button--next',
      prevEl: '.juri__button--previous',
    },
  });

  new Swiper('.reviews__swiper', {
    loop: true,
    autoHeigh: true,
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
}
document.addEventListener('DOMContentLoaded', initSwipers);
