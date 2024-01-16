// About.js
import React from 'react';

const About = () => {
  const aboutStyle = {
    textAlign: 'center',
    padding: '30px', /* Increase padding for better spacing */
    backgroundColor: '#27ae60', /* Change background color to a green shade for contrast */
    color: '#fff', /* Change text color to white */
    borderRadius: '15px', /* Increase border-radius for more rounded corners */
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', /* Increase box shadow for a more pronounced effect */
  };

  const headingStyle = {
    color: '#fff', /* Change heading text color to white */
    fontSize: '32px', /* Increase font size for better emphasis */
    marginBottom: '15px', /* Add margin-bottom for spacing */
  };

  const paragraphStyle = {
    color: '#eee', /* Change paragraph text color to a lighter shade */
    fontSize: '18px', /* Adjust font size for better readability */
    lineHeight: '1.6', /* Adjust line height for better readability */
  };

  return (
    <div style={aboutStyle}>
      <h2 style={headingStyle}>Explore Our Story</h2>
      <p style={paragraphStyle}>Discover the journey and vision that drive us forward.</p>
    </div>
  );
};

export default About;
