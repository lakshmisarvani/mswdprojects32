import React from 'react'
import FacultyNavBar from '../FacultyNavBar'
import '../facultycss.css'
export default function Courses() {
  const courses = [
    "DEVOPS",
    "ASE",
    "CIS",
    "ML"

]
  return (
    <div>
        <FacultyNavBar/>
        <h2 align='center'>Assigned Courses</h2>
        <div className="button">
        {courses.map(course => (
          <button className='subject' key={course} style={{ 
            width: '250px',
            transitionDuration: '0.4s',
            padding: '15px 32px',
            border: '2px solid #c2e9f7',
            borderRadius: '12px',
            fontSize: '16px',
            backgroundColor: 'transparent',
            color: '#000',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2cab81'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >{course}</button> 
        ))} 
        </div>
    </div>
  )
}