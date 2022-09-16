import React from 'react';
import './NavTitle.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../../Assets/logo.png';
function NavTitle() {
  return (
    <div className="main-header">
      <div className="title">
        <Avatar size="large" src={logo} alt="logo" />
        <h2>Expense Tracker</h2>
      </div>

      <Avatar size="large" icon={<UserOutlined />} />
    </div>
  );
}

export default NavTitle;
