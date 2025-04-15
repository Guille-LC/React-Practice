import { useParams } from 'react-router-dom';
import products from '../assets/products.json';
import '../styles/flexdetail.css';
import { ItemCount } from './ItemCount';

const ItemDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);
    return (
        <>
            <div className='flexdetail'>
                <h2>{product.nombre}</h2>
                <img src={product.img} alt={product.description} className='card-img' />
                <p>{product.detail}</p>
                <strong>${product.price}</strong>
                <ItemCount/ >
            </div>
        </>
    )
}

export default ItemDetail