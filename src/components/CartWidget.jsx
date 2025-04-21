import {ShoppingCartOutlined} from '@ant-design/icons';
import '../styles/shopcart.css'

const CartWidget = () => {
    return (
        <div className='shopcart'>
            <ShoppingCartOutlined />
            <span>0</span>
        </div>
    )
}

export default CartWidget