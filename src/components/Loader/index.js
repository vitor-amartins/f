import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import './styles.css';

export const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div className='spinner-container'>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
