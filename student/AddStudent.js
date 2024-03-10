import React,  { useState } from 'react'
import '../adminrole/navbar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function AddStudent() 
{
  // const navigate=useNavigate();
  // const navigation=()=>{
  //   navigate("/viewstudent")
  // }
  const [formData, setFormData] = useState({
    fullname: '',
    id: '',
    year: '',
    email: '',
    password:'',
  });
  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertstudent', formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          id: '',
          year: '',
          email: '',
          password:'',
        });
      }
      setMessage(response.data);
      setError('') // set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>New Student </u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
      <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Id</label>
          <input type="number" id="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Year </label>
          <input type="number" id="year" value={formData.year} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
    </form>
    </div>
  )
}
