import React from 'react';
// import { FaTelegramPlane, FaVk, FaGithub } from 'react-icons/fa'; // Временно убираем
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://t.me/Ggdevbv" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        <a href="https://vk.com/saxarok_293" target="_blank" rel="noopener noreferrer">
          VK
        </a>
        <a
          href="https://github.com/pointtohca/my-portfolio-cra"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className={styles.copyright}>© {currentYear} Наделяев Артём. Все права защищены.</p>
    </footer>
  );
};
