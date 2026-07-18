import React from 'react';
import styles from './About.module.css';
import Header from '../../components/Header/Header';


export default function About() {
  return (
    <div className={styles.pageWrapper}>
       <Header />

<div className={styles.mainContent}>
  <div className={styles.sectionTitle}>
  <h1 >
    Эстетика пустоты: 
    </h1>
    <h2>
      Пограничные пространства России
  </h2>
  </div>
  </div>
  <div className={styles.mainText}>
    <h3>Liminal - cлово, пришедшее к нам из Латыни. </h3>
    <h4>Лиминальные пространства - безлюдные, пустые места, не имеющие контекст без человека.
    Это хорошо знакомые нам места, которые  кажутся неестественными и странными из-за отсутствия людей.
    Данный сайт - собрание таких мест нашей страны, которые вы можете посетить.</h4>

  </div>

      
    </div>
  )
}
