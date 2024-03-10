import React , { useState, useEffect } from 'react'
import axios from 'axios';

export default function ViewCourse() {
  const [courses, setCourses] = useState([]);

  const fetchcourses = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewcourses');
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchcourses();
  }, []);
  
  const viewcourse = async (email) => {
    try {
      await axios.get(`http://localhost:2032/removestudents/${email}`);
      fetchcourses();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
      <div style={{ textAlign: 'center' }}>
        <h1 >Course Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Code </th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(courses) && courses.length > 0 ? (
      courses.map((course, index) => (
        <tr key={index}>
          <td>{course.name}</td>
          <td>{course.code}</td>
          
          
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
/*View Course*/