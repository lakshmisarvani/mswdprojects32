import React from 'react'
import { Routes,Link,Route, Form } from 'react-router-dom'
import AdminHome from './AdminHome'
import './navbar.css'


//import AddStudent from './AddStudent'
import AdminLogin from './AdminLogin'
import Student from '../student/Student'
import Faculty from '../faculty/Faculty'

export default function NavBar() {
  return (
    <div>
      <body>
      <ul className='navbar'>
        
        <li><Link to="/adminhome" target='blank' >AdminHome</Link></li>
        <li><Link to="/student" >Student</Link></li>
        <li><Link to="/faculty" >Faculty</Link></li>
        
      </ul>
      
        <Routes>
            <Route path="/" element={<AdminLogin/>}/>
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/faculty" element={<Faculty/>}/>
        </Routes>
        
        </body>

    </div>
  )
}
