import Navegacion from "./navegacion"


const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>
            <p className="copyright">Todos los Derechos Reservados. {''} | {''} {new Date().getFullYear() }</p>
        </div>
    </footer>
  )
}

export default Footer