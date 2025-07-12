import React from 'react';
// 1. Импортируем нужные иконки из библиотеки
import { FaTelegramPlane, FaVk, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

// 2. Создаем массив с данными для социальных сетей для чистоты кода
const socialLinks = [
  {
    href: 'https://t.me/Ggdevbv',
    icon: <FaTelegramPlane />,
    label: 'Telegram',
  },
  {
    href: 'https://vk.com/saxarok_293',
    icon: <FaVk />,
    label: 'VK',
  },
  {
    href: '#', // Сюда позже добавим ссылку на GitHub
    icon: <FaGithub />,
    label: 'GitHub',
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* 3. Проходим по массиву и рендерим каждую ссылку с иконкой */}
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label} // Важно для доступности (для скрин-ридеров)
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>© {currentYear} Наделяев Артём. Все права защищены.</p>
    </footer>
  );
};
