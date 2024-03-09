import Link from "next/link";
import Image from "next/image";
import "./Header.css";


const Header = () => {
    return(
        <>
            <header className="cabecalho">
               
                   <nav className="menu">
                     <ul className="links-de-navegacao">
                        <li><Link className="link" href="/">Home</Link></li>
                        <li><Link className="link" href="">Produtos</Link></li>
                        <li><Link className="link" href="">Quem Somos</Link></li>
                        <li><Link className="link" href="">FAQ</Link></li>
                        <li><Link className="link" href="">Nosso Time</Link></li>
                     </ul>
                    </nav> 
            </header>
        </>
    )
}
export default Header;