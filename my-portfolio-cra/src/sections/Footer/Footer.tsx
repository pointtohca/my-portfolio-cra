import React from 'react';
// Исправляем FaTelegramPlane на FaTelegram
import { FaTelegram, FaVk, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const socialLinks = [
  {
    href: 'https://t.me/Ggdevbv',
    // Исправляем и здесь
    icon: <FaTelegram />,
    label: 'Telegram',
  },
  {
    href: 'https://vk.com/saxarok_293',
    icon: <FaVk />,
    label: 'VK',
  },
  {
    href: 'https://github.com/pointtohca/my-portfolio-cra',
    icon: <FaGithub />,
    label: 'GitHub',
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>© {currentYear} Наделяев Артём. Все права защищены.</p>
    </footer>
  );
};
