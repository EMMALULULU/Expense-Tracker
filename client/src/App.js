import React, { useState } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [records, setRecords] = useState([]); // {month,total,category}

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <Navbar onCloseModal={closeModalHandler} onOpenModal={openModalHandler} />
      <Dashboard modalStatus={openModal} />
    </div>
  );
}

export default App;
