import React from 'react';
import { Modal, Form } from 'antd';
import RecordForm from './RecordForm';

export default function RecordModal(props) {
  return (
    <Modal
      title={props.title}
      open={props.status}
      width="30%"
      okText="Add"
      onOk={() => {
        props.setOpenModal(false);
      }}
      onCancel={() => {
        props.setOpenModal(false);
      }}
    >
      <RecordForm isAddExpense={props.isAddExpense} />
    </Modal>
  );
}
