import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './PlaceDetail.module.css';
import { placesData } from '../../data/places';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


export default function PlaceDetail() {
  const { id } = useParams();
  const place = placesData.find((item) => item.id === id);

  if (!place) {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.notFoundContainer}>
          <h1>Объект не найден</h1>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      
     
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.centerContainer}>
          <div className={styles.titleHeader}>
            <span className={styles.tagBadge}>{place.tag}</span>
            <h1 className={styles.title}>{place.title}</h1>
          </div>

        
          <div className={styles.imageFrame}>
            <img src={place.image} alt={place.title} className={styles.placeImage} />
          </div>


          <div className={styles.infoBlock}>
            <p className={styles.description}>{place.description}</p>
            <p className={styles.fullStory}>{place.fullStory}</p>
            
            <Link to={`/`} className={styles.backLink}> 
              ← Вернуться к списку всех мест
            </Link>
          </div>

        </div>
      </main>

    </div>
  );
}