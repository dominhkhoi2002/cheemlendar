import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import './joined.css';
import { Avatar, Card, Skeleton, Switch } from 'antd';
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
const { Meta } = Card;
type Props = {};
const JoinedTeam = (props: Props) => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  const teams = [
    {
      id: 1,
      value: 'Nhi đồng thối tai',
      avatar: `/accounts/Avatar/4.jpg`,
      label: 'Nhi đồng thối tai',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      id: 2,
      value: 'SAMI-SAMA',
      avatar: '/accounts/Avatar/4.jpg',
      label: 'SAMI-SAMA',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    // Thêm 8 dòng dữ liệu khác tương tự ở đây
    {
      id: 3,
      value: 'Monke',
      avatar: '/accounts/Avatar/4.jpg',
      label: 'Monke',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      id: 4,
      value: 'Nhi đồng thối tai 2 3',
      avatar: '/accounts/Avatar/1.jpg',
      label: 'Nhi đồng thối tai 2 3',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      id: 5,
      value: 'Nhi đồng thối tai 2 3',
      avatar: '/accounts/Avatar/0.jpg',
      label: 'Nhi đồng thối tai 2 3',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      id: 6,
      value: 'Nhi đồng thối tai 2 3',
      avatar: '/accounts/Avatar/3.jpg',
      label: 'Nhi đồng thối tai 2 3',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
    {
      id: 7,
      value: 'Nhi đồng thối tai 2 3',
      avatar: '/accounts/Avatar/1.jpg',
      label: 'Nhi đồng thối tai 2 3',
      privacy: 'Public',
      description: 'ở đây chúng tôi bị điếc',
      type: 'read',
    },
  ];

  let selectedValue: string;
  return (
    <div className="page">
      <Navbar activeNav={'home'} />
      <div className="joined-team">
        <div className="joined-header">
          <div className="joined-text">Joined Team</div>
          <div className="joined-input">
            <div className="joined-seaerch">
              <Select
                showSearch
                onChange={value => {
                  setSelected(value);
                }}
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
                console.log(selectedValue);
              }}>
              <Link className={'joined-button-ctn'} href={'create-team'}>
                Join or create a team
              </Link>
            </Button>
          </div>
        </div>
        <div className="joined-body">
          {teams.map(item => (
            <div
              key={item.id}
              className={`team-infor-${
                selected == '' || item.value.includes(selected) ? '' : 'hidden'
              }`}>
              <Card style={{ width: 600, marginTop: 16 }} className="Card-team">
                <Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.value}
                  description={item.description}
                />
                <Button
                  type="primary"
                  styles={{
                    borderRadius: '10px',
                    width: '131px',
                    height: '48px',
                    padding: '10px',
                  }}
                  onClick={() => {}}>
                  View Detail
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JoinedTeam;
