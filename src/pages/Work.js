import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div>
      <h1>Work</h1>
      <p>This is the Work page.</p>
      <Link to="/" className="minji">MINJI</Link>
    </div>
  );
}

export default Work;
