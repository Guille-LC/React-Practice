import { Card } from 'primereact/card';
import { ItemCount } from './ItemCount';
import '../styles/products.css';
import '../styles/cardimg.css';
import products from '../assets/products.json'

const Products = () => (
    <div className='flexlist'>
        {products.map((prod) => (
            <Card key={prod.id} title={prod.title} className='card'>

                <img src={prod.img} alt="Sweet Merch" className='card-img' />
                <p>{prod.description}</p>
                <strong>${prod.price}</strong>

                <ItemCount />

            </Card>
        ))}
    </div>
);

export default Products