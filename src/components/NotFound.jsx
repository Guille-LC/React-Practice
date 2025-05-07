import '../styles/notfound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <h1 className='four'>404 - PAGINA NO ENCONTRADA</h1>
            <img className='fourimg' src="../../img/404gif.gif" alt="404" />
            <strong><Link to="/">Volver a la pagina de inicio</Link></strong>
        </div>
    )
}

export default NotFound