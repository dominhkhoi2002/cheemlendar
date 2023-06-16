'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import InputField from '@/components/InputField';
import './forgot.css';
import { MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Button from '@/components/Button';
import ModalContainer from '@/components/Modal/ModalContainer';
type Props = {};

const page = (props: Props) => {
  const [username, setUsername] = useState('');
  return (
    <div>
      <div>
        <Navbar activeNav="home" />
      </div>
      <div className="page">
        <div className="forgot-form">
          <div className="forgot-text">Restore your account</div>
          <div className="forgot-2-text">
            Please enter your email or mobile number to recover your account.
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
              Cancel
            </Link>
            <div className="forgot-button-ctn">
              <ModalContainer
                text="Restore"
                location="/change-password"
                notification="Open the link in your email to verify and reset your password"
                messenger="Move to password change page"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
