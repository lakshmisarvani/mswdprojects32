import React from 'react'
import FacultyNavBar from '../FacultyNavBar';

export default function Students() {
  return (
      <div >
        <FacultyNavBar/>
        <h1 align="center">Student Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>ID NO</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Semester</th>
                <th>Course</th>
                
              </tr>
            </thead>
            {/* <tbody> */}
        {/* {Array.isArray(jobseekers) && jobseekers.length > 0 ? (
      jobseekers.map((jobseeker, index) => (
        <tr key={index}>
          <td>{jobseeker.fullname}</td>
          <td>{jobseeker.gender}</td>
          <td>{jobseeker.dateofbirth}</td>
          <td>{jobseeker.email}</td>
          <td>{jobseeker.location}</td>
          <td>{jobseeker.contact}</td>
          <td>
            <button onClick={() => deleteJobSeeker(jobseeker.email)} className='button'>Delete</button> 
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="7">Data Not Found</td>
      </tr>
    )}
  </tbody> */}
          </table> 
      </div>
    );
}