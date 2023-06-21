import { PlusOutlined } from '@ant-design/icons';
import Button from '@/components/Button';
import { DatePicker, Form, Input, Select } from 'antd';
import React, { useState } from 'react';

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
          <Form.Item label="Team name">
            <Input placeholder="Enter Team name" />
          </Form.Item>
          <Form.Item label="Privacy">
            <Select>
              <Select.Option value="Private">Private</Select.Option>
              <Select.Option value="Public">Public</Select.Option>
            </Select>
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
