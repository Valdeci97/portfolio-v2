import { useState } from 'react';
import ProjectOptions from '../components/ProjectOptions';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import '../styles/projects.css';

export default function Projects() {
  const [id, setId] = useState<number>(1);
  const AVOID_ARRAY_INDEX_OUT_OF_BOUNDS_EXCEPTION = id - 1;

  function selectProject(id: number): void {
    setId(id);
  }

  return (
    <section id="projects" className="projects-page-container">
      <h2 className="projects-title">Projetos</h2>
      <div className="project-content-container">
        <div className="select-project-container">
          {projects.map((project) => (
            <ProjectOptions
              key={project.name}
              project={{ name: project.name, id: project.id }}
              selectProject={selectProject}
              selectedId={id}
            />
          ))}
        </div>
        <ProjectCard
          project={projects[AVOID_ARRAY_INDEX_OUT_OF_BOUNDS_EXCEPTION]}
        />
      </div>
    </section>
  );
}
