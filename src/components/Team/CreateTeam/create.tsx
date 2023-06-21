import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Input, Space } from 'antd';
import './create.css';
import { Select } from 'antd';
import ModalForm from '@/components/Modal/ModalForm';

import Link from 'next/link';
import Button from '@/components/Button';
import Create_Form from './create-form';
import Return from '@/components/return';
type Props = {};
const CreateTeam = (props: Props) => {
  const handleSearch = (searchInput: string) => {
    // Xử lý giá trị searchInput tại đây
  };
  const teams = [
    {
      value: '000000001',
      avatar: '/accounts/Avatar/3.jpg',
      label: 'Nhi đồng thối tai',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      value: '000000002',
      avatar: '/accounts/Avatar/3.jpg',
      label: 'Nhi đồng thối tai 2',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    // Thêm 8 dòng dữ liệu khác tương tự ở đây
    {
      value: '000000010',
      avatar: '/accounts/Avatar/3.jpg',
      label: 'Nhi đồng thối tai 3',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
  ];
  return (
    <div className="page">
      <div className="return-button">
        <Return href="./team" text="Joined Team" />
      </div>
      <div className="create-team">
        <div className="create-header">
          <div className="create-text">Join or create a teams</div>
          <div className="create-input">
            <div className="create-seaerch">
              <Select
                showSearch
                style={{ width: 400 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={teams}
              />
            </div>
            <ModalForm
              form={<Create_Form></Create_Form>}
              title="Creat your teams"
            />
          </div>
        </div>
        <div className="create-body"></div>
      </div>
    </div>
  );
};
export default CreateTeam;
