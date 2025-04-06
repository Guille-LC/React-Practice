import { Card } from 'primereact/card';
import { ItemCount } from './ItemCount';
import '../styles/cardimg.css'

const Products = ({products}) => {
    const firstProduct = products[0];
    return (
        <>
            <h3>Productos</h3>
            <Card title="Simple Card" className='card'>
                <img src="/img/gdts43mb.jpg" alt="remera" className='card-img'/>
                <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, cupiditate neque quas!</p>
                <strong>{firstProduct.price}</strong>
                <ItemCount />
            </Card>
        </>
    )
}

export default Products