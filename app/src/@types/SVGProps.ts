type StrokeLinecapProps = 'butt' | 'round' | 'square' | 'inherit' | undefined;
type StrokeLinejoinProps = 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
type RectProps = {
  width?: string;
  height?: string;
  x?: string;
  y?: string;
  rx?: string;
  ry?: string;
};

type LineProps = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
};

type CircleProps = { cx: string; cy: string; r: string };

export type SVGProps = {
  url: string;
  svg: {
    xlmns: string;
    width: string;
    height: string;
    viewBox: string;
    fill: string;
    stroke: string;
    strokeWidth: string;
    strokeLinecap: StrokeLinecapProps;
    strokeLinejoin: StrokeLinejoinProps;
    className: string;
    title: string;
    rect?: RectProps[];
    paths: string[];
    line?: LineProps[];
    circle?: CircleProps[];
  };
};
