import { useState } from "react";
import { Button } from "antd";

export const ItemCount = () => {
    const [contador,setContador] = useState(0)
    console.log(contador);
    return (
        <div>
            <Button color="cyan" variant="solid" onClick={() => setContador(contador+1)}>Agregar al carrito</Button>
        </div>
    )
}