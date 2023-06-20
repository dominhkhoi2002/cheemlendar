import React, { useState } from 'react';
import Button from '../Button';
import Image from 'next/image';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import './Notification.css';
const { Meta } = Card;
type Props = {
  img: any;
};
const Notification = () => {
  const data = [
    {
      id: '000000001',
      avatar: '/accounts/Avatar/3.jpg',
      title: 'Le Truong Giang da giao viec cho ban',
      datetime: '2023-08-09',
      description: 'làm việc đi',
      type: 'read',
    },
    {
      id: '000000002',
      avatar: '/accounts/Avatar/0.jpg',
      title: 'Nguyen Thi Ha da gui tin nhan cho ban',
      datetime: '2023-08-10',
      description: 'Cần phản hồi nhanh chóng',
      type: 'unread',
    },
    {
      id: '000000003',
      avatar: '/accounts/Avatar/1.jpg',
      title: 'Tran Van Nam da thich bai viet cua ban',
      datetime: '2023-08-11',
      description: 'Rất đáng ngạc nhiên',
      type: 'read',
    },
    {
      id: '000000004',
      avatar: '/accounts/Avatar/2.jpg',
      title: 'Pham Thanh Mai đã đặt cuộc họp',
      datetime: '2023-08-12',
      description: 'Chúng ta cần thảo luận vấn đề quan trọng',
      type: 'read',
    },
    {
      id: '000000005',
      avatar: '/accounts/Avatar/3.jpg',
      title: 'Nguyen Van An đã gửi bạn một email',
      datetime: '2023-08-13',
      description: 'Vui lòng kiểm tra hộp thư đến',
      type: 'unread',
    },
    {
      id: '000000006',
      avatar: '/accounts/Avatar/1.jpg',
      title: 'Tran Thi Lan đã yêu cầu phê duyệt',
      datetime: '2023-08-14',
      description: 'Cần xem xét và phản hồi',
      type: 'read',
    },
    {
      id: '000000007',
      avatar: '/accounts/Avatar/2.jpg',
      title: 'Vu Hoang Long đã tạo công việc mới',
      datetime: '2023-08-15',
      description: 'Cần bạn tham gia và hoàn thành',
      type: 'unread',
    },
    {
      id: '000000008',
      avatar: '/accounts/Avatar/3.jpg',
      title: 'Nguyen Thanh Trung đã thảo luận với bạn',
      datetime: '2023-08-16',
      description: 'Vấn đề cần giải quyết',
      type: 'read',
    },
    {
      id: '000000009',
      avatar: '/accounts/Avatar/4.jpg',
      title: 'Tran Thi Hoa đã gửi bạn một tin nhắn',
      datetime: '2023-08-17',
      description: 'Yêu cầu phản hồi',
      type: 'unread',
    },
    {
      id: '000000010',
      avatar: '/accounts/Avatar/3.jpg',
      title: 'Nguyen Van Binh đã đăng một bài viết mới',
      datetime: '2023-08-18',
      description: 'Cần bạn đọc và đánh giá',
      type: 'read',
    },
  ];

  const handleClick = () => {
    if (isReaded === 'read') {
      setIsReaded('unread');
    } else setIsReaded('read');
  };
  const [isReaded, setIsReaded] = useState('read');
  const filteredData = data.filter(item => item.type === isReaded);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div className="notification">
      <div className="notification-opening">Notification</div>
      <div className="notification-button-ctn">
        <Button
          type={isReaded === 'read' ? 'primary' : 'secondary'}
          styles={{
            borderRadius: '10px',
            width: '82px',
            height: '31px',
            padding: '10px',
          }}
          onClick={() => {
            handleClick();
          }}>
          All
        </Button>
        <Button
          type={isReaded === 'read' ? 'secondary' : 'primary'}
          styles={{
            borderRadius: '10px',
            width: '82px',
            height: '31px',
            padding: '10px',
          }}
          onClick={() => {
            handleClick();
          }}>
          Unread
        </Button>
      </div>
      <div className="notification-content">
        {filteredData.map(item => (
          <div key={item.id} className="notification-messenger">
            <Card style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.description}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
