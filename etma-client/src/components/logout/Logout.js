import React from 'react';
import axios from 'axios';
import api from './api/axiosConfig';


const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      onLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
