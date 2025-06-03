import { useParams } from 'react-router-dom';
import '../styles/flexdetail.css';
import { ItemCount } from './ItemCount';
import { getProducts } from '../productsService';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((products) => {
            const foundProduct = products.find(p => p.id === id);
            setProduct(foundProduct);
        })
        .catch((err) => console.error("Error al obtener producto:", err))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loading />;
    if (!product) return <p>Producto no encontrado</p>;

    return (
        <>
            <h2 className='itemnombre'>{product.nombre}</h2>
            <div className='flexdetail'>
                <img src={product.foto} alt={product.description} className='card-img' />
                <p>{product.detalle}</p>
            </div>
            <div className='price'>
                <strong className='strongprice'>${product.price}</strong>
                <ItemCount product={product} />
            </div>
        </>
    )
}

export default ItemDetailContainer