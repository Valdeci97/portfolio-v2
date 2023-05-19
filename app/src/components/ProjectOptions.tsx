import '../styles/project-options.css';

type ButtonProps = {
  project: { name: string; id: number };
  selectedId: number;
  selectProject: (id: number) => void;
};

export default function ProjectOptions(props: ButtonProps) {
  const isButtonSelected =
    props.selectedId === props.project.id ? 'selected-btn' : '';

  return (
    <button
      type="button"
      onClick={() => props.selectProject(props.project.id)}
      className={`project-opt-btn ${isButtonSelected}`}
    >
      {props.project.name}
    </button>
  );
}
