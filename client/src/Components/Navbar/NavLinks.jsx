import React from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './NavLinks.css';
function NavLinks(props) {
  return (
    <div className="navbar">
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">Dashboard</li>
          <li className="nav-link">Transactions</li>
          <li className="nav-link">Reports</li>
        </ul>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="round"
          onClick={props.onOpenModal}
        >
          New Record
        </Button>
      </div>
    </div>
  );
}

export default NavLinks;
