import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      
      
      <div className={styles.left}>
        <a href="#home" className={styles.logo}>Liminal.RU</a>
      </div>


      <nav className={styles.center}>
        <ul className={styles.menuLinks}>
          <li><a href="#home">Главная</a></li>
          <li><a href="#archive">Архив мест</a></li>
          <li><a href="#about">О проекте</a></li>
        </ul>
      </nav>


      <div className={styles.right}>
        <button className={styles.actionBtn}>Манифест</button>
      </div>

    </header>
  );
}