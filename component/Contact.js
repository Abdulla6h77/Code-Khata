import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formData;
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError('Please fill out all fields');
      setFormSuccess('');
    } else {
      setFormSuccess('Your message has been sent successfully!');
      setFormError('');
      // You can add further logic here, such as sending the form data to a server
    }
  };

  const contactStyle = {
    textAlign: 'center',
    padding: '30px', /* Increase padding for better spacing */
    backgroundColor: '#e74c3c', /* Change background color to a red shade for contrast */
    color: '#fff', /* Change text color to white */
    borderRadius: '15px', /* Increase border-radius for more rounded corners */
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', /* Increase box shadow for a more pronounced effect */
    width: '400px', /* Increase width for a wider form */
    margin: 'auto',
    marginTop: '100px',
  };

  const inputStyle = {
    margin: '10px',
    padding: '12px', /* Increase padding for better input field feel */
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '8px', /* Increase border-radius for input fields */
    border: '1px solid #ccc', /* Add a subtle border for better visibility */
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
    textAlign: 'left', // Align form elements to the left
    margin: 'auto', // Center align the form
  };

  return (
    <div style={contactStyle}>
      <h2>Contact Us</h2>
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '150px' }}
          ></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
        {formError && <p style={{ color: '#e74c3c', marginTop: '10px' }}>{formError}</p>}
        {formSuccess && <p style={{ color: '#2ecc71', marginTop: '10px' }}>{formSuccess}</p>}
      </div>
    </div>
  );
};

export default Contact;
