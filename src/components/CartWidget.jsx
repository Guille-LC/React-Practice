import {ShoppingCartOutlined} from '@ant-design/icons';
import '../styles/shopcart.css';
import { useContext } from 'react';
import {CartContext} from './context/ShopCartContext';

const CartWidget = () => {

    const {cart} = useContext(CartContext);
    
    return (
        <div className='shopcart'>
            <ShoppingCartOutlined />
            <span>{cart.length}</span>
        </div>
    )
}

export default CartWidget