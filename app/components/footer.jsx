import Navegacion from "./navegacion"




function Footer() {
    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion/>

                <p className="copyrigth">Todos los derechos reservados - <span className="cm">Cristian Moreno</span> - {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer