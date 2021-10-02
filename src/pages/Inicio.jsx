import lazy from '../media/lazy.jpg';
import accesorios from '../media/accesorios.jpg';
import comedero from '../media/comedero.jpg';
import cama from '../media/cama.jpg';
import rascador from '../media/rascador.jpg';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';



function inicio(){
return(

    <><header>
        <div className="nombre">LazyStore</div>
        <div className="encabezado">
            <nav>
                <ul> <Link to='/RegistroProductos'>
                    <li><a href="#">Iniciar sesión</a></li>
                    </Link>
                    <Link to='/RegistroProductos'>
                    <li><a href="#">Registrarse</a></li>
                    </Link>
                    <li><a href="#">Inicio</a></li>
                </ul>
            </nav>
        </div>
    </header><body className="body2">
            <div className="titulo">
                <h1>
                    Bienvenidos
                </h1>
            </div>
            <div className="slider">
                <ul>
                    <li><img src={lazy} alt=""/></li>
                    <li><img src={accesorios} alt=""/></li>
                    <li><img src={comedero} alt=""/></li>
                    <li><img src={cama} alt=""/></li>
                    <li><img src={rascador} alt=""/></li>
                </ul>
            </div>
        </body></>
);

}
 
export default inicio;