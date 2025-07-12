import React from 'react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

// Данные для карточек проектов
const projectData = [
  {
    title: 'Мой первый сайт-визитка (HTML/CSS)',
    description:
      'Один из моих самых первых проектов. Простая одностраничная визитка, созданная для отработки базовых навыков верстки на чистом HTML и CSS.',
    projectUrl: 'https://pointtohca.github.io/-/',
  },
  {
    title: 'Этот сайт-визитка (React/TS)',
    description:
      'Сайт, на котором вы находитесь. Разработан с использованием React, TypeScript и CSS Modules для демонстрации современных подходов.',
    projectUrl: 'https://pointtohca.github.io/my-portfolio-cra/',
    codeUrl: 'https://github.com/pointtohca/my-portfolio-cra', // Ссылка на код для второго проекта
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
            codeUrl={project.codeUrl} // Передаем codeUrl в компонент
          />
        ))}
      </div>
    </section>
  );
};
