import React from 'react'
import StudentNavBar from './StudentNavBar'
import profile from './student.jpeg';
export default function Sabout() {
  return (
    <div>
<StudentNavBar/>
<h3 style={{marginLeft: '20px'}}>About Page</h3>
      <br/><br/><br/>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <img src={profile} alt="img" style={{width: '49%', height: '90%'}} />
        <div style={{marginLeft: '40px', marginRight: '20px', boxSizing: 'border-box', fontSize: '20px', fontWeight: '700'}}>
          <p>This is a student hub where student can register to
a course and student can get notifications 
whenever  there is availability of the course in which 
student is in the waiting list.</p>
          <p>Student can contact to Admin if there is any issue
while using the application . There will be an  
option form  in which the complete information of the
courses can be viewed by Student. </p>
        </div>
      </div>
    </div>
  )
}
