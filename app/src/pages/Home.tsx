import '../styles/home.css';

// style={{ height: '30%' }}

export default function Home() {
  return (
    <section className="home-container">
      <span className="home-introduction">Olá! Eu sou o Valdeci de Moura.</span>

      <h2 className="home-host-name">Desenvolvedor web full stack.</h2>
      <span className="home-dev-stack">
        Sou um cara curioso que gosta de desafios e resolver problemas, estou
        focado em aprimorar meus conhecimentos através de projetos próprios,
        lendo livros de referência, documentações de tecnologias que me chamam
        atenção e cursos online.
      </span>
    </section>
  );
}
