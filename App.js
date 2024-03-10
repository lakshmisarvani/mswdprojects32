//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//import AddFaculty from './adminrole/AddFaculty';

import NavBar from './adminrole/NavBar';
import Student from './student/Student';
import Faculty from './faculty/Faculty';
import AdminLogin from './adminrole/AdminLogin';
import Courses from './courses/Courses';
import Routing from './adminrole/Routing';
import AdminHome from './adminrole/AdminHome';
import AddStudent from './student/AddStudent';
import DeleteStudent from './student/DeleteStudent';
import ViewStudents from './student/ViewStudents';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      {/* <AdminLogin /> */}
      {/* <Route path="/adminlogin" element={<AdminLogin/>}/> */}
       {/* <Courses/> */}
       <Student/> 
        {/* <Faculty/>  */}
        {/* <StudentLogin/> */}
      {/* <AdminHome/> */}
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
