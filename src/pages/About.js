import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default About;
