import React from 'react'
//import AddStudent from './AddStudent'
import { useNavigate } from 'react-router-dom'

export default function AdminHome() 
{
  const navigate=useNavigate();
  const navigation=()=>{
    navigate("/student")
  }
  const navigation2=()=>{
    navigate("/faculty")
  }
  
  return (
    <div >
        <h3> Home Page </h3>
        <button onClick={navigation} class='button' >Manage Students </button>&nbsp;&nbsp;&nbsp;
        <button onClick={navigation2}class='button'>Manage Faculty</button>
    </div>
  )
}
