"use client";
import Link from "next/link";
import "./Header.css";





const Header = () => {
    return(
        <>
            <header className="cabecalho cabecalho-cor-branca">
                   <nav className="menu">
                    <input type="checkbox" className="menu-faketrigger" /> 
                    <div className="menu-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                     <ul className="links-de-navegacao">
                        <li><Link className="link link-cor-preta" href="/">Home</Link></li>
                        <li><Link className="link link-cor-preta" href="/Pages/Produtos">Produtos</Link></li>
                        <li><Link className="link link-cor-preta" href="/Pages/QuemSomos">Quem Somos</Link></li>
                        <li><Link className="link link-cor-preta" href="/Pages/Faq">FAQ</Link></li>
                        <li><Link className="link link-cor-preta" href="/Pages/NossoTime">Nosso Time</Link></li>
                     </ul>
                    </nav> 
            </header>
        </>
    )
}
export default Header;