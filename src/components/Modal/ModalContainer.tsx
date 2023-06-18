import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from '@/components/Button';

type Props = {
  text: string;
  location: string;
  messenger: string;
  notification: string;
};
const ModalContainer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(props.notification);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (location: string, messenger: string) => {
    setModalText(messenger);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      window.location.replace(location);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Restore
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={() => handleOk(props.location, props.messenger)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalContainer;
