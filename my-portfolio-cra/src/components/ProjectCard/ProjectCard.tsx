import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectUrl }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        Посмотреть проект
      </a>
    </div>
  );
};
