import React,  { useState } from 'react'
import '../adminrole/navbar.css'
import axios from 'axios';
export default function AddCourse() {
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
      const response = await axios.post('http://localhost:2032/insertcourse', formData);
      if (response.status === 200) 
      {
        setFormData({
          name: '',
          code: '',
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
      <h3 align="center"><u>New Course </u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
      <div>
          <label>Course Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Course Code</label>
          <input type="text" id="code" value={formData.code} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
    </form>
    </div>
  )
}
/*AddCourse*/