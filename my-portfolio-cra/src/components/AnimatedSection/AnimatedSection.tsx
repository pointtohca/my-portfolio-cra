import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode; // Принимаем любой дочерний элемент React
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    // Опции
    triggerOnce: true, // Анимация сработает только один раз
    threshold: 0.1, // Анимация начнется, когда 10% элемента будет видно
  });

  return (
    <div ref={ref} className={`${styles.section} ${inView ? styles.visible : ''}`}>
      {children}
    </div>
  );
};
