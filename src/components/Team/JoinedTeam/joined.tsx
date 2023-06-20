import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Input, Space } from 'antd';
import './joined.css';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
// import Search from '@/components/search';

// const options: SelectProps['options'] = [];
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
// for (let i = 10; i < 36; i++) {
//   options.push({
//     value: i.toString(36) + i,
//     label: i.toString(36) + i,
//   });
// }
import Button from '@/components/Button';
type Props = {};
const JoinedTeam = (props: Props) => {
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
      <Navbar activeNav={'home'} />
      <div className="joined-team">
        <div className="joined-header">
          <div className="joined-text">Joined Teamd</div>
          <div className="joined-input">
            <div className="joined-seaerch">
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
            <Button
              type="primary"
              styles={{
                borderRadius: '10px',
                width: '208px',
                height: '48px',
              }}
              onClick={() => {
                console.log({});
              }}>
              Join or create a team
            </Button>
          </div>
        </div>
        <div className="joined-body"></div>
      </div>
    </div>
  );
};
export default JoinedTeam;
