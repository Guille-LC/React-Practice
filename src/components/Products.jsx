import { Card } from 'primereact/card';
import { ItemCount } from './ItemCount';
import '../styles/cardimg.css';
import products from '../assets/products.json'

const Products = () => (
    <>
        {products.map((prod) => (
            <Card key={prod.id} title={prod.title} className='card'>

                <img src='/img/gdts43mb.jpg' alt="remera" className='card-img' />
                <p>{prod.description}</p>
                <strong>${prod.price}</strong>

                <ItemCount />

            </Card>
        ))}
    </>
);

export default Products