import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div>
      <h1>Service</h1>
      <p>This is the Service page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Service;
