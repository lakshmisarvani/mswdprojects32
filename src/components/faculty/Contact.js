import React, { useState } from 'react';
import FacultyNavBar from '../FacultyNavBar';

export default function Contact() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Year:', year);
    console.log('Semester:', semester);
    console.log('Query:', query);
    setYear('');
    setSemester('');
    setQuery('');
  };

  return (
    <div>
      <FacultyNavBar />
      <h3>Contact Admin</h3><br/><br/><br/>
      <div classNam="card">
      <form onSubmit={handleSubmit} align="center">
        <br/>
        <label htmlFor="year">Enter Year:</label>
        <input 
          type="number" 
          id="year" 
          name="year" 
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ 
            width: '10%', 
            padding: '8px', 
            marginBottom: '15px', 
            border: '1px solid #ccc', 
            borderRadius: '20px', 
            boxSizing: 'border-box' 
          }}
          required 
        />
        <br/>
        <label htmlFor="semester">Enter Semester:</label>
        <input 
          type="number" 
          id="semester" 
          name="semester" 
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          style={{ 
            width: '10%', 
            padding: '8px', 
            marginBottom: '15px', 
            border: '1px solid #ccc', 
            borderRadius: '20px', 
            boxSizing: 'border-box' 
          }}
          required 
        />
        <br/>
        <textarea 
          id="query" 
          name="query" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ 
            width: '10%', 
            padding: '8px', 
            marginBottom: '15px', 
            border: '1px solid #ccc', 
            borderRadius: '20px', // Curved edges
            boxSizing: 'border-box', 
            height: '100px' 
          }}
          placeholder="Enter your query here" 
          required 
        />
        <br/>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }} 
          type="submit"
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
