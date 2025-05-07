# 🛒 Sweet Merch

**Sweet Merch** es una aplicación de e-commerce desarrollada en React. Está pensada como una tienda para fans de Green Day, donde se pueden explorar productos, agregarlos al carrito y gestionar una compra básica.

## Librerias utilizadas
- [AntDesign](https://ant.design/) 
- [PrimeReact](https://primereact.org/installation/)

## 🚀 Tecnologías utilizadas

- React
- React Router
- Context API (para el carrito de compras)
- Ant Design (para componentes UI)
- Vite (como bundler)
- JSON local para simular productos

## 📦 Funcionalidades principales

- Vista de catálogo con productos cargados desde un JSON.
- Detalle individual de cada producto.
- Agregado de productos al carrito con botón personalizado.
- Visualización de productos en el carrito.
- Persistencia de estado del carrito usando Context.
- Contador en el ícono del carrito que se actualiza dinámicamente.
- Estilos personalizados + componentes de Ant Design y PrimeReact.

## 📁 Estructura del proyecto (simplificada)

src/  
├── assets/  
│ └── products.json # Lista de productos  
├── components/  
│ ├── CartWidget.jsx # Ícono de carrito con contador  
│ ├── ItemCount.jsx # Botón de "Agregar al carrito"  
│ ├── ItemDetailContainer.jsx  
│ ├── Catalogo.jsx  
│ ├── Carrito.jsx # Página de carrito  
│ ├── Navbar.jsx  
│ └── context/  
│ └── ShopCartContext.jsx # Contexto del carrito  
├── styles/ # CSS personalizados  
├── App.jsx  
└── main.jsx  

__Para correr la aplicacion, escribir en terminal:__
```
npm run dev
```

Trabajo realizado por: Guillermo Laviero Correia
[Correo Electronico](guillermo96lc@hotmail.com)  
[Linkedin](https://www.linkedin.com/in/guillermolavierocorreia/)  
[Instagram](https://www.instagram.com/guille_laviero)  
[Linktree](https://linktr.ee/guillermolc)  