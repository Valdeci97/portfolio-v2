import deliveryApp from '../assets/delivery-app.png';
import todoApiDocs from '../assets/todo-api-docs-corte.png';
import deliveryApiDocs from '../assets/delivery-api-docs.png';
import droneFeederDocs from '../assets/drone-feeder-api-docs.png';
import { ProjectProps } from '../@types/ProjectProps';

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: 'Delivery App',
    deploy: 'https://app--delivery-client--cwcj6y6yvsp6.code.run/login',
    repository: 'https://github.com/Valdeci97/delivery-app',
    screenshot: deliveryApp,
    screenshotAlt: 'Tela inicial do projeto Trybe, app de delivery',
    description:
      'Frontend do projeto em grupo de conclusão do módulo de backend na Trybe. Esse app consiste em um e-commerce de bebidas alcoólicas, podendo cadastrar novos clientes ou vendedores. Como um projeto full stack tivemos de modelar o banco de dados, fazer back e frontend, e seus testes.',
    technologies: [
      'Javascript',
      'React',
      'Styled components',
      'Nginx',
      'RTL/Jest',
      'Docker',
    ],
  },
  {
    id: 2,
    name: 'Delivery API',
    deploy: 'https://app--delivery-api--cwcj6y6yvsp6.code.run/api/docs/',
    repository: 'https://github.com/Valdeci97/delivery-app',
    screenshot: deliveryApiDocs,
    screenshotAlt: 'Documentação do projeto delivery api',
    description:
      'Backend do projeto em grupo de conclusão do módulo de backend na Trybe. Esse app consiste em um e-commerce de bebidas alcoólicas, podendo cadastrar novos clientes ou vendedores. Como um projeto full stack tivemos de modelar o banco de dados, fazer back e frontend, e seus testes.',
    technologies: [
      'Node.js',
      'Javascript',
      'Express.js',
      'MySQL',
      'Sequelize ORM',
      'Mocha',
      'Docker',
    ],
  },
  {
    id: 3,
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
  {
    id: 4,
    name: 'Drone feeder',
    deploy: 'https://odyeqmabpr.us16.qoddiapp.com/swagger-ui/#',
    repository: 'https://github.com/Valdeci97/droneFeeder',
    screenshot: droneFeederDocs,
    screenshotAlt:
      'Documentação do projeto final da aceleração java - drone feeder',
    description:
      'Projeto em grupo de conclusão de aceleração em java. Drone Feeder é uma aplicação REST de monitoramento de entregas feita por drones na qual um sistema Front-end pode exibir algumas informações tais como latitude, longitude, data, horário da postagem, horário de retirada do pacote e vídeo com a gravação do momento da entrega. Essas informações são armazenadas no banco de dados MySQL.',
    technologies: ['Java', 'Spring boot', 'MySQL', 'JUnit', 'Docker'],
  },
];
