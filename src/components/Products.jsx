import { Card } from 'primereact/card';
import '../styles/flexcard.css';
import '../styles/productslist.css';
import products from '../assets/products.json';
import { Link } from 'react-router-dom';

const Products = () => (
    <div className='productslist'>
        {products.map((prod) => (
            <Card key={prod.id} title={prod.title} className='flexcard'>
                <img src={prod.img} alt={prod.nombre} className='card-img' />
                <p>{prod.description}</p>
                <strong>${prod.price}</strong>
                <Link to={`/detalle/${prod.id}`}>
                    <button>Detalles</button>
                </Link>
            </Card>
        ))}
    </div>
);

export default Products