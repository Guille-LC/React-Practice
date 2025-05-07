import { MenuOutlined, UserOutlined, WomanOutlined, StarOutlined, FilePptOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import CartWidget from './CartWidget';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const items = [
    {
        key: 'sub1',
        icon: <MenuOutlined />,
        label: 'Menu',
        children: [
            {
                key: '1-1',
                label: 'Remeras',
                type: 'group',
                children: [
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Hombre',
                    },
                    {
                        key: '2',
                        icon: <WomanOutlined />,
                        label: 'Mujer',
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
                        label: 'Accesorios',
                    },
                    {
                        key: '4',
                        icon: <FilePptOutlined />,
                        label: 'Posters',
                    },
                ],
            },
        ],
    }
];

const onClick = e => console.log('click', e);

export const Navbar = () => {
    return (
        <div className='navbar'> 
            <Menu onClick={onClick} style={{width: 256,}} mode="horizontal" items={items} />
            <Link to={'/carrito'}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default Navbar