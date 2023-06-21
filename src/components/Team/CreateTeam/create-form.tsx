import { PlusOutlined } from '@ant-design/icons';
import Button from '@/components/Button';
import { DatePicker, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import accountData from '../../../../public/accounts/account.json';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Create_Form: React.FC = () => {
  return (
    <div className="create-form">
      <div className="body-form">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          style={{ width: 800 }}>
          <Form.Item
            label="Team name"
            required
            tooltip="This is a required field">
            <Input placeholder="Enter Team name" />
          </Form.Item>
          <Form.Item
            label="Privacy"
            required
            tooltip="This is a required field">
            <Select>
              <Select.Option value="Private">Private</Select.Option>
              <Select.Option value="Public">Public</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Add member">
            <Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Tags Mode"
              options={accountData}
            />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Create_Form;
