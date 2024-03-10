import React from 'react'
import './faculty/courses.css'
import { useNavigate } from 'react-router-dom';

export default function CourseRegistration() 
{
  const navigate=useNavigate();

  const course1 = () => {
    navigate('/mswd')
  }
  const course2 = () => {
    navigate('/pfsd')
  }
  const course3 = () => {
    navigate('/jfsd')
  }
  const course4 = () => {
    navigate('/cis')
  }
  
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
        <h1>Courses</h1>
          <table  align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
            <button class="buttona button1" onClick={course1}>Mern Stack Web Development</button><br/>
            <button class="buttona button2" onClick={course2}>Python Full Stack Development</button><br/>
            <button class="buttona button3" onClick={course3}>Java Full Stack Development</button><br/>
            <button class="buttona button4" onClick={course4}>Cloud Infrastructure and Services</button><br/>
            </tr>
          </thead>
          </table>

          
          
        </div>
    </div>
  );
}
