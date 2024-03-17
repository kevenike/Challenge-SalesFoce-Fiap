import Link from "next/link";
import "./Footer.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
                        <Link href="">Sobre a SalesForce</Link>
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
                                <FaInstagram className="redes fa-instagram" />
                            </Link>

                            <Link href="https://www.facebook.com/salesforce">
                                <FaFacebook className="redes fa-facebook" />
                            </Link>

                            <Link href="https://www.linkedin.com/company/salesforce/">
                                <FaLinkedin className="redes fa-linkedin" />
                            </Link>

                            <Link href="https://www.youtube.com/@SalesforceBrasil">
                                <FaYoutube className="redes fa-youtube" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;