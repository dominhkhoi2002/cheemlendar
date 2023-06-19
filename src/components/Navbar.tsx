'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import './navbar.css';
import NavLink from './NavLink';
import { NotificationOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import Notification from './Notification/Notification';
const activeNavOptions = ['home', 'calendar', 'team', 'about'] as const;
type Props = {
  activeNav: (typeof activeNavOptions)[number];
};

const Navbar = (props: Props) => {
  const [uid, setUid] = useState(-1);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (uid == -1) setUid(localStorage.getItem('uid'));
  }, []);
  useEffect(() => {
    if (uid != -1) setAvatar(`/accounts/Avatar/${uid}.jpg`);
  }, [uid]);
  return (
    <div className="navbar">
      <a href={'/'}>
        <div className="logo-ctn">
          <Image
            className="logo"
            src="/logo.jpg"
            width={55}
            height={55}
            alt="Logo"
          />
          <div className="page-name">Cheemslender</div>
        </div>
      </a>

      {/* Navigation Tabs */}
      <ul className="nav-links">
        <li>
          <NavLink text="Home" active={props.activeNav == 'home'} />
        </li>
        <li>
          <NavLink text="Calendar" active={props.activeNav == 'calendar'} />
        </li>
        <li>
          <NavLink text="Team" active={props.activeNav == 'team'} />
        </li>
        <li>
          <NavLink text="About" active={props.activeNav == 'about'} />
        </li>
      </ul>

      {/* Buttons */}
      <div className="last-nav-ctn">
        {uid != -1 ? (
          <>
            <Popover content={<Notification />} trigger="click">
              <NotificationOutlined />
            </Popover>
            <Link className="setting" href={'setting'}>
              Setting
            </Link>
            <Popover
              content={
                <div>
                  <p>Help</p>
                  <Button
                    type="secondary"
                    styles={{ padding: '0px' }}
                    onClick={() => {
                      localStorage.setItem('uid', '-1');
                      window.location.reload();
                    }}>
                    Sign out
                  </Button>
                </div>
              }
              trigger="click">
              <Image
                className="avatar"
                src={avatar}
                width={48}
                height={48}
                alt="avatar"
              />
            </Popover>
          </>
        ) : (
          <>
            <Button type="secondary">
              <Link href="/login">Log In</Link>
            </Button>
            <Button type="primary">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
