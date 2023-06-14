'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import InputField from '@/components/InputField';
import '../forgot-password/forgot.css';
import './change.css';
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
  const [password, setPassword] = useState('');
  const [Copassword, setCoPassword] = useState('');
  useEffect(() => {
    console.log(accountData);
  }, []);
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <div className="change-form">
          <div className="forgot-text">Reset password</div>
          <div className="forgot-input-field">
            <InputField
              icon={<KeyOutlined style={{ fontSize: '16px' }} />}
              type={1}
              title={'Password'}
              password={true}
              setInputValue={setPassword}
            />
            <InputField
              icon={<KeyOutlined style={{ fontSize: '16px' }} />}
              type={1}
              title={'Confirm Password'}
              password={true}
              setInputValue={setCoPassword}
            />
          </div>
          <div className="bottom-form-ctn-row">
            <Link className={'cancel-button-ctn'} href={'forgot-password'}>
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
                Change password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
