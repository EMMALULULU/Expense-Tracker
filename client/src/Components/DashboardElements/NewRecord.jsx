import React from 'react';
import { Modal } from 'antd';
import NewForm from './NewForm';
export default function NewRecord(props) {
  console.log(props);
  return (
    <Modal open={props.modalStatus} onCancel={() => {}} okText="Add">
      <NewForm />
    </Modal>
  );
}
