import Link from "next/link";
import "./Header.css";
import { FaAlignJustify } from "react-icons/fa";


const Header = () => {
    return(
        <>
            <header className="cabecalho cabecalho-cor-branca">
                   <nav className="menu"> 
                    <FaAlignJustify  className="inconeMenu"/>
                     <ul className="links-de-navegacao">
                        <li><Link className="link link-cor-preta" href="/">Home</Link></li>
                        <li><Link className="link link-cor-preta" href="./Pages/Produtos">Produtos</Link></li>
                        <li><Link className="link link-cor-preta" href="./Pages/QuemSomos">Quem Somos</Link></li>
                        <li><Link className="link link-cor-preta" href="">FAQ</Link></li>
                        <li><Link className="link link-cor-preta" href="">Nosso Time</Link></li>
                     </ul>
                    </nav> 
            </header>
        </>
    )
}
export default Header;