import React from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import Registartion from './Registartion'
import Scourses from './Scourses'
import Sabout from './Sabout'
import Scontact from './Scontact'
import './facultycss.css'
import profile from './Hub-Logo.jpg'

export default function StudentNavBar() {
  return (
    <div>
        <h1 className="faculty-heading">STUDENT HUB</h1>
        <div className='faculty-navbar'>
        <ul>
            <li><Link to='/registration'>Registration</Link>
            </li>
            <li><Link to='/optionform'>OptionForm</Link></li>
            <li><Link to='/sabout'>About</Link></li>
            <li><Link to='/scontact'>Contact</Link></li>
        </ul>
        <Routes>
            <Route path='/registration' element={<Registartion/>}/>
            <Route path='/optionform' element={<Scourses/>}/>
            <Route path='/sabout' element={<Sabout/>}/>
            <Route path='/scontact' element={<Scontact/>}/>
        </Routes>
</div>
    </div>
  )
}
