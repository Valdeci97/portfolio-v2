import todoApiDocs from '../assets/todo-api-docs.png';
import { ProjectProps } from '../@types/ProjectProps';

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: 'Delivery App',
    deploy: 'https://app--delivery-client--cwcj6y6yvsp6.code.run/login',
    repository: 'https://github.com/Valdeci97/delivery-app',
    screenshot: todoApiDocs,
    screenshotAlt: 'Tela inicial do projeto Trybe, app de delivery',
    description:
      'Projeto final em grupo do módulo de backend na Trybe. Esse app consiste em um delivery de bebidas alcoólicas, podendo cadastrar novos clientes ou vendedores. Como um projeto full stack tivemos de desenvolver desde o banco de dados até a finalização do frontend e seus testes automatizados.',
    technologies: [
      'Node.js',
      'javascript',
      'React',
      'MySQL',
      'Sequelize ORM',
      'Mocha',
      'RTL',
      'Docker',
    ],
  },
  {
    id: 2,
    name: 'Todo API',
    deploy: 'https://todo-api-dev.onrender.com/api-docs/',
    repository: 'https://github.com/Valdeci97/todo-api',
    screenshot: todoApiDocs,
    screenshotAlt: 'Documentação do projeto todo api',
    description:
      'API para gerenciamento de usuários e tarefas do dia a dia. Listagem de tarefas com base em filtros de datas e tarefas atrasadas.',
    technologies: ['Node.js', 'Typescript', 'MongoDb', 'Jest', 'Docker'],
    demo: { email: 'Teste', password: 'supersenha' },
    important:
      'Essa Api está hospedada de forma gratuita. Isso implica em seu desligamento de tempos em tempos, o primeiro acesso pode demorar um pouco por conta disso.',
  },
];
