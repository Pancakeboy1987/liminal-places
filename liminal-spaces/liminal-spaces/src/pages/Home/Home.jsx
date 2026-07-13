// src/pages/Home/Home.jsx
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

// стили Swiper (базовые и для эффектов)
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import styles from './Home.module.css';
import { placesData } from '../../data/places';

import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
        
        
        <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.sectionTitle}>
          Эстетика пустоты: <br />
          <span>пограничные пространства России</span>
        </h1>


        <div className={styles.carouselContainer}>
          <Swiper
         
            modules={[EffectCoverflow, Navigation]}
            
        
            navigation={true}
            
       
            centeredSlides={true}
            
            
            loop={true}
            
            
            slidesPerView={'auto'}
            

            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,        // Угол поворота боковых слайдов 
              stretch: -40,     // Расстояние между слайдами 
              depth: 150,       // Глубина (чем больше, тем дальше боковые слайды уходят назад)
              modifier: 1,      // Множитель эффекта
              slideShadows: false,
            }}
            className={styles.swiperContainer}
          >
            {placesData.map((place) => (
              <SwiperSlide key={place.id} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={place.image} alt={place.title} />
                    <div className={styles.tag}>{place.tag}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{place.title}</h3>
                    <p>{place.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>


      <section className={styles.promoSection}>
        <div className={styles.promoContent}>
          <h2>Исследуй то, что скрыто между кадрами</h2>
          <button className={styles.promoBtn}>Читать манифест</button>
        </div>
      </section>
    </div>
  );
}