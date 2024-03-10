import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import AddStudent from './AddStudent'
import DeleteStudent from './DeleteStudent'
import ViewStudents from './ViewStudents'
import '../adminrole/login.css'

export default function Student() 
{
  return (
    <div>
      <body>
        <h3 align="center">Student Page</h3>
      <ul className='navbar'>
        
      <li> <Link to="/addstudent">AddStudent</Link></li>
    <li><Link to="/removestudent">RemoveStudent</Link></li>
    <li><Link to="/viewstudents">ViewStudents</Link></li>
      </ul>
      
        <Routes>
        <Route path="/addstudent" element={<AddStudent/>}/>
       <Route path="/removestudent" element={<DeleteStudent/>}/>
       <Route path="/viewstudents" element={<ViewStudents/>}/>
        </Routes>
        
        </body>
    </div>
  )
}
