import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Navbar from './Shared/Navigation/Navbar';
import Dashboard from './Dashboard/pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
