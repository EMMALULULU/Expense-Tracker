import React, { useState } from 'react';
import { Button } from 'antd';
import RecordModal from './RecordModal ';

export default function NewRecord() {
  const [openModal, setOpenModal] = useState(false);
  const [isAddExpense, setIsAddExpense] = useState(false);
  const openNewIncome = () => {
    setIsAddExpense(false);
    setOpenModal(true);
  };
  const openNewExpense = () => {
    setIsAddExpense(true);
    setOpenModal(true);
  };
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button ghost style={{ color: 'black' }} onClick={openNewIncome}>
          Add new Income
        </Button>
        <Button ghost style={{ color: 'black' }} onClick={openNewExpense}>
          Add new expense
        </Button>
      </div>

      <RecordModal
        status={openModal}
        isAddExpense={isAddExpense}
        title={isAddExpense ? 'Add Expense' : 'Add Income'}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
