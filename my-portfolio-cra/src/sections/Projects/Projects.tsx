import React from 'react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const projectData = [
  {
    title: 'Мой первый сайт (HTML/CSS)',
    description:
      'Один из моих самых первых проектов. Простой одностраничный сайт, созданный  для отработки базовых навыков верстки на чистом HTML и CSS.',
    projectUrl: 'https://pointtohca.github.io/-/',
  },
  {
    title: 'Этот сайт-визитка (React/TS)',
    description:
      'Сайт, на котором вы находитесь. Разработан с использованием React, TypeScript и CSS Modules для демонстрации современных подходов.',
    projectUrl: '#', // Сюда позже добавим ссылку на GitHub
  },
];

export const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Мои проекты</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};
