import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import StudentLoginn from "./components/StudentLoginn";
import FacultyLogin from "./components/FacultyLogin"; // Import FacultyLogin component
import FacultyNavBar from './components/FacultyNavBar';
import Contact from './components/faculty/Contact';
import Courses from './components/faculty/Courses';
import Students from './components/faculty/Students';
import About from './components/faculty/About';
import StudentNavBar from './components/StudentNavBar';
import Registartion from './components/Registartion';
import Sabout from './components/Sabout';
import Scontact from './components/Scontact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/studentlogin" element={<StudentLoginn />} />
          <Route path="/facultylogin" element={<FacultyLogin />} /> 
          <Route path="/facultynavbar" element={<FacultyNavBar />} />
          <Route path="/studentnavbar" element={<StudentNavBar />} />
          <Route path="/registration" element={<Registartion/>} />
          {/* <Route path="/courses" element={<Courses/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route */}
          {/* <FacultyNavBar/>  */}
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sabout" element={<Sabout/>}/>
          <Route path="/scontact" element={<Scontact/>}/>
          {/* <FacultyNavBar/> */}
          {/* <Courses/>
        <Student/> */}
        
        {/* <StudentLogin/> */}
        
        </Routes>
        
        
      </Router> 
    {/* //  <Courses/> */}
    </div>
  );
}

export default App;
