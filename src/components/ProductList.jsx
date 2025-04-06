import Products from "./Products"

const products = [
    {
        title: "Remera Hombre XL",id: 1, price: 10000, stock: 10
    },
    {
        title: "Remera Hombre XXL",id: 2, price: 1300, stock: 10
    },
    {
        title: "Remera Mujer XL",id: 3, price: 1100, stock: 10
    },
    {
        title: "Remera Mujer XXL",id: 4, price: 1450, stock: 10
    }
]

export const ProductList = () => {
    return (
        <div>
            <h2>Lista de productos</h2>
            <Products products={products}/>
        </div>
    )
}
