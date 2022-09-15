import React, { useState } from 'react';
import { Button, Card, Statistic } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';

import './InfoCard.css';

function InfoCard(props) {
  const [value, setValue] = useState(props.value || 0);
  const [isEdit, setIsEdit] = useState(false);

  const openEditHandler = () => {
    setIsEdit(true);
  };
  const closeEditHandler = () => {
    setIsEdit(false);
  };
  const inputHandler = (value) => {
    if (value) setValue(value);
  };
  const cardContent = isEdit ? (
    <div className="edit-container">
      <p className="title">{`${props.title} (CNY)`}</p>
      <InputNumber
        prefix="￥"
        style={{
          width: '100%',
        }}
        autoFocus
        min="0"
        onPressEnter={closeEditHandler}
        onBlur={closeEditHandler}
        size="large"
        value={value}
        onChange={inputHandler}
        bordered={false}
      />
    </div>
  ) : (
    <Statistic
      title={`${props.title} (CNY)`}
      value={value}
      precision={1}
      valueStyle={{ color: props.color, fontSize: '2.85rem' }}
    />
  );

  return (
    <div>
      <Card
        style={{
          borderRadius: '10px',
          padding: '1rem',
          margin: '1rem',
        }}
        hoverable={true}
      >
        <div className="card-inner-container">
          {cardContent}
          {props.mutable && !isEdit && (
            <Button
              style={{ border: '0', marginBottom: '1rem' }}
              onClick={openEditHandler}
            >
              <EditOutlined />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default InfoCard;
