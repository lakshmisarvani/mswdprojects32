import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'

import Students from './faculty/Students'
import About from './faculty/About'
import Contact from './faculty/Contact'
import './facultycss.css'
import Courses from './faculty/Courses'

export default function FacultyNavBar() {
 
  return (
    <div >
    <h1 className="faculty-heading">FACULTY HUB</h1>
    <div className='faculty-navbar'>
        <ul>
            <li><Link to='/courses'>AssignedCourses</Link></li>
            <li><Link to='/students'>ViewStudents</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

        </ul>
        <Routes>
            <Route path='/courses' element={<Courses/>} />
             <Route path='/students' element={<Students/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
           
        </Routes>
    </div>
    </div>
  )
}
