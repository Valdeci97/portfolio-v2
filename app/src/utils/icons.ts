import { SVGProps } from '../@types/SVGProps';

const SVG_XLMNS_URL = 'http://www.w3.org/2000/svg';
const SVG_WIDTH_HEIGHT = '24';
const SVG_VIEW_BOX = '0 0 24 24';
const SVG_FILL_NONE = 'none';
const SVG_STROKE = '#000';
const SVG_STROKE_WIDTH = '2';
const SVG_LINE_CAP_JOIN = 'round';

export const icons: SVGProps[] = [
  {
    url: 'https://github.com/Valdeci97',
    svg: {
      xlmns: SVG_XLMNS_URL,
      width: SVG_WIDTH_HEIGHT,
      height: SVG_WIDTH_HEIGHT,
      viewBox: SVG_VIEW_BOX,
      fill: SVG_FILL_NONE,
      stroke: SVG_STROKE,
      strokeWidth: SVG_STROKE_WIDTH,
      strokeLinecap: SVG_LINE_CAP_JOIN,
      strokeLinejoin: SVG_LINE_CAP_JOIN,
      className: 'lucide lucide-github',
      title: 'Github',
      paths: [
        'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
        'M9 18c-4.51 2-5-2-7-2',
      ],
    },
  },
  {
    url: 'https://www.instagram.com/valdeci97/',
    svg: {
      xlmns: SVG_XLMNS_URL,
      width: SVG_WIDTH_HEIGHT,
      height: SVG_WIDTH_HEIGHT,
      viewBox: SVG_VIEW_BOX,
      fill: SVG_FILL_NONE,
      stroke: SVG_STROKE,
      strokeWidth: SVG_STROKE_WIDTH,
      strokeLinecap: SVG_LINE_CAP_JOIN,
      strokeLinejoin: SVG_LINE_CAP_JOIN,
      className: 'lucide lucide-instagram',
      title: 'Instagram',
      rect: [{ width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5' }],
      paths: ['M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'],
      line: [{ x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5' }],
    },
  },
  {
    url: 'https://www.linkedin.com/in/valdeci97/',
    svg: {
      xlmns: SVG_XLMNS_URL,
      width: SVG_WIDTH_HEIGHT,
      height: SVG_WIDTH_HEIGHT,
      viewBox: SVG_VIEW_BOX,
      fill: SVG_FILL_NONE,
      stroke: SVG_STROKE,
      strokeWidth: SVG_STROKE_WIDTH,
      strokeLinecap: SVG_LINE_CAP_JOIN,
      strokeLinejoin: SVG_LINE_CAP_JOIN,
      className: 'lucide lucide-linkedin',
      title: 'Linkedin',
      rect: [{ width: '4', height: '12', x: '2', y: '9' }],
      paths: [
        'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      ],
      circle: [{ cx: '4', cy: '4', r: '2' }],
    },
  },
];
