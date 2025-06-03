import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../productsService';
import { Card } from 'primereact/card';
import { Button } from "antd";
import '../styles/flexcard.css';
import '../styles/productslist.css';
import Loading from './Loading';

const Products = () => {
    const { categoria } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProducts(categoria)
            .then((res) => setProducts(res))
            .catch((err) => console.error("Error al cargar productos:", err))
            .finally(() => setLoading(false));
    }, [categoria]);

    if (loading) return <Loading />;

    return (
        <div className='productslist'>
            {products.map((prod) => (
                <Card key={prod.id} title={prod.title} className='flexcard'>
                    <img src={prod.img} alt={prod.nombre} className='card-img' />
                    <p>{prod.description}</p>
                    <strong>${prod.price}</strong>
                    <Link to={`/detalle/${prod.id}`}>
                        <Button type="primary">Detalles</Button>
                    </Link>
                </Card>
            ))}
        </div>
    );
};

export default Products;

