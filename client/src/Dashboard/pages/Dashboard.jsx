import React, { useState } from 'react';
import SummaryBoard from '../components/SummaryBoard';
import NewRecord from '../components/NewRecord';
import './Dashboard.css';
function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <SummaryBoard />
    </div>
  );
}

export default Dashboard;
