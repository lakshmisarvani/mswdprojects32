import React, { useState, useEffect } from 'react'
import '../adminrole/login.css'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function RemoveFaculty() 
{
  const [faculty, setFaculty] = useState([]);

  const fetchfaculty = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewfaculty');
      setFaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchfaculty();
  }, []);
  
  const deletefaculty = async (id) => {
    try {
      await axios.get(  `http://localhost:2032/deletefaculty/${id}`);
      fetchfaculty();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
      <div style={{ textAlign: 'center' }}>
        <h1 >Faculty Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Id</th>
                <th>Branch</th>
                <th>Designation</th>
                <th>Action</th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(faculty) && faculty.length > 0 ? (
      faculty.map((faculty, index) => (
        <tr key={index}>
          <td>{faculty.fullname}</td>
          <td>{faculty.id}</td>
          <td>{faculty.branch}</td>
          <td>{faculty.designation}</td>
          <td>
          <button onClick={() => deletefaculty(faculty.id)} className='button'>Delete</button>
        </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">Data Not Found</td>
      </tr>
    )}
  </tbody>
          </table> 
      </div>
  )
}
/*RemoveFaculty*/