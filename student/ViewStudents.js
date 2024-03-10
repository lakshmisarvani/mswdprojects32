import React, { useState, useEffect } from 'react'
//import { viewstudents } from '../../backend/controllers/StudentController';
import Student from './Student';
import axios from 'axios';

export default function ViewStudents() 
{
  const [students, setStudents] = useState([]);

  const fetchstudents = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewstudents');
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchstudents();
  }, []);
  
  const viewstudent = async (email) => {
    try {
      await axios.get(`http://localhost:2032/deletestudent/${email}`);
      fetchstudents();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
      <div style={{ textAlign: 'center' }}>
        <h1 >Student Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Id</th>
                <th>Year</th>
                <th>Email</th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(students) && students.length > 0 ? (
      students.map((student, index) => (
        <tr key={index}>
          <td>{student.fullname}</td>
          <td>{student.id}</td>
          <td>{student.year}</td>
          <td>{student.email}</td>
          
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
    );
}
