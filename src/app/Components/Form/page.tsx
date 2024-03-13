import "./Formulario.css"

const Form = () => {
    return (
        <>
        <section className="formularioFixado formOculto  ">
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