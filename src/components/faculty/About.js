import React from 'react';
import FacultyNavBar from '../FacultyNavBar';
import profile from '../FaultyAbout.png';

export default function About() {
  return (
    <div>

      <FacultyNavBar/>
      <h3 style={{marginLeft: '20px'}}>About Page</h3>
      <br/><br/><br/>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <img src={profile} alt="img" style={{width: '49%', height: '90%'}} />
        <div style={{marginLeft: '40px', marginRight: '20px', boxSizing: 'border-box', fontSize: '20px', fontWeight: '700'}}>
          <p>Tutor can contact to admin when there is an issue regarding the grievances of courses registration.</p>
          <p>This is a faculty hub where tutors can access their assigned courses, view the students registered for each course, and contact the admin for grievances regarding course registration.</p>
        </div>
      </div>
    </div>
  );
}
