import { MenuOutlined, UserOutlined, WomanOutlined, StarOutlined, FilePptOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import CartWidget from './CartWidget';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const items = [
    {
        key: 'sub1',
        icon: <MenuOutlined />,
        label: 'Menu',
        children: [
            {
                key: '1-1',
                label: 'Ropa',
                type: 'group',
                children: [
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: <Link to={"/categoria/hombre}"}>Hombre</Link>,
                    },
                    {
                        key: '2',
                        icon: <WomanOutlined />,
                        label: <Link to={"/categoria/mujer"}>Mujer</Link>,
                    },
                ],
            },
            {
                key: '1-2',
                label: 'Otros',
                type: 'group',
                children: [
                    {
                        key: '3',
                        icon: <StarOutlined />,
                        label: <Link to={"/categoria/accesorios"}>Accesorios</Link>,
                    },
                    {
                        key: '4',
                        icon: <FilePptOutlined />,
                        label: <Link to={"/categoria/posters"}>Posters</Link>,
                    },
                ],
            },
        ],
    }
];

    return (
        <div className='navbar'> 
            <Menu style={{width: 256,}} mode="horizontal" items={items} />
            <Link to={'/carrito'}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default Navbar