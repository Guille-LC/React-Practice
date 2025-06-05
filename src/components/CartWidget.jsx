import {ShoppingCartOutlined} from '@ant-design/icons';
import '../styles/shopcart.css';
import { useContext } from 'react';
import {CartContext} from '../context/ShopCartContext'

const CartWidget = () => {

    const {cart} = useContext(CartContext);
    
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <div className='shopcart'>
            <ShoppingCartOutlined />
            <span>{totalItems}</span>
        </div>
    )
}

export default CartWidget