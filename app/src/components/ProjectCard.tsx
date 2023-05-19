import SVGIcon from './SVGIcon';
import ExternalLink from './ExternalLink';
import { icons } from '../utils/icons';
import { ProjectCardProps } from '../@types/ProjectCardProps';
import '../styles/project-card.css';

type Card = { project: ProjectCardProps };

export default function ProjectCard({ project }: Card) {
  const svgClass = 'project-card-svg';

  return (
    <div className="project-card-container">
      <div
        style={{ backgroundImage: `url(${project.screenshot})` }}
        className="project-card-image-container"
      />
      <div className="project-card-content-container">
        <div className="project-card-link-container">
          <div className="project-card-link-content">
            <SVGIcon
              iconProps={{ ...icons[0], url: project.repository }}
              componentClass={svgClass}
            />
            <ExternalLink link={project.deploy} componentClass={svgClass} />
          </div>
        </div>
        <span className="project-card-description">{project.description}</span>
        <ul className="project-card-tech-container">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-card-tech-item">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card-special-info">
          {project.demo && (
            <div className="project-info-container">
              <h2 className="project-demo-title">Conta demo</h2>
              <p className="project-demo-content">
                E-mail: {project.demo.email}
              </p>
              <p className="project-demo-content">
                Senha: {project.demo.password}
              </p>
            </div>
          )}
          {project.important && (
            <div className="project-info-container">
              <h2 className="project-important-title">Importante</h2>
              <p className="project-important-content">{project.important}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
