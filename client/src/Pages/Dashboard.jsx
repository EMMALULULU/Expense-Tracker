import React, { useState } from 'react';
import InfoCard from '../Components/DashboardElements/InfoCard';
import NewRecord from '../Components/DashboardElements/NewRecord';

function Dashboard(props) {
  const [budget, setBudget] = useState(1000);
  const [expense, setExpense] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InfoCard
        color="#508EF4"
        title="Budget"
        value={budget}
        setValue={setBudget}
        mutable="true"
      />
      <InfoCard
        color="#FFBF43"
        title="Expense"
        value={expense}
        setValue={setExpense}
      />
      <InfoCard mutable="true" title="Goal" color="#9267FE" />
      <NewRecord modalStatus={props.modalStatus} />
    </div>
  );
}

export default Dashboard;
