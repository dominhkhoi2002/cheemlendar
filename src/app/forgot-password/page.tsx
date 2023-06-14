'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import InputField from '@/components/InputField';
import './forgot.css';
import {
  AppleFilled,
  GoogleCircleFilled,
  KeyOutlined,
  MailOutlined,
  TwitterCircleFilled,
} from '@ant-design/icons';
import Link from 'next/link';
import Button from '@/components/Button';
import accountData from '../../../public/accounts/account.json';
type Props = {};

const page = (props: Props) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    console.log(accountData);
  }, []);
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <div className="forgot-form">
          <div className="forgot-text">Khôi phục tài khoản của bạn</div>
          <div className="forgot-2-text">
            Vui lòng nhập email hoặc số di động để khôi phục tài khoản của bạn.
          </div>
          <div className="forgot-input-field">
            <InputField
              icon={<MailOutlined style={{ fontSize: '16px' }} />}
              type={1}
              title={'Email'}
              text="monke@gmail.com"
              setInputValue={setUsername}
            />
          </div>
          <div className="bottom-form-ctn-row">
            <Link className={'cancel-button-ctn'} href={'login'}>
              Hủy
            </Link>
            <div className="forgot-button-ctn">
              <Button
                type="primary"
                styles={{
                  borderRadius: '10px',
                  width: '208px',
                  height: '48px',
                }}
                onClick={() => {}}>
                Khôi phục
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
