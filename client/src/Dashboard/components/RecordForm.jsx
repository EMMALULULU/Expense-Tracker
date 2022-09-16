import React, { useState, useEffect } from 'react';
import { Form, InputNumber, Select, DatePicker, Button } from 'antd';

const { Option } = Select;
export default function RecordForm(props) {
  const [form, setForm] = useState({});

  useEffect(() => {
    const kind = props.isAddExpense ? 'expense' : 'income';

    setForm((prev) => {
      return {
        ...prev,
        kind,
      };
    });
    return () => {
      setForm((prev) => {
        return {};
      });
    };
  }, [props.isAddExpense]);
  console.log(form);
  const inputHandler = (property, value) => {
    setForm((prev) => {
      return { ...prev, [property]: value };
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
    >
      <Form.Item label="Total" name="total">
        <InputNumber
          prefix="￥"
          style={{ width: '100%' }}
          onChange={(value) => {
            inputHandler('total', value);
          }}
          value={form.total}
        />
      </Form.Item>
      {props.isAddExpense && (
        <Form.Item label="Category" name="category">
          <Select
            style={{
              width: '100%',
            }}
            onChange={(value) => {
              inputHandler('category', value);
            }}
          >
            <Option value="Housing">Housing</Option>
            <Option value="Transportation">Transportation</Option>
            <Option value="Personal Spending">Personal Spending</Option>
            <Option value="Food">Food</Option>
          </Select>
        </Form.Item>
      )}

      <Form.Item name="month" label="Month">
        <DatePicker
          onChange={(moment) => {
            if (moment) {
              moment = moment.format('MMM Do YY');
            }
            inputHandler('moment', moment);
          }}
          picker="month"
        />
      </Form.Item>
      <Form.Item>
        <Button>Add</Button>
      </Form.Item>
    </Form>
  );
}
