import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get stored user data
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Check if user exists and email matches
        if (storedUser && storedUser.email === loginData.email) {
            alert("Login Successful!");
            
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={loginData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={loginData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
