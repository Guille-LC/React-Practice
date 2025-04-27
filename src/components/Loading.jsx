import { LoadingOutlined } from '@ant-design/icons';
import {  Spin } from 'antd';

const Loading = () => {
    return (
        <h1>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </h1>
    )
}

export default Loading