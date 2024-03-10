import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from './facultyloginimg.png';
import './login.css';

export default function FacultyLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'user') {
            setUsername(e.target.value);
        } else if (e.target.name === 'pwd') {
            setPassword(e.target.value);
        }
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword(password)) {
            // Password meets the requirements
            navigate("/facultynavbar");
        } else {
            // Password does not meet the requirements
            setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 8 characters long.');
        }
    };

    return (
        <div className="login-container">
            <h2 align="center">Faculty Login Page</h2>
            <div className="bg-image-container">
                <img src={profile} alt="bgimage" className="bg-image" />
            </div>
            <form align="center" className="centered-form" onSubmit={handleSubmit}>
                <label>Enter Username</label>
                <input type="text" name="user" value={username} onChange={handleChange} required /><br />
                <label>Enter Password</label>
                <input type="password" name="pwd" value={password} onChange={handleChange} required /><br />
                <input type="submit" value="Login" />
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
