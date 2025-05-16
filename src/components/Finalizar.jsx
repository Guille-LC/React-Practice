import '../styles/formulario.css'

const Finalizar = () => {
    return (
        <>
            <form className="formulario">
                <h2>Finalizar Compra</h2>
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
                <button id="submitButton" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Finalizar