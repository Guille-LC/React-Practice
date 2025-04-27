import { useContext } from 'react';
import {CartContext} from './context/ShopCartContext';
import { Card } from "antd";
import { Link } from 'react-router-dom';
import '../styles/emptycart.css';
import '../styles/carritodecompra.css';

const { Meta } = Card;

const Carrito = () => {

    const {cart} = useContext(CartContext);

    if(cart.length > 0) {
        return (
            <div className='carritocontainer'>
                <h2>Tu carrito de compras</h2>
                <div className='carritodecompra'>
                    {cart.map((product) => {
                        return(
                            <Card /* hoverable */ style={{ width: 230 }} cover={<img alt={product.nombre} src={product.img} />} >
                                <Meta title={product.description} description={`$ ${product.price}`} />

                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return(
            <div className='emptycart'>
                <h2>¡Tu carrito esta vacio!</h2>
                <img src="https://media3.giphy.com/media/xT0xesWAbkaxl0l8sw/giphy.gif?cid=6c09b952bxwj74cbomqcybryndfmvu30073y6h1pehe16hg9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"/>
                <strong><Link to="/">Volver a la pagina de inicio</Link></strong>
            </div>
        )
        
    }
}

export default Carrito