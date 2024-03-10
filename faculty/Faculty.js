import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import AddFaculty from './AddFaculty'
import RemoveFaculty from './RemoveFaculty'
import ViewFaculty from './ViewFaculty'
import '../adminrole/navbar.css'


export default function Faculty() {
  return (
    <div >
        <h3 align="center">FACULTY PAGE</h3>
        <ul className='navbar'>
          <li><Link to ='/addfaculty'>AddFaculty</Link></li>
          <li><Link to='/removefaculty'>Removefaculty</Link></li>
          <li><Link to='/viewfaculty'>ViewFaculty</Link></li>
        </ul>
        <Routes>
            <Route path='/addfaculty' element={<AddFaculty/>}/>
            <Route path='/removefaculty' element={<RemoveFaculty/>}/>
            <Route path='/viewfaculty' element={<ViewFaculty/>}/>
        </Routes>

    </div>
  )
}
