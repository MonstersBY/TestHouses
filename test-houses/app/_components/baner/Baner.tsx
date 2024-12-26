'use client'
import React from "react";
import Image from "next/image";
import styles from "./baner.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';

const baner_text = [
  {
    main:'Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией',
    small:'Без головной боли и отклонений от сметы строительства'
  },
  {
    main:'Мы создаем надежные и современные дома для вашего уютного проживания',
    small:'В своей работе мы применяем современные технологии и специализированное строительное оборудование'
  },
  {
    main:'В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет',
    small:'Мы оперативно выполняем весь спектр строительных работ'
  },
]

const special_offer = [
  {
    main:'Оформление рассрочки по ставке от 15% годовых',
    img:''
  },
  {
    main:'Барнхаусы',
    img:'SO1.png'
  },
  {
    main:'Скидка до 5% при полной предоплате за проект',
    img:''
  },
  {
    main:'Таунхаусы',
    img:'SO2.png'
  },
]

const Baner = () => {
  return (
    <section className={styles.baner}>
      <div className={styles.baner_img}>
        <Image
          src="/baner-img.webp"
          alt="request"
          width={1920}
          height={1000}
        />
      </div>
      <div className={`container ${styles.baner_container}`}>
        <div className={styles.baner_carousel}>
          <Swiper
            modules={[EffectCreative, Pagination, Autoplay]}
            effect={'creative'}
            speed = {500}
            creativeEffect={{
              prev: {
                opacity: 0,
                translate: [0, 0, -5],
              },
              next: {
                opacity: 0,
                translate: [0, 0, -10],
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination = {{
              el: '.swiper-custom-pagination',
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {baner_text.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.baner_carousel_box}>
                  <div className="h1">{item.main}</div>
                  <div className="text1">{item.small}</div>
                  <a href="#" className="btn-normal" open-modal='popup-call'>Узнать стоимость</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.baner_links}>
          {special_offer.map((item, i) => (
            <a href="#" className={styles.baner_link} key={i}>
              {item.img != '' && 
                <Image
                  src={`/${item.img}`}
                  alt={item.img}
                  width={272}
                  height={272}
                />
              }
              <div className="h5">{item.main}</div>
              {item.img == '' && 
                <div className="btn-text">
                  <span>Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              }
            </a>
          ))}
        </div>
      </div>
      <div className="swiper-custom-pagination"/>
    </section>
  )
}

export {Baner}