import {
  CheckCircleTwoTone,
  Loading3QuartersOutlined,
  CloseCircleOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import Button from '@/components/Button';
import { DatePicker, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import accountData from '../../../../public/accounts/account.json';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Member_Task: React.FC = () => {
  return (
    <div className="create-form">
      <div className="body-form">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          style={{ width: 800 }}>
          <Form.Item
            label="Privacy"
            required
            tooltip="This is a required field">
            <Select>
              <Select.Option value="Done">
                Done <CheckCircleTwoTone twoToneColor="#52c41a" />
              </Select.Option>
              <Select.Option value="Progresing">
                Progresing
                <Loading3QuartersOutlined
                  style={{ color: '#08c', marginLeft: '5px' }}
                />
              </Select.Option>
              <Select.Option value="Fail">
                Fail
                <CloseCircleOutlined
                  style={{ color: '#FF5E5E', marginLeft: '5px' }}
                />
              </Select.Option>
              <Select.Option value="Overdue">
                Overdue
                <FieldTimeOutlined
                  style={{ color: '#FCFF5Fc', marginLeft: '5px' }}
                />
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Team name"
            required
            tooltip="This is a required field">
            <Input placeholder="Enter Team name" />
          </Form.Item>
          <Form.Item label="Date">
            <RangePicker showTime />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Member_Task;
