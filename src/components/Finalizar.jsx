import '../styles/formulario.css'
import {CartContext} from '../context/ShopCartContext';
import { useContext } from 'react';

const Finalizar = () => {
    const { cart, getTotal } = useContext(CartContext);
    return (
        <>
            <form className="formulario">
                <h2>Finalizar Compra</h2>
                <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.nombre} x {item.cantidad} = ${item.price * item.cantidad}
                    </li>
                ))}
            </ul>
            <h3>Total Final: ${getTotal()}</h3>
                <div class="mb-3" className='inputs'>
                    <div>
                        <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" required></input>
                    </div>
                    <div>
                        <label for="exampleInputEmail1">Correo Electronico:</label>
                        <input type="email" placeholder="JasonAndrewRelva@insomniac.com" required />
                    </div>
                    <div>
                        <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required></input>
                    </div>
                    <div>
                        <label for="direccion">Dirección:</label>
                        <input type="text" name="direccion" required></input>
                    </div>
                    <div>
                        <label for="ciudad">Ciudad:</label>
                        <input type="text" id="ciudad" name="ciudad" required></input>
                    </div>
                </div>
                <button id="submitButton" type="submit">Finalizar</button>
            </form>
        </>
    )
}

export default Finalizar