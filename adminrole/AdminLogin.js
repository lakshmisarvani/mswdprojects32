import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AdminLogin() 
{
  const navigate=useNavigate();
  const adminhome=()=>{
    navigate("/adminhome")
  }

  const styles = {
    input: {
      marginBottom: '10px',
      padding: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '8px 15px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <h2 align="center">Admin Login</h2>
      <form align="center">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" style={styles.input} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" style={styles.input} />
        <br />
        <button type="button" style={styles.button} onClick={adminhome}>Login</button>
      </form>
    </div>
  );
}