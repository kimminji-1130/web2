import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Contact;
