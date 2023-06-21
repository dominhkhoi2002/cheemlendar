import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from '@/components/Button';
type Props = {
  form: any;
  title: string;
  //   location: string;
  //   notification: string;
};
const ModalForm = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        styles={{
          borderRadius: '100px',
          width: '161px',
          height: '48px',
          padding: '16px, 32px, 16px, 32px',
        }}>
        Create teams
      </Button>
      <Modal
        title={props.title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        {props.form}
      </Modal>
    </>
  );
};

export default ModalForm;
