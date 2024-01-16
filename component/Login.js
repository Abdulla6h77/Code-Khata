// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    if (!username || !password) {
      setFormError('Please enter both username and password');
    } else {
      setFormError('');
      console.log('Login submitted:', { username, password });
      // You can add your authentication logic or redirect the user here
    }
  };

  const loginStyle = {
    textAlign: 'center',
    padding: '30px', /* Increase padding for better spacing */
    backgroundColor: '#3498db', /* Change background color to a blue shade for contrast */
    color: '#fff', /* Change text color to white */
    borderRadius: '15px', /* Increase border-radius for more rounded corners */
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', /* Increase box shadow for a more pronounced effect */
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
  };

  const inputStyle = {
    margin: '10px',
    padding: '12px', /* Increase padding for better input field feel */
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '8px', /* Increase border-radius for input fields */
    border: '1px solid #ddd', /* Add a subtle border for better visibility */
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px', /* Increase padding for better button feel */
    width: '100%',
    border: 'none',
    borderRadius: '8px', /* Increase border-radius for the button */
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', /* Add a smooth transition effect for background color */
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={loginStyle}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      {formError && <p style={{ color: 'red', marginTop: '15px' }}>{formError}</p>}
    </div>
  );
};

export default Login;
