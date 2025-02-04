import React from 'react';
import { FaHome, FaBriefcase, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Header2 = () => {
  return (
    <div className="admin-container">
      <nav className="admin-sidebar">
        <ul>
          <li>
            <a href="/">
              <FaHome className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="/branding">
              <FaBriefcase className="icon" />
              Branding
            </a>
          </li>
          <li>
            <a href="/services">
              <FaUserCircle className="icon" />
              Services
            </a>
          </li>
          <li>
            <a href="/subscription">
              <FaUserCircle className="icon" />
              Subscription
            </a>
          </li>
          <li>
            <a href="/logout">
              <FaSignOutAlt className="icon" />
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      <div className="admin-content">
        <header className="admin-header">
          <div className="header-1">Header 1</div>
          <div className="header-2">Header 2</div>
        </header>

        <div className="admin-main">
          <div className="button-1">
            <input type="text" placeholder="Button 1 Text" />
            <input type="text" placeholder="Button 1 Link" />
          </div>
          <div className="button-2">
            <input type="text" placeholder="Button 2 Text" />
            <input type="text" placeholder="Button 2 Link" />
          </div>
        </div>

        <button className="save-button">SAVE</button>
      </div>
    </div>
  );
};

export default Header2;