import { createContext, useState } from "react";

export const CartContext = createContext(null) 

export const ShopCartProvider = ({children}) => { 

    const [cart,setCart] = useState([]);
    const getTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    };
    return (
        <CartContext.Provider value={{cart,setCart,getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShopCartProvider