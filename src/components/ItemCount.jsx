import { CartContext } from "./context/ShopCartContext";
import { Button } from "antd";
import { useContext } from 'react';


export const ItemCount = ({product}) => {

    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        setCart([...cart, product]);
        console.log("Producto agregado al carrito!");
    };

    return (
        <div>
            <Button type="primary" onClick={addToCart}>Agregar al carrito</Button>
        </div>
    )
}