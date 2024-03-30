import "./Formulario.css"
import { FaXmark } from "react-icons/fa6";

interface FormProps {
    isVisible: boolean;
    onClose?: () => void; 
}

const Form = ({ isVisible, onClose }: FormProps) => {

    const handleClose = () => {
        if (onClose) { 
            onClose(); 
        }
    };

    return (
        <>
        <section className={`formularioFixado ${isVisible ? '' : 'formOculto'}` } >
            <FaXmark className="iconex" onClick={handleClose}/>
            <form className="fixado" action="">
                <h2 className="legenda">Ganhe uma mentoria <span className="especializada">especializada</span></h2>
                <div className="formulario-lead">
                    <input className="input" type="text" id="nome" required />
                        <label htmlFor="nome">Nome Completo</label>
                </div>

                <div className="formulario-lead">
                    <input className="input" type="email" id="email" required />
                        <label htmlFor="email">Seu E-mail</label>
                </div>

                <div className="formulario-lead">
                    <input className="input" type="tel" id="telefone" required />
                        <label htmlFor="telefone">Seu Telefone</label>
                </div>

                <button className="botaoFormularioFixado">Enviar</button>
            </form>
        </section>
        </>
    )
}
export default Form;