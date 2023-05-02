import { SVGProps } from '../@types/SVGProps';
import '../styles/svg-icon.css';

type SVGIconProps = {
  iconProps: SVGProps;
  componentClass: string;
};

export default function SVGIcon({ iconProps, componentClass }: SVGIconProps) {
  return (
    <a href={iconProps.url} target="_blank" rel="noopener noreferrer">
      <svg
        xmlns={iconProps.svg.xlmns}
        width={iconProps.svg.width}
        height={iconProps.svg.height}
        viewBox={iconProps.svg.viewBox}
        fill={iconProps.svg.fill}
        stroke={iconProps.svg.stroke}
        strokeWidth={iconProps.svg.strokeWidth}
        strokeLinecap={iconProps.svg.strokeLinecap}
        strokeLinejoin={iconProps.svg.strokeLinejoin}
        className={`${iconProps.svg.className} ${componentClass}`}
        role="image"
      >
        <title>{iconProps.svg.title}</title>
        {iconProps.svg.rect?.map((r, i) => (
          <rect
            key={`${r.height}-${r.width}-${r.rx}-${i}`}
            width={r.width}
            height={r.height}
            x={r.x}
            y={r.y}
            rx={r.rx}
            ry={r.ry}
          />
        ))}
        {iconProps.svg.paths.map((path, i) => (
          <path key={`${path}-${i}`} d={path}></path>
        ))}
        {iconProps.svg.line?.map((l, i) => (
          <line
            key={`${l.x1}-${l.x2}-${i}`}
            x1={l.x1}
            x2={l.x2}
            y1={l.y1}
            y2={l.y2}
          />
        ))}
        {iconProps.svg.circle?.map((circ, i) => (
          <circle
            key={`${circ.cx}-${circ.cy}-${i}`}
            cx={circ.cx}
            cy={circ.cy}
            r={circ.r}
          />
        ))}
      </svg>
    </a>
  );
}
