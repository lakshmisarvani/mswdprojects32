import React , { useState, useEffect } from 'react'
import axios from 'axios';

export default function ViewFaculty()
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
  
  const viewfaculty = async (email) => {
    try {
      await axios.get(`http://localhost:2032/deletefaculty/${email}`);
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