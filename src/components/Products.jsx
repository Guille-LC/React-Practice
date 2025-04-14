import { Card } from 'primereact/card';
import { ItemCount } from './ItemCount';
import '../styles/flexcard.css';
import '../styles/productslist.css';
import products from '../assets/products.json'

const Products = () => (
    <div className='productslist'>
        {products.map((prod) => (
            <Card key={prod.id} title={prod.title} className='flexcard'>
                <img src={prod.img} alt={prod.nombre} className='card-img' />
                <p>{prod.description}</p>
                <strong>${prod.price}</strong>
                <ItemCount />
            </Card>
        ))}
    </div>
);

export default Products