import Link from "next/link";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer className="rodape">
                <div className="rodape-conteudo">
                    <div className="conteudo">
                        <h3>Precisa de ajuda ?</h3>
                        <Link href="">Perguntas frequentes</Link>
                        <Link href="">Sobre nossos produtos</Link>
                        <Link href="">Especialista & Apps de Parceiros</Link>
                        <Link href="">Nossos Serviços</Link>
                        <Link href="">Programa de Marketing</Link>
                        <Link href="">Serviços Financeiros</Link>
                        <Link href="">Midias e eventos</Link>
                        <Link href="">Enegia & Utilidades</Link>
                        <Link href="">Bens de consumo</Link>
                        <Link href="">Educacao</Link>
                    </div>

                    <div className="conteudo">
                        <h3>Sobre</h3>
                        <Link href="">Quem somos</Link>
                         <Link href="">Por que SalesForce</Link>
                        <Link href="">Aprendizado no Trailhead</Link>
                        <Link href="">Sobre Link SalesForce</Link>
                        <Link href="">Nosso Parceiros</Link>
                        <Link href="">Blog</Link>
                        <Link href="">Comunidade</Link>
                        <Link href="">Serviços e planos</Link>
                        <Link href="">Trabalhe com Link gente</Link>
                    </div>

                    <div className="conteudo">
                        <h3>Produtos</h3>
                        <Link href="">Customer 360</Link>
                        <Link href="">Vendas</Link>
                        <Link href="">Marketing</Link>
                        <Link href="">Commerce</Link>
                    </div>

                    <div className="conteudo">
                        <h3>Siga a gente</h3>
                        <div className="redes-sociais">
                            <Link href="https://www.instagram.com/salesforce/">
                                
                            </Link>

                            <Link href="https://www.facebook.com/salesforce">
                                <i className="fa-brands fa-facebook"></i>
                            </Link>

                            <Link href="https://www.linkedin.com/company/salesforce/">
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>

                            <Link href="https://www.youtube.com/@SalesforceBrasil">
                                <i className="fa-brands fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;