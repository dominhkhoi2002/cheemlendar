import React from 'react';
import Link from 'next/link';
import './return.css';
import { LeftOutlined } from '@ant-design/icons';

const Return = () => {
  return (
    <div className="return">
      <Link className={'return-button-ctn'} href={'team'}>
        <LeftOutlined />
        Joined team
      </Link>
    </div>
  );
};

export default Return;
