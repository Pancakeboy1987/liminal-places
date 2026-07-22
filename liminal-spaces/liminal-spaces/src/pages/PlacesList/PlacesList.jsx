import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './PlacesList.module.css';
import { placesData } from '../../data/places';

export default function PlaceList() {
  return (
    <div className={styles.pageWrapper}>
      
      <Header />

      <main className={styles.mainContent}>

        <div className={styles.sectionTitle}>
          <h1>Архив мест</h1>
          <h2>Пограничные зоны в объективе</h2>
        </div>


        <div className={styles.gridContainer}>
          {placesData.map((place) => (
            <Link to={`/place/${place.id}`} key={place.id} className={styles.cardLink}>
              <div className={styles.card}>
                

                <div className={styles.thumbnailWrapper}>
                  <img src={place.image} alt={place.title} className={styles.thumbnail} />
                  <span className={styles.tagBadge}>{place.tag}</span>
                </div>

                <div className={styles.cardDetails}>
                  <h3 className={styles.cardTitle}>{place.title}</h3>
                  <p className={styles.cardDescription}>{place.description}</p>
                  
                  <div className={styles.cardMeta}>
                    <span>Исследовано</span>
                    <span className={styles.dot}>•</span>
                    <span>Войти в локацию →</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
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



