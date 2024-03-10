import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import AddCourse from './AddCourse';
import ViewCourse from './ViewCourse';
import RemoveCourse from './RemoveCourse';
import '../adminrole/navbar.css'

export default function Courses() {
  return (
    <div>
        <h3 align="center"> Courses Page </h3>
        <ul className='navbar'>
            <li><Link to='/addcourse'>AddCourse</Link></li>
            <li><Link to='/viewcourse'>ViewCourse</Link></li>
            <li><Link to='/removecourse'>RemoveCourse</Link></li> 
        </ul>
        <Routes>
            <Route path='/addcourse' element={<AddCourse/>}/>
            <Route path='/viewcourse' element={<ViewCourse/>}/>
            <Route path='/removecourse' element={<RemoveCourse/>}/>
        </Routes>

    </div>
  )
}
