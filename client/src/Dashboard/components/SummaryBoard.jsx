import React, { useState } from 'react';
import InfoCard from './InfoCard';
import './SummaryBoard.css';

export default function SummaryBoard(props) {
  const [budget, setBudget] = useState(1000);
  const [expense, setExpense] = useState(0);
  return (
    <div className="summaryboard-container">
      <InfoCard
        color="#508EF4"
        title="Budget"
        value={budget}
        setValue={setBudget}
      />
      <InfoCard
        color="#FFBF43"
        title="Expense"
        value={expense}
        setValue={setExpense}
      />
      <InfoCard mutable="true" title="Goal" color="#9267FE" />
    </div>
  );
}
