// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dragons">Dragons</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/myprofile">My Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
