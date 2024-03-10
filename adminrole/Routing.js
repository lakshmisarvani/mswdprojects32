import React from 'react'
import { Link,Routes,Route } from 'react-router-dom';
import Student from '../student/Student';
import Faculty from '../faculty/Faculty';
import Courses from '../courses/Courses';

export default function Routing() 
{
  return (
    <div>
        <ul className='navbar'>
            <li><Link to ='/student'>Student </Link></li>
            <li><Link to='/faculty'> Faculty</Link></li>
            <li><Link to='/course'> Courses</Link></li>
        </ul>
        <Routes>
            <Route path='/student' element={<Student/>}/>
            <Route path='/faculty' element={<Faculty/>}/>
            <Route path='/course' element={<Courses/>}/>
        </Routes>
        </div>
  )
}
