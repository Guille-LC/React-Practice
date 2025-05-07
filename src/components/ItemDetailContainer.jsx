import { useParams } from 'react-router-dom';
import products from '../assets/products.json';
import '../styles/flexdetail.css';
import { ItemCount } from './ItemCount';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);
    return (
        <>
            <h2 className='itemnombre'>{product.nombre}</h2>
            <div className='flexdetail'>
                <img src={product.img} alt={product.description} className='card-img' />
                <p>{product.detail}</p>
            </div>
            <div className='price'>
                <strong className='strongprice'>${product.price}</strong>
                <ItemCount product={product}/ >
            </div>
        </>
    )
}

export default ItemDetailContainer