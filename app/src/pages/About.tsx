import profilePic from '../assets/profile.png';
import Stacks from '../components/Stacks';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-container">
      <h1 className="about-title">Sobre mim</h1>
      <div className="about-content-container">
        <div className="inner-content">
          <p className="inner-content-text">
            Sou apaixonado por desenvolvimento web em especial a parte de
            backend, mas também posso passar horas mexendo com a parte gráfica
            da aplicação e nem perceber o tempo passando.
          </p>
          <p className="inner-content-text">
            Conheci o mundo da programação no final de 2020 na faculdade de
            engenharia elétrica, fiquei fascinado quando o professor explicava
            como acontecia a interação entre hardware e os softwares que ele
            escrevia.
          </p>
          <p className="inner-content-text">
            Após ter feito uma calculadora de triângulos retângulos em Python,
            me senti muito contente por ter concluído e surpreso com a
            quantidade de desafios que apareceram. Decidi me aprofundar sobre o
            assunto e comecei a estudar pelo youtube, durante os estudos acabei
            me deparando com a Trybe e em julho de 2021 iniciei minha formação
            lá.
          </p>
          <p className="inner-content-text">
            Na Trybe me desenvolvi ao longo de um ano em 4 blocos que abordaram
            desenvolvimento web full stack e ciência da computação; além de ter
            feito diversos projetos individuais e em grupo, desenvolvemos também
            nossas soft skills nesse período vendo metodologias ágeis como
            kanban, autoconhecimento e formas de lidar com feedabcks.
          </p>
          <p className="inner-content-text">
            Aqui estão algumas das tecnologias que venho utilizando ultimamente:
          </p>
          <Stacks />
        </div>
        <div className="profile-picture">
          <img src={profilePic} alt="me" className="picture" />
        </div>
      </div>
    </section>
  );
}
