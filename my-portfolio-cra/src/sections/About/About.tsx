import React from 'react';
import styles from './About.module.css';

// --- 1. Выносим весь текст в константы ---
const bioText = 'Начинающий фронтенд-разработчик из Иркутска, Россия.';
const descriptionText =
  'Я увлечен созданием современных, отзывчивых и функциональных веб-приложений. Этот сайт-визитка — один из примеров моих работ, созданный с использованием React, TypeScript и других передовых технологий.';

export const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.name}>Наделяев Артём</h1>

        {/* --- 2. Вставляем текст из констант --- */}
        <p className={styles.bio}>{bioText}</p>
        <p className={styles.description}>{descriptionText}</p>
      </div>
    </section>
  );
};
