import React from 'react';
import { Button, Form, Input, Modal, DatePicker, Select } from 'antd';
import './NewRecord.css';

export default function NewRecord(props) {
  const [form] = Form.useForm();
  const { Option } = Select;
  return (
    <div>
      <Modal
        title="Add transaction"
        open={props.modalStatus}
        onCancel={() => {}}
        okText="Add"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            label="Total"
            rules={[
              {
                required: true,
                message: 'Please input the amount of money!',
              },
            ]}
          >
            <Input prefix="￥" suffix="RMB" />
          </Form.Item>
          <Form.Item label="Category">
            <Select placeholder="I'm Select" allowClear>
              <Option value="1">Housing</Option>
              <Option value="2">Transportation</Option>
              <Option value="3">Food</Option>
              <Option value="4">Personal Spending </Option>
              <Option value="5">Medical & Healthcare </Option>
            </Select>
          </Form.Item>
          <Form.Item label="Month">
            <DatePicker onChange={() => {}} picker="month" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
