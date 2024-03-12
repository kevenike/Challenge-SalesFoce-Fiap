import Image from "next/image";
import ursoPrincipal from "../app/assets/ursoPrincipal.png";
import "./principal.css";
import pessoasComemorando from "./assets/unsplash_376KN_ISplE.png";
import estrategiaDeNegocio from "./assets/unsplash_mpN7xjKQ_Ns.jpg";
import Empresa from "./assets/unsplash_wD1LRb9OeEo.jpg"

export default function Home() {
  return (
    <main>
      <section className="tituloMenu">
            <div className="texto-titulo">
                <h1>EXPLORE O <strong className="titulo-novo">NOVO</strong></h1>
                <p>Cada pixel, cada detalhe, foi meticulosamente reconstruído para oferecer uma experiência envolvente e
                    intuitiva. Navegue por uma jornada revitalizada, onde a estética encontra a
                    funcionalidade</p>

                <button className="botao-titulo">Saiba Mais!</button>
            </div>

           <Image className="imgTituloMenu" src={ursoPrincipal} alt="ursoPrincipal" />
        </section>

        <section className="titulo-introducao">
            <h2><strong className="nossos-clientes">Nossos Clientes</strong> são parte da
                nova inclusão aqui</h2>

            <p>Nosso compromisso é criar um conteúdo de valor significativo para você. Na Salesforce, dedicamo-nos a
                oferecer não apenas informações relevantes, mas também tutoriais envolventes e educativos.</p>
        </section>

        <section className="introducao-card">
            <div className="card cardMobile bordaESombra cardCorBranca">
                <h2>Newsletter: o que é e como criar?</h2>
                <p>Você recebe algumas dezenas de newsletter por semana, né? E não à toa: a estratégia promete
                    qualificação de leads e mais conversões para o seu negócio....</p>
            </div>

            <div className="cards-imagens">
                <div className="card-esquerda-imagem cardMobile ">
                    <div className="card-meio cardMobile bordaESombra">
                        <h2>Como impulsionar suas vendas no final do ano com Salesforce</h2>
                        <p>O final do ano está chegando e é o momento ideal para alavancar suas vendas aproveitando.</p>
                    </div>

                    <Image className="card-imagem-esquerda bordaESombra" src={Empresa} alt="" />
                </div>


                <div className="card-direita-imagem cardMobile ">
                    <Image className="imagem-card-da-direita bordaESombra" src={pessoasComemorando} alt="" />

                    <div className="card-direita bordaESombra cardCorBranca">
                        <h2>Apagão na distribuição de Energia como a Salesforce pode ajudar?</h2>
                        <p>Explore a revolução tecnológica na gestão de crises no setor de energia. Casos reais e
                            soluções inovadoras para uma resposta transparente e ágil.</p>
                    </div>
                </div>

            </div>

            <Image className="bordaESombra imagem-grande-direita" src={estrategiaDeNegocio} alt="" />

        </section>
    </main>
  );
}
