import React from 'react';
// import './notification.css';

type Props = {
  img: any;
};
const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-opening">Notification</div>
      <div className="notification-content"></div>
    </div>
  );
};

export default Notification;
