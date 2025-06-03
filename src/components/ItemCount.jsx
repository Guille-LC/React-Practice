import { CartContext } from "./context/ShopCartContext";
import { Button } from "antd";
import { useContext } from 'react';
import { useState } from "react"
import '../styles/flexcount.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const ItemCount = ({ product }) => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        if (contador < product.stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        if (contador === 0) {
            Toastify({
                text: "¡No seleccionaste cantidad!",
                duration: 2500,
                style: {
                    background: "linear-gradient(to right,rgb(176, 0, 0),rgb(102, 0, 0))",
                }
            }).showToast();
        } else {
            const productoExistente = cart.find(item => item.id === product.id);

            if (productoExistente) {
                const nuevoCarrito = cart.map(item =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + contador }
                        : item
                );
                setCart(nuevoCarrito);
            } else {
                setCart([...cart, { ...product, cantidad: contador }]);
            }

            Toastify({
                text: "¡Agregado al carrito!",
                duration: 2500,
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
            }).showToast();

            setContador(0);
        }
    };

    return (
        <>
            <div className="flexcount">
                <Button color="danger" variant="filled" onClick={restar}>-</Button>
                <strong>{contador}</strong>
                <Button color="cyan" variant="filled" onClick={sumar}>+</Button>
            </div>
            <Button type="primary" onClick={addToCart}>Agregar al carrito</Button>
        </>
    )
}
