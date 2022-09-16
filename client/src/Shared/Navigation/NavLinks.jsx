import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import './NavLinks.css';
import ToggleButton from '../UIElements/ToggleButton';
import NewRecord from '../../Dashboard/components/NewRecord';
function NavLinks(props) {
  return (
    <div className="navbar">
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">Dashboard</li>
          <li className="nav-link">Transactions</li>
          <li className="nav-link">Reports</li>
        </ul>
        <ToggleButton className="toggle-btn" title="Add New Record">
          <NewRecord />
        </ToggleButton>
      </div>
    </div>
  );
}

export default NavLinks;
