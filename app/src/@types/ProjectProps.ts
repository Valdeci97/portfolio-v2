export type ProjectProps = {
  id: number;
  name: string;
  deploy: string;
  repository: string;
  screenshot: string;
  screenshotAlt: string;
  description: string;
  technologies: string[];
  demo?: { email: string; password: string };
  important?: string;
};
