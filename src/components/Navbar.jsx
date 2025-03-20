import { AppstoreOutlined, SettingOutlined, MenuOutlined, UserOutlined, WomanOutlined, StarOutlined, FilePptOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import CartWidget from './CartWidget';
import '../styles/navbar.css'

const items = [
    {                            //Navigation 1
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
    },
    {                      //Navigation 2
        key: 'sub2',
        icon: <AppstoreOutlined />,
        label: 'Navigation Two',
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {              //SubMenu
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '7',
                        label: 'Option 7',
                    },
                    {
                        key: '8',
                        label: 'Option 8',
                    },
                ],
            },
        ],
    },
    {                       //Navigation 3
        key: 'sub4',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
        children: [
            {
                key: '9',
                label: 'Option 9',
            },
            {
                key: '10',
                label: 'Option 10',
            },
            {
                key: '11',
                label: 'Option 11',
            },
            {
                key: '12',
                label: 'Option 12',
            },
        ],
    },
];

const onClick = e => console.log('click', e);

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Menu
            onClick={onClick}
            style={{width: 256,}}
            mode="horizontal"
            items={items}
            />
            <CartWidget />
        </div>
    )
}

export default Navbar