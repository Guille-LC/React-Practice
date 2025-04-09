import { useState } from "react"

export const ItemCount = () => {
    const [contador,setContador] = useState(0)

    return (
        <div>
            <button onClick={() => setContador(contador+1)}>Agregar al carrito</button>
        </div>
    )
}