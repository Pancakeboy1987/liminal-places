import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      
      
      <div className={styles.left}>
        <a href="#home" className={styles.logo}>Liminal.RU</a>
      </div>


      <nav className={styles.center}>
        <ul className={styles.menuLinks}>
          <li><Link className="home-link" to={`/`}>Главная</Link></li>
          <li><Link className="places-link" to={`/pages/list`}>Архив мест</Link></li>
          <li><Link className="about-link" to={`/pages/about`}>О проекте</Link></li>
        </ul>
      </nav>


      <div className={styles.right}>
  
      </div>

    </header>
  );
}