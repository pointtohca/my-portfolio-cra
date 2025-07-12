import React from 'react';
import styles from './ProjectCard.module.css';

// Вот интерфейс, который нужно исправить
interface ProjectCardProps {
  title: string;
  description: string;
  projectUrl: string;
  codeUrl?: string; // Эта строка добавляет поддержку codeUrl
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectUrl,
  codeUrl,
}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.links}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          Посмотреть проект
        </a>
        {/* Этот блок кода отображает ссылку, если codeUrl существует */}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            Посмотреть код
          </a>
        )}
      </div>
    </div>
  );
};
