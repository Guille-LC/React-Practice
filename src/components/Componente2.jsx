import React from 'react'

export const Componente2 = ({propiedad}) => {
    return (
        <div>
            <h2>Componente 2</h2>
            <ul>
                <li>Argentina</li>
                <li>Brasil</li>
                <li>Chile</li>
                <li>Peru</li>
            </ul>
            <h3>{propiedad}</h3>
        </div>
    )
}